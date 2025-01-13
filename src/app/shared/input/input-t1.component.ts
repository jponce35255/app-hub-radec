import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-t1',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './input-t1.component.html',
  styleUrl: './input-t1.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputT1Component),
      multi: true
    }
  ]
})

// ControlValueAccessor: Es una interfaz que permite vincular un componente personalizado a los formularios reactivos.
export class InputT1Component implements ControlValueAccessor{
  @Input()
  public label: string = 'Label';

  @Input()
  public placeholder: string = 'Placeholder';

  @Input()
  public type: string = 'text';

  value: any = '';

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  constructor() {}

  ngOnInit(): void {}

  // Actualiza el valor del componente cuando el formulario cambia
  writeValue(value: any): void {
    if (value !== undefined) {
      this.value = value;
    }
  }

  // Propaga los cambios del valor hacia el formulario
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  // Permite que el componente se marque como tocado
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Actualiza el valor del componente y lo propaga hacia el formulario reactivo
  setValue(event: any): void {
    this.value = event.target.value;
    this.onChange(this.value);
  }
}
