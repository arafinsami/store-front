import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { PaymentDto } from "../dtos/payment.dto";
import { ProfileDto } from "../dtos/profile.dto";
import { ShippingDto } from "../dtos/shipping.dto";

@Injectable()
export class MyProfileService {

    constructor(private http: HttpClient) { }

    viewProfile(username: string): Observable<any> {
        return this.http.get(environment.BASE_URL + 'my-profile/view-profile/' + username);
    }

    updateProfile(dto: ProfileDto): Observable<any> {
        return this.http.post(environment.BASE_URL + 'my-profile/update', dto);
    }

    savePayment(dto: PaymentDto): Observable<any> {
        return this.http.post(environment.BASE_URL + 'my-profile/save/payment', dto);
    }

    updatePayment(dto: PaymentDto): Observable<any> {
        return this.http.put(environment.BASE_URL + 'my-profile/update/payment', dto);
    }

    findByPaymentId(paymentId: Number): Observable<any> {
        return this.http.get(environment.BASE_URL + 'my-profile/view/payment/' + paymentId);
    }

    viewPaymentListByAppUser(username: string): Observable<any> {
        return this.http.get(environment.BASE_URL + 'my-profile/view/payments/' + username);
    }

    public saveShipping(dto: ShippingDto): Observable<any> {
        return this.http.post(environment.BASE_URL + 'my-profile/save/shipping', dto);
    }

    public updateShipping(dto: ShippingDto): Observable<any> {
        return this.http.put(environment.BASE_URL + 'my-profile/update/shipping', dto);
    }

    public findByShippingId(shippingId: Number): Observable<any> {
        return this.http.get(environment.BASE_URL + 'my-profile/view/shipping/' + shippingId);
    }

    public viewShippingListByAppUser(username: string): Observable<any> {
        return this.http.get(environment.BASE_URL + 'my-profile/view/shippings/' + username);
    }

}