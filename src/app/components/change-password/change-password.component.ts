import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputT1Component } from '../../shared/input/input-t1.component';

@Component({
  selector: 'app-change-password',
  imports: [
    CommonModule,
    FormsModule,
    InputT1Component,
    ReactiveFormsModule
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
   public email: string ="";
    private _changePassword: boolean = false;
    public isAnimating: boolean = false;


    @Input()
    set changePassword(value: boolean) {
      this._changePassword = value;
    }

    get changePassword(): boolean {
      return this._changePassword;
    }

    @Output()
    public closeCard: EventEmitter<boolean> = new EventEmitter<boolean>();

    public passwordForm: FormGroup;

    constructor(
      private formBuilder: FormBuilder,
     ){
      this.passwordForm = this.formBuilder.group({
        user: ['', [Validators.required]],
        currentPass: ['', [Validators.required]],
        newPass: ['', [Validators.required, Validators.minLength(8)]],
        confirmPass: ['', [Validators.required, Validators.minLength(8)]],
      });
    }

    closeCardHandler(): void {
      this.isAnimating = true;
      this._changePassword = false;
      this.closeCard.emit(this._changePassword);
    }

    onAnimationEnd() {
      if (!this.changePassword) {
        this.isAnimating = false;
      }
    }

    onSubmit(): void {
      alert("Contraseña actualizada: " + this.passwordForm.value.newPass);
    }
}
