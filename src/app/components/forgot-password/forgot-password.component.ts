import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputT1Component } from '../../shared/input/input-t1.component';

@Component({
  selector: 'app-forgot-password',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    InputT1Component
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  public email: string ="";
  private _forgotPassword: boolean = false;
  public isAnimating: boolean = false;


  @Input()
  set forgotPassword(value: boolean) {
    this._forgotPassword = value;
  }

  get forgotPassword(): boolean {
    return this._forgotPassword;
  }

  @Output()
  public closeCard: EventEmitter<boolean> = new EventEmitter<boolean>();

  public passwordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
   ){
    this.passwordForm = this.formBuilder.group({
      email: ['', [Validators.required]]
    });
  }

  closeCardHandler(): void {
    this.isAnimating = true;
    this._forgotPassword = false;
    this.closeCard.emit(this._forgotPassword);
  }

  onAnimationEnd() {
    if (!this.forgotPassword) {
      this.isAnimating = false;
    }
  }

  onSubmit(): void {
    alert("Correo enviado");
  }
}
