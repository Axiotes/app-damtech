import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [LucideAngularModule, NgFor, NgClass],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent implements OnInit {
  @Output() public selectedOption: EventEmitter<{
    option: string;
    title: string;
  }> = new EventEmitter<{ option: string; title: string }>();
  @Input() public title!: string;
  @Input() public options!: string[];
  @Input() public icon!: LucideIconData;
  public allOptions: { option: string; isSelected: boolean }[] = [];

  public chevronDown: LucideIconData = ChevronDown;

  public ngOnInit(): void {
    this.options.forEach((option) => {
      this.allOptions.push({ option, isSelected: false });
    });
  }

  public sendSelectedOption(option: string, title: string): void {
    this.allOptions.map((all) =>
      all.option === option ? (all.isSelected = true) : (all.isSelected = false)
    );

    this.selectedOption.emit({ option, title });
  }
}
