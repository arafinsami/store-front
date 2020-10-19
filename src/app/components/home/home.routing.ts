import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';


const routesList: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routesList)]
})
export class HomeRoutingModule { }