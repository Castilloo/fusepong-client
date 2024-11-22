import { Component, viewChild } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { CommonModule } from '@angular/common';
import { MatTab } from '@angular/material/tabs';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [MaterialModule, LoginComponent, RegisterComponent, CommonModule],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {
  // public isRegister: boolean = false;
  public loginTab = viewChild<MatTab>('loginTab');

  get isRegister(): boolean {
    return !this.loginTab()?.isActive;
  }
}
