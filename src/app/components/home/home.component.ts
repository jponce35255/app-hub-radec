import { Component, EventEmitter, Output } from '@angular/core';
import { NavOption } from '../../interfaces/NavOption';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppListComponent } from '../app-list/app-list.component';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppListComponent,
    SpinnerComponent,
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Output() searchChanged = new EventEmitter<string>();  // Emisor para el texto de búsqueda

  // public searchText: string = '';
  public currentYear: number;
  public isLoading: boolean = false;
  public searchText: string  = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastrService
  ){
    this.currentYear = new Date().getFullYear();
  }

  onSearchChange() {
    this.searchChanged.emit(this.searchText);
  }

  onLogOut(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.toastService.success('Tu sesión ha finalizado.', '¡Éxito!')
      this.authService.logout();
      this.router.navigate(['/login']);
    }, 100);
  }
}
