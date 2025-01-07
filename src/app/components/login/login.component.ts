import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, AfterViewInit {

  public loginForm: FormGroup; //Formulario
  public passwordError: string = '';
  public messageError: string = '';
  public showPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    // Inicialización del formulario
    this.loginForm = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
  }

  onSubmit(): void {
    this.messageError = '';
    this.passwordError = '';

    if (this.loginForm.valid) {
      const { usuario, password } = this.loginForm.value;

      this.authService.login(usuario, password).subscribe(
        (response) => {
          const { access_token, expires_in } = response;
          this.authService.setToken(access_token!, expires_in!);

          this.router.navigate(['/']);
        },
        (error) => {
          this.messageError = error.error.error_description;
          console.error(error);
        }
      );
    }
      // TODO: Agregar un toast notification tras inicio de sesion exitoso
      // TODO: Redireccionar al home tras loguearse
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
