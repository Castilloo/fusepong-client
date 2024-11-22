import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

export const AUTH_ROUTES: Routes = [
    {
        path: '',
            component: AuthLayoutComponent,
            children: [
                { path: '', component: RegisterComponent },
                { path: '', component: LoginComponent },
            ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
