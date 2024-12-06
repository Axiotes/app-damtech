import { Component, OnInit } from '@angular/core';
import { InfosComponent } from '../../components/infos/infos.component';
import { ApiDamService } from '../../service/api-dam.service';
import { DamType } from '../../../types/dam.type';
import { Visit } from '../../../types/visit.type';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-all-infos',
  standalone: true,
  imports: [InfosComponent, NgFor],
  templateUrl: './all-infos.component.html',
  styleUrl: './all-infos.component.scss',
})
export class AllInfosComponent implements OnInit {
  public allDams!: DamType[];
  public allVisits!: Visit[];

  constructor(private apiDamService: ApiDamService) {}

  ngOnInit() {
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
