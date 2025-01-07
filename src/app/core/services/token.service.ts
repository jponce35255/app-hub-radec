import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private authService: AuthService) {}

  isTokenExpired(): boolean {
    const token = this.authService.getToken();
    if (!token) {
      return true;
    }

    const decodedToken = this.decodeToken(token);
    const expirationDate = new Date(decodedToken.exp * 1000); // Convertir de segundos a milisegundos
    return expirationDate < new Date();
  }

  decodeToken(token: string): any {
    const payload = token.split('.')[1];
    const decoded = atob(payload);  // Decodificar la parte del payload
    return JSON.parse(decoded);
  }
}
