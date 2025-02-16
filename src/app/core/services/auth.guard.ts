import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('auth_token');
    const expiresIn = localStorage.getItem('expires_in');

    // if (token && route.url[0].path === 'login') {
    //   this.router.navigate(['/']);
    //   return false;
    // }

    if (token && expiresIn) {
      const expirationDate = this.getExpirationDate(Number(expiresIn));

      if (expirationDate > new Date()) {
        return true;  // El token no ha expirado
      }
    }

    // Redirigir al login si el token ha expirado o no existe
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  // Método para calcular la fecha de expiración
  private getExpirationDate(expiresIn: number): Date {
    const issueDate = localStorage.getItem('auth_issue_date');
    if (issueDate) {
      const issueDateParsed = new Date(issueDate);
      issueDateParsed.setSeconds(issueDateParsed.getSeconds() + expiresIn);  // Sumamos el tiempo de expiración al tiempo de emisión
      return issueDateParsed;
    }
    return new Date();  // Si no se tiene fecha de emisión, el token no es válido
  }


}
