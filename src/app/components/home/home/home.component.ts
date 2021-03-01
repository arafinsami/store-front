import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BookDto } from 'src/app/dtos/book.dto';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public filterQuery = "";
  public rowsOnPage = 5;

  private book: Book;
  private bookDtos: BookDto[];

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  getBookList() {
    this.route.queryParams.subscribe(params => {
      if (params['bookList']) {
        console.log("filtered book list");
        this.bookDtos = JSON.parse(params['bookList']);
      } else {
        this.bookService.getBookList().subscribe(response => {
          console.log(response.json());
          this.bookDtos = response.json();
        }, error => {
          console.log(error);
        }
        );
      }
    });
  }
  
}
