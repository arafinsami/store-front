import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BASE_URL, SIGNUP_URL } from '../constants/api.endpoint';
import { map } from 'rxjs/operators';
import { SignupDto } from '../dtos/signup.dto';
import { Observable } from 'rxjs';
import { ForgetPasswordDto } from '../dtos/forgetpassword.dto';

@Injectable()
export class MyAccountService {

    constructor(private http: HttpClient) { }

    jwtHelper = new JwtHelperService();

    login(model: any) {
        return this.http.post(BASE_URL + 'my-account/login', model)
            .pipe(
                map((response: any) => {
                    let data = response;
                    let user = data.data;
                    if (user != null) {
                        const tokenStr = 'Bearer ' + user.token;
                        localStorage.setItem('token', tokenStr);
                    }
                })
            );
    }

    loggedIn() {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }

    getToken(): string {
        return localStorage.getItem('token');
    }

    logout() {
        localStorage.removeItem('token');
        sessionStorage.clear();
    }

    public signup(dto: SignupDto): Observable<any> {
        return this.http.post(BASE_URL + SIGNUP_URL, dto);
    }

    public forgetPassword(dto: ForgetPasswordDto): Observable<any> {
        return this.http.post(BASE_URL + SIGNUP_URL, dto);
    }
}