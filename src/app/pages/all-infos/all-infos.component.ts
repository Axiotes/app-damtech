import { Component, OnInit } from '@angular/core';
import { InfosComponent } from '../../components/infos/infos.component';
import { ApiDamService } from '../../service/api-dam.service';

@Component({
  selector: 'app-all-infos',
  standalone: true,
  imports: [InfosComponent],
  templateUrl: './all-infos.component.html',
  styleUrl: './all-infos.component.scss',
})
export class AllInfosComponent implements OnInit {
  constructor(private apiDamService: ApiDamService) {}

  ngOnInit() {
    this.apiDamService.getDams().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
