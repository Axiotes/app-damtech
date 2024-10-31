import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [LucideAngularModule, NgFor],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input() public title!: string;
  @Input() public options!: string[];
  @Input() public icon!: LucideIconData;

  public chevronDown: LucideIconData = ChevronDown;
}
