import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material/tabs";
import { ToastarService } from "src/app/service/toastar.service";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { MyProfileRoutingModule } from "./my-profile.routing";
import { OrderComponent } from "./order/order.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { ViewUserComponent } from "./view-user/view-user.component";
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyProfileService } from "src/app/service/my-profile.service";
import { PaymentComponent } from './payment/payment.component';
import { MyAccountService } from "src/app/service/myaccount.service";
import { httpInterceptorProviders } from "src/app/interceptor/auth-interceptor";
import { NgxSpinnerModule } from "ngx-spinner";
import { PaymentUpdateComponent } from './payment-update/payment-update.component';
import { ShippingUpdateComponent } from './shipping-update/shipping-update.component';


@NgModule({
    imports: [
        CommonModule,
        MyProfileRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatTabsModule,
        NgxSpinnerModule
    ],
    declarations: [
        ViewUserComponent,
        EditUserComponent,
        OrderComponent,
        ShippingComponent,
        MyProfileComponent,
        PaymentComponent,
        PaymentUpdateComponent,
        ShippingUpdateComponent
    ],
    providers: [
        MyProfileService,
        MyAccountService,
        ToastarService,
        httpInterceptorProviders
    ]
})
export class MyProfileModule { }