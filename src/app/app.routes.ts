import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES),
        pathMatch: 'full'
    },
    { 
        path: 'projects', 
        loadChildren: () => import('./projects/projects.routes').then(m => m.PROJECTS_ROUTES)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
