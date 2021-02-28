import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home/home.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        HttpClientModule,
        NgxSpinnerModule
    ],
    declarations: [HomeComponent],
    providers: []
})
export class HomeModule { }