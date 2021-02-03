import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class MyProfileService {

    constructor(private http: HttpClient) { }

    public viewProfile(username: string): Observable<any> {
        return this.http.get(environment.BASE_URL + 'my-profile/view-profile/' + username);
    }

}