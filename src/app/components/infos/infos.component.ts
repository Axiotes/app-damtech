import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ChevronDown, Dam, History, LucideAngularModule } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-infos',
  standalone: true,
  imports: [LucideAngularModule, NgStyle, NgIf, NgClass, RouterLink],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.scss',
})
export class InfosComponent implements OnInit {
  @Input() public name!: string;
  @Input() public city!: string;
  @Input() public state!: string;
  @Input() public status!: string;
  @Input() public waterLevel!: string;
  @Input() public structure!: string;
  @Input() public forecast!: string;
  @Input() public lastUpdate!: string;
  @Input() public idDam!: number;

  public authenticated: boolean = false;

  public dam: LucideIconData = Dam;
  public chevronDown: LucideIconData = ChevronDown;
  public history: LucideIconData = History;

  public height: number = 60;
  public opacity: number = 0;
  public details: boolean = false;
  public isOpened: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const currentRoute = this.router.url;
    this.authenticated = currentRoute.split('/')[2] === 'admin-users';
  }

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
