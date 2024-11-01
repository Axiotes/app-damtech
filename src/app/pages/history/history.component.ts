import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dam, LucideAngularModule, MoveLeft } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';
import { CardHistoryComponent } from "../../components/card-history/card-history.component";

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [LucideAngularModule, CardHistoryComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit {
  public idDam!: number;

  public moveLeft: LucideIconData = MoveLeft;
  public dam: LucideIconData = Dam;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idDam = params['id_dam'];
    });
  }
}
