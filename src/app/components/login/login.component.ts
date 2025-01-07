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
    private authService: AuthService
  ) {
    // Inicialización del formulario
    this.loginForm = this.formBuilder.group({
      usuario: ['', [Validators.required]], //Valida que el campo corresponda a un correo
      password: ['', [Validators.required, Validators.minLength(6)]] //Valida que el campo tenga una longitud minima de 6 caracteres
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
  }

  onSubmit(): void {
    this.messageError = '';
    this.passwordError = '';

    if (this.loginForm.valid) { //Valida que se cumplan los requerimientos del formulario
      if(this.loginForm.value.password != "123456"){
        this.messageError = "Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.";
        return;
      }
      this.onLogin();
      //this.router.navigateByUrl('/', { replaceUrl: true }); //Redirigir y reemplazar el historial
      // TODO: Agregar un toast notification tras inicio de sesion exitoso
      // TODO: Redireccionar al home tras loguearse

    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onLogin(): void {
    let {username, password} = this.loginForm.value;

    this.authService.login(username, password).subscribe(
      (response) => {
        const token = response.token; // Suponiendo que la API devuelve un token en la respuesta
        this.authService.setToken(token);
        this.router.navigate(['/']);  // Redirige a un área protegida
        console.log(response);
      },
      (error) => {
        this.messageError = 'Credenciales incorrectas.';
        console.log(error);
      }
    );
  }
}
