import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { PaymentDto } from "../dtos/payment.dto";
import { ProfileDto } from "../dtos/profile.dto";

@Injectable()
export class MyProfileService {

    constructor(private http: HttpClient) { }

    public viewProfile(username: string): Observable<any> {
        return this.http.get(environment.BASE_URL + 'my-profile/view-profile/' + username);
    }

    public updateProfile(dto: ProfileDto): Observable<any> {
        return this.http.post(environment.BASE_URL + 'my-profile/update', dto);
    }

    public newPayment(dto: PaymentDto): Observable<any> {
        return this.http.post(environment.BASE_URL + 'my-profile/add/payment', dto);
    }

}