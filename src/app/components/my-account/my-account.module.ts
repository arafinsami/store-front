import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MyAccountRoutingModule } from './m-account.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyAccountService } from 'src/app/service/myaccount.service';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';


@NgModule({
    imports: [
        CommonModule,
        MyAccountRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [
        LoginComponent,
        SignupComponent,
        ForgetPasswordComponent
    ],
    providers: [MyAccountService]
})
export class MyAccountModule { }