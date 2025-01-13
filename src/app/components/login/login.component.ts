import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../core/services/auth.service';
import { InputT1Component } from '../../shared/input/input-t1.component';
import { ButtonT1Component } from '../../shared/button-t1/button-t1.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { ToastrService } from 'ngx-toastr';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    InputT1Component,
    ButtonT1Component,
    FormsModule,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    SpinnerComponent
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, AfterViewInit {

  public loginForm: FormGroup;

  public forgotPassword: boolean = false;
  public changePassword: boolean = false;
  public isLoading: boolean = false;

  public passwordError: string = '';
  public messageError: string = '';


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastService: ToastrService
  ) {
    // Inicialización del formulario
    this.loginForm = this.formBuilder.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });


  }

  console(){
    console.log(this.forgotPassword)
  }
  ngOnInit(): void {}

  ngAfterViewInit(): void {
  }

  onSubmit(): void {
    this.isLoading = true;
    this.messageError = '';
    this.passwordError = '';

    if (this.loginForm.valid) {
      const { user, password } = this.loginForm.value;

      this.authService.login(user, password).subscribe(
        (response) => {
          const { access_token, expires_in } = response;

          setTimeout(() => {
            this.authService.setToken(access_token!, expires_in!);
            this.toastService.success('Sesion iniciada', '¡Éxito!');
            this.isLoading = false;
            this.router.navigate(['/']);
          }, 100);
        },
        (error) => {
          setTimeout(() => {
            this.isLoading = false;
            this.messageError = error.error.error_description;
            this.toastService.error(this.messageError, 'ERROR')
          }, 100);
        }
      );
    }
  }

  updateValue(type: string){
    if(type === 'RECOVER'){
      this.forgotPassword = true;
      this.changePassword = false;
    } else if(type === 'CHANGE'){
      this.changePassword = true;
      this.forgotPassword = false;
    }
  }

}
