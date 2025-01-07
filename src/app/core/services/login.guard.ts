import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('auth_token');
    const expiresIn = localStorage.getItem('expires_in');

    if (token && expiresIn) {
      const expirationDate = this.getExpirationDate(Number(expiresIn));
      if (expirationDate > new Date()) {
        this.router.navigate(['/']);
        return false;
      }
    }
    return true;
  }

  private getExpirationDate(expiresIn: number): Date {
    const issueDate = localStorage.getItem('auth_issue_date');
    if (issueDate) {
      const issueDateParsed = new Date(issueDate);
      issueDateParsed.setSeconds(issueDateParsed.getSeconds() + expiresIn);  // Sumar tiempo de expiración
      return issueDateParsed;
    }
    return new Date();  // Si no hay fecha de emisión, el token no es válido
  }
}
