import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'saborella-app';

  constructor(private navigationService: NavigationService) {
    // La inyección del servicio es suficiente para activar el comportamiento
    // ya que la lógica se ejecuta en el constructor del servicio
  }
}
