import { Routes } from '@angular/router';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
    {path : '', redirectTo : 'login', pathMatch : 'full'},
    {path : 'register' , component : RegisterComponent},
    {path : 'login' , component : LoginComponent}
];
