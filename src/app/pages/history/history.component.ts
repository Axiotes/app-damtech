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
  public damName!: string;
  public damCity!: string;
  public damState!: string;

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
}
