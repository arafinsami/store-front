import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home/home.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FrelancerComponent } from './frelancer/frelancer.component';
import { MaterialModule } from 'src/app/materials/material';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        HttpClientModule,
        NgxSpinnerModule,
        MaterialModule,
        NgxSliderModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [HomeComponent, FrelancerComponent],
    providers: []
})
export class HomeModule { }