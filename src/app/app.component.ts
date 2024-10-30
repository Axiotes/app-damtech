import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfosComponent } from "./components/infos/infos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InfosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
