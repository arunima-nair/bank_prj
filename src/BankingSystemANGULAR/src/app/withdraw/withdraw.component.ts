import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'app/services/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  withdrawForm: FormGroup;


  public contactNo: string;
  public initialized: boolean;

  constructor(
      private service: ServiceService,
      private toastr: ToastrService,
  ) {
      this.initialized = false;
  }

  ngOnInit(): void {
      this.service.refreshNeeded$.subscribe(() => {
          this.fetchProfile();
      });
      if (!this.initialized) {
          this.fetchProfile();
          this.initialized = true;
      }
      this.withdrawForm = new FormGroup(
        {
            accountno: new FormControl(this.contactNo),
            amount: new FormControl(null, Validators.required)
        }
    );
  }

  fetchProfile() {
      this.service.onFetchProfile().subscribe(
          response => {
          
              this.contactNo = response['contactNo'];
          }
      );
      console.log( this.contactNo)
  }

  withdrawFormSubmit() {
    const transferDetails = {
      accountNo: this.contactNo,
        amount: this.withdrawForm.value.amount
    };
    this.service.withdrawMoney(transferDetails).subscribe(
        response => {
            this.toastr.success(response['message']);
        }
    )
}
}