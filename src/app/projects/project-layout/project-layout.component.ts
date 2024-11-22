import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-project-layout',
  standalone: true,
  imports: [
    CommonModule, 
    MaterialModule,
    RouterOutlet, 
    RouterLink, 
  ],
  templateUrl: './project-layout.component.html',
  styleUrl: './project-layout.component.css'
})
export class ProjectLayoutComponent {
  public projects = ['Project 1', 'Project 2'];
}
