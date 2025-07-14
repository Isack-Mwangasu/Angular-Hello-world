import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IsackComponent } from "./isack/isack.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IsackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Isack';
}
