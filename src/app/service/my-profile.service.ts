import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class MyProfileService {

    constructor(private http: HttpClient) { }

}