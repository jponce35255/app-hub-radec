import { Component, EventEmitter, Output } from '@angular/core';
import { NavOption } from '../../interfaces/NavOption';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppListComponent } from '../app-list/app-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Output() searchChanged = new EventEmitter<string>();  // Emisor para el texto de búsqueda
  public searchText: string = '';
  public navList: NavOption[] = [
    {
      route: '',
      name: 'El Godinario',
      icon: '',
      submenu: [
        {
          route: 'https://sites.google.com/view/elgodinarioradec/inicio',
          name: 'Ingresa al Sitio',
          icon: '../assets/godinario-icon.png',
        },
        {
          route: 'https://www.tiktok.com/@elgodinarioradec',
          name: '@elgodinarioradec',
          icon: '../assets/tiktok-icon.png',
        },
      ]
    },
    {
      route: '',
      name: 'Farosystem',
      icon: '',
      submenu: [
        {
          route: 'https://fortiaapp.radec.com.mx/RADEC/KioscoPrime/Seguridad/LogOn?ReturnUrl=%2FRADEC%2FKioscoPrime%2F',
          name: 'Kiosko',
          icon: '',
        },
        {
          route: 'https://fortiaapp.radec.com.mx/RADEC/FortiaPrime/Seguridad/LogOn',
          name: 'Aplicativo',
          icon: '',
        },
      ]
    },
    {
      route: '',
      name: 'El Faro',
      icon: '',
      submenu: [
        {
          route: '',
          name: 'Ilumina tu vida',
          icon: '',
        },
        {
          route: '',
          name: 'El Faro Café',
          icon: '',
        },
      ]
    },

  ]

  constructor(){}

  onSearchChange() {
    this.searchChanged.emit(this.searchText);
  }
}
