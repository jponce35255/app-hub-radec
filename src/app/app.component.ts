import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxToastNotifierModule } from 'ngx-toast-notifier';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
