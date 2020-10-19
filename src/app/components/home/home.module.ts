import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        HttpClientModule
    ],
    declarations: [HomeComponent],
    providers: []
})
export class HomeModule { }