import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company, Projects, TicketDetails, User, UserStory } from '../interfaces/interfaces';
import { environment as env } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FusepongService {

  private _baseUrl = env.URL + 'api/fusepong';

  constructor(private _http: HttpClient) { 
    console.log('Service ready');
  }

  getUserById(id: number): Observable<User> {
    const url = `${this._baseUrl}/user/${id}`;
    return this._http.get<User>(url); 
  }

  getCompanyByUserId(userId: number): Observable<Company> {
    const url = `${this._baseUrl}/company-by-user/${userId}`;
    return this._http.get<Company>(url); 
  }

  getProjectsByCompanyId(companyId: number): Observable<Projects[]> {
    const url = `${this._baseUrl}/projects-by-company/${companyId}`;
    return this._http.get<Projects[]>(url); 
  }

  getStoriesByProjectId(projectId: number): Observable<UserStory[]> {
    const url = `${this._baseUrl}/stories-by-project/${projectId}`;
    return this._http.get<UserStory[]>(url);
  }

  getTicketDetails(id: number): Observable<TicketDetails> {
    const url = `${this._baseUrl}/ticket-details/${id}`;
    return this._http.get<TicketDetails>(url); 
  }

  getCompanyNames(): Observable<string[]> {
    const url = `${this._baseUrl}/companies`;
    return this._http.get<string[]>(url); 
  }
}
