import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MyAccountRoutingModule } from './m-account.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyAccountService } from 'src/app/service/myaccount.service';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ToastarService } from 'src/app/service/toastar.service';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
    imports: [
        CommonModule,
        MyAccountRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatTabsModule,
        NgxSpinnerModule
    ],
    declarations: [
        LoginComponent,
        SignupComponent,
        ForgetPasswordComponent,
        MyAccountComponent
    ],
    providers: [
        MyAccountService, 
        ToastarService,
    ]
})
export class MyAccountModule { }