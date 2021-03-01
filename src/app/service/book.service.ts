import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable()
export class BookService {

    constructor(private http: HttpClient) { }

    getBookList(): Observable<any> {
        return this.http.get(environment.BASE_URL + 'book/book/book-list');
    }
}