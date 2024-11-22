import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { JwtResponse } from '../interfaces/interfaces';
import { Router } from '@angular/router';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _loginUrl = env.URL + 'fusepong/';

  constructor(private _http: HttpClient,
    private _router: Router
  ) { }

  login(email: string, password: string): void {
    const url = this._loginUrl + 'login';

    const credentials = { email, password };
    
    this._http.post<JwtResponse | null>(url, credentials)
      .pipe(
        catchError(error => {
          console.error('Error de autenticación', error);
          return of(null);
        })
      ).subscribe({
        next: (response) => {
          if(response?.jwt)
          {
            localStorage.setItem('token', response.jwt);
            this._router.navigate(['/projects']); // Redirige a la página principal
          } else {
            console.error('Credenciales incorrectas');
          }
        },
        error: err => {
          throw err;
        }
      });
  }

}
