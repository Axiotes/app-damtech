import { Component } from '@angular/core';
import { LucideAngularModule, MapPin, SendHorizontal } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public mapPin: LucideIconData = MapPin;
  public sendHorizontal: LucideIconData = SendHorizontal;
}
