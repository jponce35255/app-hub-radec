import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private authService: AuthService) {}

  isTokenExpired(): boolean {
    const token = this.authService.getToken();
    const expiresIn = localStorage.getItem('expires_in');  // Tiempo de expiración en segundos

    if (!token || !expiresIn) {
      return true;
    }

    const expirationDate = this.getExpirationDate(Number(expiresIn));

    return expirationDate < new Date();  // Compara si la fecha de expiración ya pasó
  }

  private getExpirationDate(expiresIn: number): Date {
    const issuedAt = localStorage.getItem('auth_issue_date');
    if (!issuedAt) {
      return new Date();
    }

    const issuedDate = new Date(issuedAt);
    const expirationDate = new Date(issuedDate.getTime() + expiresIn * 1000);  // Expiración en milisegundos
    return expirationDate;
  }
}
