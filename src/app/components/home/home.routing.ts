import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { FrelancerComponent } from './frelancer/frelancer.component';


const routesList: Routes = [
    { path: '', component: HomeComponent },
    { path: 'abc', component: FrelancerComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routesList)]
})
export class HomeRoutingModule { }