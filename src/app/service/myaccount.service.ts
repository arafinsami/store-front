import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LOGIN_URL, SIGNUP_URL, FORGET_PASSWORD_URL } from '../constants/api.endpoint';
import { map } from 'rxjs/operators';
import { SignupDto } from '../dtos/signup.dto';
import { Observable } from 'rxjs';
import { ForgetPasswordDto } from '../dtos/forgetpassword.dto';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class MyAccountService {

    constructor(private http: HttpClient) { }

    jwtHelper = new JwtHelperService();

    login(model: any) {
        return this.http.post(environment.BASE_URL + LOGIN_URL, model)
            .pipe(
                map((response: any) => {
                    let data = response;
                    let user = data.data;
                    if (user != null) {
                        const tokenStr = 'Bearer ' + user.token;
                        localStorage.setItem('token', tokenStr);
                        localStorage.setItem('isLoggedIn', 'true');
                        localStorage.setItem('username', user.username);
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

    getLogggedInStatus(): string {
        return localStorage.getItem('isLoggedIn');
    }

    getLogggedInUser(): string {
        return localStorage.getItem('username');
    }

    logout() {
        localStorage.clear();
    }

    signup(dto: SignupDto): Observable<any> {
        return this.http.post(environment.BASE_URL + SIGNUP_URL, dto);
    }

    forgetPassword(dto: ForgetPasswordDto): Observable<any> {
        return this.http.post(environment.BASE_URL + FORGET_PASSWORD_URL, dto);
    }
}