
import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { MyAccountService } from '../service/myaccount.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: MyAccountService) { }

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler) {
        let authRequest = httpRequest;
        const token = this.authService.getToken();
        if (token != null) {
            authRequest = httpRequest.clone({ headers: httpRequest.headers.set(TOKEN_HEADER_KEY, token) });
        }
        return next.handle(authRequest);
    }
}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
