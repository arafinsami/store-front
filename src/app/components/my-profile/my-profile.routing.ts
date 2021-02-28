import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaymentComponent } from "./payment/payment.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { OrderComponent } from "./order/order.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { ViewUserComponent } from "./view-user/view-user.component";
import { PaymentUpdateComponent } from "./payment-update/payment-update.component";


const routes: Routes = [
    { path: 'profile', component: MyProfileComponent },
    { path: 'view-user', component: ViewUserComponent },
    { path: 'edit-user', component: EditUserComponent },
    { path: 'order', component: OrderComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'payment/update/:id', component: PaymentUpdateComponent },
    { path: 'shipping', component: ShippingComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class MyProfileRoutingModule { }