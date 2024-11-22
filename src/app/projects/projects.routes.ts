import { Routes } from '@angular/router';
import { ProjectLayoutComponent } from './project-layout/project-layout.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { StoryUserComponent } from './story-user/story-user.component';

export const PROJECTS_ROUTES: Routes = [
    {
        path: '',
        component: ProjectLayoutComponent,
        children: [
            { path: '', component: ProjectListComponent },
            { path: 'stories/:id', component: StoryUserComponent },
        ]
    }
];
