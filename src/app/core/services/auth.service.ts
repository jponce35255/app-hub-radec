import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private apiUrl = environment.apiServices;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('username', username)
      .set('password', password)

    // Configurar los headers, si es necesario (por ejemplo, para Content-Type)
    // const headers = new HttpHeaders()
    //   .set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.apiUrl, { username, password });
  }

  logout(): void {
    localStorage.removeItem('auth_token');
  }

  setToken(token: string): void {
    localStorage.setItem('auth_token', token);
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
