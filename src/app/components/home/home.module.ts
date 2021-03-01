import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home/home.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BookService } from 'src/app/service/book.service';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        HttpClientModule,
        NgxSpinnerModule
    ],
    declarations: [HomeComponent],
    providers: [
        BookService
    ]
})
export class HomeModule { }