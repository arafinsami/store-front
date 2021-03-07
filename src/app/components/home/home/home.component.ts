import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LENGTH, PAGE_SIZE, PAGE_SIZE_OPTIONS } from 'src/app/constants/constants';
import { BookDto } from 'src/app/dtos/book.dto';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  paramFormData: FormData;
  displayedColumns: string[] = ['slNo', 'photo', 'title', 'ourPrice', 'description'];

  dataSource: any;
  dto: BookDto = new BookDto();
  pageSize = PAGE_SIZE;
  length = LENGTH;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  bookForm: FormGroup;

  @ViewChild('booksPaginator', { static: false }) booksPaginator: MatPaginator;
  @ViewChild('booksSort', { static: true }) booksSort: MatSort;

  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this.paramFormData = new FormData();
  }

  ngOnInit(): void {
    this.initDefaultParams();
    this.getBooks();
    this.formInit();
  }

  initDefaultParams() {
    this.paramFormData.append('page', '0');
    this.paramFormData.append('size', '10');
    this.paramFormData.append('title', '');
  }

  formInit() {
    this.bookForm = this.fb.group({
      title: ['']
    });
  }

  onSubmit() {
    this.formData();
    this.getBooks();
  }

  formData() {
    this.paramFormData.set('title', this.bookForm.value.title);
  }

  getBooks() {
    this.bookService.getBookList(this.paramFormData).subscribe(data => {
      this.dataSource = new MatTableDataSource<BookDto>(this.dto.getBookList(data.data.lists));
      this.cdr.detectChanges();
      if (this.length != data.data.total) {
        this.length = data.data.total;
      }
    }, error => {
      console.log(error);
    });
  }

  async getNext(event: PageEvent) {
    this.paramFormData.set('page', event.pageIndex.toString());
    this.paramFormData.set('size', event.pageSize.toString());
    await this.getBooks();
  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

}
