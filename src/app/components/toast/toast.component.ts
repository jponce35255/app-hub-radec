import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toast-notifications',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnInit {
  toasts: { id: string, tipo: string, titulo: string, descripcion: string, autoCierre: boolean }[] = [];

  constructor(){}

  ngOnInit(): void {}

   // Función para agregar un toast
   agregarToast({ tipo, titulo, descripcion, autoCierre }: { tipo: string, titulo: string, descripcion: string, autoCierre?: boolean }): void {
    const toastId = `${Date.now()}-${Math.floor(Math.random() * 100)}`;

    this.toasts.push({
      id: toastId,
      tipo,
      titulo,
      descripcion,
      autoCierre: autoCierre ?? false
    });

    if (autoCierre) {
      setTimeout(() => this.cerrarToast(toastId), 5000);  // Cierra el toast después de 5 segundos
    }
  }

  // Función para cerrar un toast
  cerrarToast(id: string): void {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
  }

  // Función que maneja el clic en el contenedor de botones
  onButtonClick(event: any): void {
    event.preventDefault();
    const tipo = event.target.dataset.tipo;

    switch (tipo) {
      case 'exito':
        this.agregarToast({ tipo: 'exito', titulo: 'Exito!', descripcion: 'La operación fue exitosa.', autoCierre: true });
        break;
      case 'error':
        this.agregarToast({ tipo: 'error', titulo: 'Error', descripcion: 'Hubo un error', autoCierre: true });
        break;
      case 'info':
        this.agregarToast({ tipo: 'info', titulo: 'Info', descripcion: 'Esta es una notificación de información.' });
        break;
      case 'warning':
        this.agregarToast({ tipo: 'warning', titulo: 'Warning', descripcion: 'Ten cuidado' });
        break;
      default:
        break;
    }
  }
}
