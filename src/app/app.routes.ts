import { Routes } from '@angular/router';

// ?? Componentes
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { Err404Component } from './components/err404/err404.component';

// ** Array path's
export const ROUTES : Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'user/:id', component: UserComponent },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: '**', pathMatch: 'full', component: Err404Component }
];