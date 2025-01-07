import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiServicesResponse } from '../models/ApiServicesResponse';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private apiUrl = environment.apiServices;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<ApiServicesResponse> {
    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('username', username)
      .set('password', password)

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post<ApiServicesResponse>(this.apiUrl, body.toString(), { headers });
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('expires_in');
    localStorage.removeItem('auth_issue_date');
  }

  setToken(token: string, expiration: number): void {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('expires_in', expiration.toString());

    const issueDate = new Date().toISOString();  // Fecha actual en formato ISO
    localStorage.setItem('auth_issue_date', issueDate);
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) {
      // Puedes agregar lógica aquí para verificar si el token sigue siendo válido
      return true;
    }
    return false;
  }
}
