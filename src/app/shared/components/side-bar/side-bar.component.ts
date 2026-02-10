import { Component, EventEmitter, Output, Input, OnInit, Renderer2, WritableSignal, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutStore } from '../../../core/Services/layout.service';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  route: string;
  badge?: string | number;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() isCollapsed = false;
  @Output() collapsedChange = new EventEmitter<boolean>();
  layoutStore = inject(LayoutStore);

  activeItem = 'home';
  isHovered = signal<boolean>(false);
  inMobileView = signal<boolean>(window.innerWidth < 768);

  menuItems: WritableSignal<MenuItem[]> = signal([
    { id: 'home', label: 'Home', icon: '🏠', route: '/' },
    { id: 'properties', label: 'Properties', icon: '🏢', route: '/properties', badge: '12' },
    { id: 'vip', label: 'VIP Properties', icon: '⭐', route: '/vip', badge: 'NEW' },
    { id: 'contact', label: 'Contact Us', icon: '📞', route: '/contact' },
    { id: 'about', label: 'About Us', icon: 'ℹ️', route: '/about' },
    { id: 'agents', label: 'Agents', icon: '👨‍💼', route: '/agents', badge: '3' },
    { id: 'reports', label: 'Reports', icon: '📊', route: '/reports' }
  ]);

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.updateBodyClass();
  }

  get sidebarClasses(): string {
    const baseClasses = 'h-dvh max-h-dvh relative flex flex-col h-screen bg-white border-r border-realty-gray-200 shadow-xl transition-all duration-300 ease-in-out z-30 py-2 overflow-y-auto';
    const widthClass = this.isCollapsed ? 'w-20' : 'w-64';
    return `${baseClasses} ${widthClass} ${this.inMobileView() && this.isCollapsed ? '-translate-x-full': '-translate-x-0'}`;
  }

  getMenuItemClasses(itemId: string): string {
    const baseClasses = 'group relative flex items-center rounded-lg px-4 py-3 text-realty-gray-700 hover:bg-realty-blue-50 hover:text-realty-blue-600 transition-all duration-300 overflow-hidden';
    const activeClass = this.activeItem === itemId ? 'bg-realty-blue-50 text-realty-blue-600 shadow-sm' : '';

    return `${baseClasses} ${activeClass}`;
  }

  toggleSidebar(event?: MouseEvent): void {
    this.isCollapsed = !this.isCollapsed;
    this.layoutStore.setSidebar(this.isCollapsed);
    this.updateBodyClass();
  }

  setActiveItem(itemId: string): void {
    this.activeItem = itemId;

    if (window.innerWidth < 768) {
      this.isCollapsed = true;
      this.collapsedChange.emit(true);
      this.updateBodyClass();
    }
  }

  private updateBodyClass(): void {
    if (this.isCollapsed) {
      this.renderer.addClass(document.body, 'sidebar-collapsed');
      this.renderer.removeClass(document.body, 'sidebar-expanded');
    } else {
      this.renderer.addClass(document.body, 'sidebar-expanded');
      this.renderer.removeClass(document.body, 'sidebar-collapsed');
    }
  }

  // private createRippleEffect(event: MouseEvent): void {
  //   const button = event.target as HTMLElement;
  //   const ripple = this.renderer.createElement('span');
  //   const rect = button.getBoundingClientRect();

  //   const size = Math.max(rect.width, rect.height);
  //   const x = event.clientX - rect.left - size / 2;
  //   const y = event.clientY - rect.top - size / 2;

  //   this.renderer.setStyle(ripple, 'position', 'absolute');
  //   this.renderer.setStyle(ripple, 'borderRadius', '50%');
  //   this.renderer.setStyle(ripple, 'background', 'rgba(196, 92, 75, 0.3)');
  //   this.renderer.setStyle(ripple, 'transform', 'scale(0)');
  //   this.renderer.setStyle(ripple, 'animation', 'ripple 0.6s linear');
  //   this.renderer.setStyle(ripple, 'width', `${size}px`);
  //   this.renderer.setStyle(ripple, 'height', `${size}px`);
  //   this.renderer.setStyle(ripple, 'top', `${y}px`);
  //   this.renderer.setStyle(ripple, 'left', `${x}px`);
  //   this.renderer.setStyle(ripple, 'pointerEvents', 'none');
  //   this.renderer.setStyle(ripple, 'zIndex', '1');

  //   this.renderer.appendChild(button, ripple);

  //   setTimeout(() => {
  //     if (button.contains(ripple)) {
  //       this.renderer.removeChild(button, ripple);
  //     }
  //   }, 600);
  // }

  onMouseEnter(): void {
    if (this.isCollapsed) {
      this.isHovered.set(true);
    }
  }

  onMouseLeave(): void {
    this.isHovered.set(false);
  }
}
