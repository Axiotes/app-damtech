import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() public selectedOption: EventEmitter<{
    option: string;
    title: string;
  }> = new EventEmitter<{ option: string; title: string }>();
  @Input() public title!: string;
  @Input() public options!: string[];
  @Input() public icon!: LucideIconData;

  public chevronDown: LucideIconData = ChevronDown;

  public sendSelectedOption(option: string, title: string): void {
    this.selectedOption.emit({ option, title });
  }
}
