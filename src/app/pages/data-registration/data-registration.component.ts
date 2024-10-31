import { Component } from '@angular/core';
import { BrickWall, Dam, Droplets, LucideAngularModule, MapPin, SendHorizontal, Wind } from 'lucide-angular';
import { DropdownFields } from '../../../types/dropdown-fields.type';
import { LucideIconData } from 'lucide-angular/icons/types';
import { DropdownComponent } from "../../components/dropdown/dropdown.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-data-registration',
  standalone: true,
  imports: [LucideAngularModule, DropdownComponent, NgFor],
  templateUrl: './data-registration.component.html',
  styleUrl: './data-registration.component.scss',
})
export class DataRegistrationComponent {
  public dam: LucideIconData = Dam;
  public mapPin: LucideIconData = MapPin;
  public send: LucideIconData = SendHorizontal;
  public dropdownFields: DropdownFields[] = [
    {
      icon: BrickWall,
      title: 'Estrutura',
      options: [
        'bom estado',
        'em atenção',
        'danos moderados',
        'danos críticos',
      ],
    },
    {
      icon: Droplets,
      title: 'Nível da água',
      options: ['baixo', 'moderado', 'alto', 'Crítico'],
    },
    {
      icon: Wind,
      title: 'Clima local',
      options: ['seco', 'leve chuva', 'chuva intensa', 'tempestade'],
    },
  ];
}
