import { Component, OnInit } from '@angular/core';
import {
  BrickWall,
  Dam,
  Droplets,
  LucideAngularModule,
  MapPin,
  SendHorizontal,
  Wind,
} from 'lucide-angular';
import { DropdownFields } from '../../../types/dropdown-fields.type';
import { LucideIconData } from 'lucide-angular/icons/types';
import { DropdownComponent } from '../../components/dropdown/dropdown.component';
import { NgFor } from '@angular/common';
import { NewVisit } from '../../../types/new-visit.type';
import { Structure } from '../../../types/structure.type';
import { WaterLevel } from '../../../types/water-level.type';
import { Forecast } from '../../../types/forecast.type';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-registration',
  standalone: true,
  imports: [LucideAngularModule, DropdownComponent, NgFor, RouterLink],
  templateUrl: './data-registration.component.html',
  styleUrl: './data-registration.component.scss',
})
export class DataRegistrationComponent implements OnInit {
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
      options: ['baixo', 'moderado', 'alto', 'crítico'],
    },
    {
      icon: Wind,
      title: 'Clima local',
      options: ['seco', 'leve chuva', 'chuva intensa', 'tempestade'],
    },
  ];

  public optionStructure!: Structure;
  public optionWaterLevel!: WaterLevel;
  public optionForecast!: Forecast;
  public currentDate!: string;
  public idDam!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const data = new Date();
    this.currentDate = data.toLocaleDateString('pt-BR');

    this.route.params.subscribe((params) => {
      this.idDam = params['id_dam'];
    });
  }

  public receiveSelectedOption(selectedOption: {
    option: string;
    title: string;
  }): void {
    const attributeOption: { [key: string]: () => void } = {
      Estrutura: () =>
        (this.optionStructure = selectedOption.option as Structure),
      'Nível da água': () =>
        (this.optionWaterLevel = selectedOption.option as WaterLevel),
      'Clima local': () =>
        (this.optionForecast = selectedOption.option as Forecast),
    };

    attributeOption[selectedOption.title]();
  }

  public registerVisit(): void {
    const newVisit: NewVisit = {
      id_barragem: this.idDam,
      nivel_agua: this.optionWaterLevel,
      estrutura: this.optionStructure,
      previsao_climatica: this.optionForecast,
      data_visita: this.currentDate,
      status_barragem: 'Ativo',
    };
    console.log(newVisit);
  }
}
