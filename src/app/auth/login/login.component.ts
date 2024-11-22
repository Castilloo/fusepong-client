import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { AuthService } from '../../core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService]
})
export class LoginComponent {
  private _authService = inject(AuthService);
  private _router = inject(Router);

  public email: string = '';
  public password: string = '';
  public error: string = '';

  login(): void {
    this._authService.login(this.email, this.password);
  }
}
