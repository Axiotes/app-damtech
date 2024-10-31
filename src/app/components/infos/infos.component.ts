import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ChevronDown, Dam, History, LucideAngularModule } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-infos',
  standalone: true,
  imports: [LucideAngularModule, NgStyle, NgIf, NgClass],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.scss',
})
export class InfosComponent {
  public dam: LucideIconData = Dam;
  public chevronDown: LucideIconData = ChevronDown;
  public history: LucideIconData = History;

  public height: number = 175;
  public opacity: number = 1;
  public margin: number = 0;
  public isOpened: boolean = true;


  public toogleHeight(): void {
    this.isOpened = !this.isOpened;

    if (this.isOpened) {
      this.height = 175;
      this.opacity = 1;
      this.margin = 0;

      return;
    }

    this.height = 60;
    this.opacity = 0;
    this.margin = 20;
  }
}
