import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  @Input() public name!: string;
  @Input() public city!: string;
  @Input() public state!: string;
  @Input() public status!: string;
  @Input() public waterLevel!: string;
  @Input() public structure!: string;
  @Input() public forecast!: string;
  @Input() public lastUpdate!: string;

  public dam: LucideIconData = Dam;
  public chevronDown: LucideIconData = ChevronDown;
  public history: LucideIconData = History;

  public height: number = 175;
  public opacity: number = 1;
  public details: boolean = true;
  public isOpened: boolean = true;

  public toogleHeight(): void {
    this.isOpened = !this.isOpened;

    if (this.isOpened) {
      this.height = 175;
      this.opacity = 1;
      this.details = true;

      return;
    }

    this.height = 60;
    this.opacity = 0;
    setTimeout(() => {
      this.details = false;
    }, 200);
  }
}
