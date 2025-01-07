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
      name: 'App 1',
      url: 'https://app1.com',
      imageUrl: '../../assets/radec-logo.png',  // https://via.placeholder.com/150
      description: 'Descripción breve de App 1'
    },
    {
      name: 'App 2',
      url: 'https://app2.com',
      imageUrl: '../../assets/radec-logo.png',
      description: 'Descripción breve de App 2'
    },
    {
      name: 'App 3',
      url: 'https://app3.com',
      imageUrl: '../../assets/radec-logo.png',
      description: 'Descripción breve de App 3'
    },
    {
      name: 'App 1',
      url: 'https://app1.com',
      imageUrl: '../../assets/radec-logo.png',
      description: 'Descripción breve de App 1'
    },
    {
      name: 'App 2',
      url: 'https://app2.com',
      imageUrl: '../../assets/radec-logo.png',
      description: 'Descripción breve de App 2'
    },
    {
      name: 'App 3',
      url: 'https://app3.com',
      imageUrl: '../../assets/radec-logo.png',
      description: 'Descripción breve de App 3'
    },
    {
      name: 'App 1',
      url: 'https://app1.com',
      imageUrl: '../../assets/radec-logo.png',
      description: 'Descripción breve de App 1'
    },
    {
      name: 'App 2',
      url: 'https://app2.com',
      imageUrl: '../../assets/radec-logo.png',
      description: 'Descripción breve de App 2'
    },
    {
      name: 'App 3',
      url: 'https://app3.com',
      imageUrl: '../../assets/radec-logo.png',
      description: 'Descripción breve de App 3'
    }
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
}
