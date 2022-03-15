import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  transactions: any;
  public email: string;
  public name: string;
  public contactNo: string;
  public initialized: boolean;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getTransactions();
    this.service.refreshNeeded$.subscribe(() => {
      this.fetchProfile();
  });
  if (!this.initialized) {
      this.fetchProfile();
      this.initialized = true;
  }
  }
  fetchProfile() {
    this.service.onFetchProfile().subscribe(
        response => {
            this.email = response['email'];
            this.name = response['name'];
            this.contactNo = response['contactNo'];
        }
    );
}
  getTransactions(){
    this.service.getTransactions().subscribe(
        response => {

          this.transactions = response;
          console.log(this.transactions);
        }
    );

  }

formatDate(date) {
  return formatDate(date, 'mediumDate', 'en-us', '+530');
}

}
