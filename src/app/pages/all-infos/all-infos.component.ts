import { Component, OnInit } from '@angular/core';
import { InfosComponent } from '../../components/infos/infos.component';
import { ApiDamService } from '../../service/api-dam.service';
import { Dam } from '../../../types/dam.type';
import { Visit } from '../../../types/visit.type';
import { Infos } from '../../../types/infos.type';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-all-infos',
  standalone: true,
  imports: [InfosComponent, NgFor],
  templateUrl: './all-infos.component.html',
  styleUrl: './all-infos.component.scss',
})
export class AllInfosComponent implements OnInit {
  public allDams!: Dam[];
  public allVisits!: Visit[];
  public allInfos: Infos[] = [];
  public infos!: Infos[];

  constructor(private apiDamService: ApiDamService) {}

  ngOnInit() {
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

    this.infos = Object.values(
      this.allInfos.reduce((acc, info) => {
        if (
          !acc[info.id_barragem] ||
          info.id_visita > acc[info.id_barragem].id_visita
        ) {
          acc[info.id_barragem] = info;
        }
        return acc;
      }, {} as { [key: number]: Infos })
    );
  }
}
