import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { filter, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { SidebarComponent } from "./shared/components/side-bar/side-bar.component";
import { TopBarComponent } from "./shared/components/top-bar/top-bar.component";
import { LayoutStore } from './core/Services/layout.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  // Inject stores
   layoutStore = inject(LayoutStore);
  private router = inject(Router);

  // Expose signals for template
  readonly sidebarCollapsed = this.layoutStore.sidebarCollapsed;
  readonly showUserMenu = this.layoutStore.showUserMenu;
  readonly pageTitle = this.layoutStore.pageTitle;
  readonly pageSubtitle = this.layoutStore.pageSubtitle;
  readonly mainContentClasses = this.layoutStore.mainContentClasses;
  readonly isMobileView = this.layoutStore.isMobileView;

  private routerSubscription!: Subscription;

  ngOnInit() {
    // Subscribe to route changes
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.layoutStore.setCurrentRoute(event.url);
        this.layoutStore.closeUserMenu();
      });

    // Initial mobile view check
    this.checkMobileView();
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  // Event handlers
  toggleSidebarMobile(event: MouseEvent) {
    event.stopPropagation();
    this.layoutStore.toggleSidebar();
  }

  toggleUserMenu(event: MouseEvent) {
    event.stopPropagation();
    this.layoutStore.toggleUserMenu();
  }

  closeUserMenu() {
    this.layoutStore.closeUserMenu();
  }

  // Window resize handler
  onResize() {
    this.checkMobileView();
  }

  private checkMobileView() {
    const isMobile = window.innerWidth < 768;
    this.layoutStore.setIsMobileView(isMobile);
  }

  // Helper for template
  isMobile(): boolean {
    return this.layoutStore.isMobile();
  }
}
