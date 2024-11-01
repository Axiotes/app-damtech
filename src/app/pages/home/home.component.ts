import { Component, OnInit } from '@angular/core';
import {
  Building2,
  LucideAngularModule,
  MapPin,
  SendHorizontal,
} from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';
import { DescriptionHome } from '../../../types/description-home.type';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LucideAngularModule, NgIf, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public mapPin: LucideIconData = MapPin;
  public sendHorizontal: LucideIconData = SendHorizontal;
  public building2: LucideIconData = Building2;

  public description!: DescriptionHome;
  public currentUser: string = 'all-users';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((url) => {
      this.currentUser = url[1].path;
    });

    const description: { [key: string]: DescriptionHome } = {
      'all-users': {
        title: 'Seja bem vindo ao DamTech!',
        text: 'Com o propósito de garantir sua segurança e manter você informados sobre barragens em sua região.',
        filter: 'Insira sua cidade e/ou estado:',
      },
      'admin-users': {
        title: 'Seja bem vindo ao DamTech para empresas',
        text: 'Destinado a empresas de fiscalização para garantir a proteção e a segurança das barragens.',
        filter: 'Insira a cidade e estado:',
      },
    };

    this.description = description[this.currentUser];
  }
}
