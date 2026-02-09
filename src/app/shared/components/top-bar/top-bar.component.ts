import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  @Input() pageTitle = '';
  @Input() pageSubtitle = '';
  @Input() showUserMenu = false;
  @Input() isMobile = false;

  @Output() toggleSidebar = new EventEmitter<MouseEvent>();
  @Output() toggleUserMenu = new EventEmitter<MouseEvent>();
  @Output() closeUserMenu = new EventEmitter<void>();

  onToggleSidebar(event: MouseEvent) {
    this.toggleSidebar.emit(event);
  }

  onToggleUserMenu(event: MouseEvent) {
    this.toggleUserMenu.emit(event);
  }

  onCloseUserMenu() {
    this.closeUserMenu.emit();
  }
}
