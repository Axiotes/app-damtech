import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Dam, LucideAngularModule, MoveLeft } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';
import { CardHistoryComponent } from '../../components/card-history/card-history.component';
import { ApiDamService } from '../../service/api-dam.service';
import { Visit } from '../../../types/visit.type';
import { Infos } from '../../../types/infos.type';
import { DamType } from '../../../types/dam.type';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [LucideAngularModule, CardHistoryComponent, NgFor, RouterLink],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent implements OnInit {
  public idDam!: number;
  public allDams!: DamType[];
  public allVisits!: Visit[];
  public allInfos: Infos[] = [];
  public infos: Infos[] = [];

  public moveLeft: LucideIconData = MoveLeft;
  public dam: LucideIconData = Dam;

  constructor(
    private route: ActivatedRoute,
    private apiDamService: ApiDamService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.idDam = params['id_dam'];
    });

    this.apiDamService.getDams().subscribe({
      next: (res) => {
        this.allDams = res;

        this.apiDamService.getVisits().subscribe({
          next: (res) => {
            this.allVisits = res;
            this.setInfos();
          },
          error: (error) => {
            console.error(error);
          },
        });
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  public setInfos(): void {
    this.allDams.forEach((dam) => {
      const damVisits = this.allVisits.filter(
        (visit) => visit.id_barragem === dam.id_barragens
      );

      damVisits.forEach((visit) => {
        this.allInfos.push({
          id_visita: visit.id_visita,
          id_barragem: dam.id_barragens,
          cidade: dam.cidade,
          estado: dam.estado,
          nome_barragens: dam.nome_barragens,
          nivel_agua: visit.nivel_agua,
          estrutura: visit.estrutura,
          previsao_climatica: visit.previsao_climatica,
          data_visita: visit.data_visita,
          status_barragem: visit.status_barragem,
        });
      });
    });

    this.allInfos.forEach((info) => {
      if (info.id_barragem == this.idDam) {
        this.infos.push(info);
      }
    });
  }
}
