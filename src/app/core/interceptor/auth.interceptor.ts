import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    const expiresIn = localStorage.getItem('expires_in');

    // Verificar si hay token y si no ha expirado
    if (token && expiresIn && !this.tokenService.isTokenExpired()) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(cloned);
    } else {
      // Si el token ha expirado o no existe, hacer logout y redirigir al login
      this.authService.logout();
      this.router.navigate(['/login']);
      return next.handle(req);
    }
  }
}
