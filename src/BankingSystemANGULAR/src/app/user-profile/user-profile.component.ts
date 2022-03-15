import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../services/service.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    public email: string;
    public name: string;
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

    updateProfile() {
        const userDetails = {
            name: this.name,
            email: this.email,
            contactNo: this.contactNo
        };
        console.log(userDetails);
        this.service.onUpdateProfile(userDetails).subscribe(
            response => {
                this.toastr.success(response['message']);
            }
        );
    }
}
