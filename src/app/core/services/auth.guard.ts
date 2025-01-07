import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = sessionStorage.getItem('auth_token') || localStorage.getItem('auth_token');

    if (token && this.isTokenValid(token)) {
      return true;
    }

    // Redirigir al login
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  // Método para validar el token (ejemplo básico, puede depender de tu implementación)
  private isTokenValid(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const isExpired = payload.exp && Date.now() / 1000 > payload.exp;
      return !isExpired;
    } catch (e) {
      return false;
    }
  }
}
