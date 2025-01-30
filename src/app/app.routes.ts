import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MyInicioComponent } from './components/my-inicio/my-inicio.component';
import { MyAutocuidadoComponent } from './components/my-autocuidado/my-autocuidado.component';
import { MyDocComponent } from './components/my-doc/my-doc.component';
import { OnMyAutocuidadoComponent } from './components/on-my-autocuidado/on-my-autocuidado.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/myinicio',
        pathMatch: 'full'
    },
    {
        path: 'myinicio',
        component: MyInicioComponent
    },
    {
        path: 'myautocuidado',
        component: MyAutocuidadoComponent
    },
    {
        path: 'mydoc',
        component: MyDocComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'OnMyAutocuidado',
        component: OnMyAutocuidadoComponent
    }
];


