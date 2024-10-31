import { Component } from '@angular/core';
import { InfosComponent } from "../../components/infos/infos.component";

@Component({
  selector: 'app-all-infos',
  standalone: true,
  imports: [InfosComponent],
  templateUrl: './all-infos.component.html',
  styleUrl: './all-infos.component.scss'
})
export class AllInfosComponent {

}
