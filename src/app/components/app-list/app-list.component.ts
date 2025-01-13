import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './app-list.component.html',
  styleUrl: './app-list.component.css'
})
export class AppListComponent implements OnChanges{
  @Input() searchText: string = '';
  applications: { name: string, url: string, imageUrl: string, description: string }[] = [
    {
      name: 'SISCA',
      url: 'http://192.168.103.247/sisca/?Sistema=SISCA',
      imageUrl: '../../assets/sisca.webp',  // https://via.placeholder.com/150
      description: 'Sistema para el control de aplicaciones'
    },
    {
      name: 'PWEB',
      url: 'http://192.168.103.247/prosesoweb/?Sistema=PWEB',
      imageUrl: '../../assets/proseso.jpg',
      description: 'Proseso WEB'
    },
    {
      name: 'SISDOC Alpin',
      url: 'http://192.168.103.247/SisdocAlpin/admin/?Sistema=SISDOC%20Alpin',
      imageUrl: '../../assets/doc.avif',
      description: 'Sistema de documentación de calidad'
    },
    {
      name: 'SISCA',
      url: 'http://192.168.103.247/sisca/?Sistema=SISCA',
      imageUrl: '../../assets/sisca.webp',  // https://via.placeholder.com/150
      description: 'Sistema para el control de aplicaciones'
    },
    {
      name: 'PWEB',
      url: 'http://192.168.103.247/prosesoweb/?Sistema=PWEB',
      imageUrl: '../../assets/proseso.jpg',
      description: 'Proseso WEB'
    },
    {
      name: 'SISDOC Alpin',
      url: 'http://192.168.103.247/SisdocAlpin/admin/?Sistema=SISDOC%20Alpin',
      imageUrl: '../../assets/doc.avif',
      description: 'Sistema de documentación de calidad'
    },
    {
      name: 'SISCA',
      url: 'http://192.168.103.247/sisca/?Sistema=SISCA',
      imageUrl: '../../assets/sisca.webp',  // https://via.placeholder.com/150
      description: 'Sistema para el control de aplicaciones'
    },
    {
      name: 'PWEB',
      url: 'http://192.168.103.247/prosesoweb/?Sistema=PWEB',
      imageUrl: '../../assets/proseso.jpg',
      description: 'Proseso WEB'
    },
    {
      name: 'SISDOC Alpin',
      url: 'http://192.168.103.247/SisdocAlpin/admin/?Sistema=SISDOC%20Alpin',
      imageUrl: '../../assets/doc.avif',
      description: 'Sistema de documentación de calidad'
    },
    {
      name: 'SISCA',
      url: 'http://192.168.103.247/sisca/?Sistema=SISCA',
      imageUrl: '../../assets/sisca.webp',  // https://via.placeholder.com/150
      description: 'Sistema para el control de aplicaciones'
    },
    {
      name: 'PWEB',
      url: 'http://192.168.103.247/prosesoweb/?Sistema=PWEB',
      imageUrl: '../../assets/proseso.jpg',
      description: 'Proseso WEB'
    },
    {
      name: 'SISDOC Alpin',
      url: 'http://192.168.103.247/SisdocAlpin/admin/?Sistema=SISDOC%20Alpin',
      imageUrl: '../../assets/doc.avif',
      description: 'Sistema de documentación de calidad'
    },
    {
      name: 'SISCA',
      url: 'http://192.168.103.247/sisca/?Sistema=SISCA',
      imageUrl: '../../assets/sisca.webp',  // https://via.placeholder.com/150
      description: 'Sistema para el control de aplicaciones'
    },
    {
      name: 'PWEB',
      url: 'http://192.168.103.247/prosesoweb/?Sistema=PWEB',
      imageUrl: '../../assets/proseso.jpg',
      description: 'Proseso WEB'
    },
    {
      name: 'SISDOC Alpin',
      url: 'http://192.168.103.247/SisdocAlpin/admin/?Sistema=SISDOC%20Alpin',
      imageUrl: '../../assets/doc.avif',
      description: 'Sistema de documentación de calidad'
    },
    {
      name: 'SISCA',
      url: 'http://192.168.103.247/sisca/?Sistema=SISCA',
      imageUrl: '../../assets/sisca.webp',  // https://via.placeholder.com/150
      description: 'Sistema para el control de aplicaciones'
    },
    {
      name: 'PWEB',
      url: 'http://192.168.103.247/prosesoweb/?Sistema=PWEB',
      imageUrl: '../../assets/proseso.jpg',
      description: 'Proseso WEB'
    },
    {
      name: 'SISDOC Alpin',
      url: 'http://192.168.103.247/SisdocAlpin/admin/?Sistema=SISDOC%20Alpin',
      imageUrl: '../../assets/doc.avif',
      description: 'Sistema de documentación de calidad'
    },
  ];
  filteredAppList = this.applications;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchText']) {
      this.filterApps();
    }
  }

  filterApps() {
    if (!this.searchText) {
      this.filteredAppList = this.applications;  // Si no hay búsqueda, se muestran todas las aplicaciones
    } else {
      this.filteredAppList = this.applications.filter(app =>
        app.name.toLowerCase().includes(this.searchText.toLowerCase()) ||  // Filtramos por nombre
        app.description.toLowerCase().includes(this.searchText.toLowerCase())  // O por descripción
      );
    }
  }

  openApp(url: string): void {
    window.open(url, '_blank');
  }

}
