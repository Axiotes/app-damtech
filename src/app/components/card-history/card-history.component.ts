import { Component, Input } from '@angular/core';
import { CalendarDays, LucideAngularModule } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-card-history',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './card-history.component.html',
  styleUrl: './card-history.component.scss',
})
export class CardHistoryComponent {
  @Input() public date!: string;
  @Input() public status!: string;
  @Input() public waterLevel!: string;
  @Input() public structure!: string;
  @Input() public forecast!: string;

  public calendarDays: LucideIconData = CalendarDays;
}
