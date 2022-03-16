import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {AccountComponent} from './account/account.component';
import {StatementSummaryComponent} from './statement-summary/statement-summary.component';
import {AuthGuardService} from './guard/auth-guard.service';
import {LoginGuardService} from './guard/login-guard.service';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'login', component: LoginComponent, canActivate: [LoginGuardService]},
    {path: 'register', component: SignupComponent, canActivate: [LoginGuardService]},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
    {path: 'account', component: AccountComponent, canActivate: [AuthGuardService]},
    {path: 'deposit', component: DepositComponent, canActivate: [AuthGuardService]},
    {path: 'withdraw', component: WithdrawComponent, canActivate: [AuthGuardService]},
    {path: 'history', component: StatementSummaryComponent, canActivate: [AuthGuardService]},
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [],
})
export class AppRoutingModule {
}
