import { Component } from '@angular/core';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  public icon: LucideIconData = ChevronDown;
  public chevronDown: LucideIconData = ChevronDown;
}
