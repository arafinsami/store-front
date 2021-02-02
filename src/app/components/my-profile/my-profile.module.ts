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


@NgModule({
    imports: [
        CommonModule,
        MyProfileRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatTabsModule
    ],
    declarations: [
        ViewUserComponent,
        EditUserComponent,
        OrderComponent,
        ShippingComponent,
        MyProfileComponent
    ],
    providers: [MyProfileService, ToastarService]
})
export class MyProfileModule { }