import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {NavbarComponent} from './common/navbar/navbar.component';

import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {AccountComponent} from './account/account.component';
import {DepositComponent} from './deposit/deposit.component';
import {StatementSummaryComponent} from './statement-summary/statement-summary.component';
import {LoginComponent} from './login/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuardService} from './guard/auth-guard.service';
import {LoginGuardService} from './guard/login-guard.service';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { CreditDebitMaskPipePipe } from './common/credit-debit-mask-pipe.pipe';
import { JwtInterceptor } from './common/jwt.interceptor';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavbarComponent,
        SignupComponent,
        HomeComponent,
        ProfileComponent,
        AccountComponent,
        DepositComponent,
        StatementSummaryComponent,
        WithdrawComponent,
        CreditDebitMaskPipePipe,
    ],
    imports: [
        BrowserModule,
        NgbModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
    ],
    providers: [
        AuthGuardService, LoginGuardService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
