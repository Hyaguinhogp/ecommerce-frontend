import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbarCategories = [
    'tecnologia',
    'veículos',
    'moda',
    'arte',
    'esportes',
    'saúde',
    'beleza',
    'ofertas',
  ]
}
