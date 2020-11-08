import { Routes } from '@angular/router';

export const appRoutes: Routes = [

    {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'book',
        loadChildren: () => import('./components/book/book.module').then(m => m.BookModule)
    },
    {
        path: 'my-account',
        loadChildren: () => import('./components/my-account/my-account.module').then(m => m.MyAccountModule)
    },

    {
        path: '**', redirectTo: 'home'
    }

];
