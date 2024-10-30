import { Component } from '@angular/core';
import { ChevronDown, Dam, History, LucideAngularModule } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-infos',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.scss',
})
export class InfosComponent {
  public dam: LucideIconData = Dam;
  public chevronDown: LucideIconData = ChevronDown;
  public history: LucideIconData = History
}
