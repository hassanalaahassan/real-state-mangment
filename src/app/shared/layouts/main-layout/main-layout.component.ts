import { Component, inject } from '@angular/core';
import { LayoutStore } from '../../../core/Services/layout.service';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { SidebarComponent } from "../../components/side-bar/side-bar.component";
import { TopBarComponent } from "../../components/top-bar/top-bar.component";

@Component({
  selector: 'app-main-layout',
  imports: [SidebarComponent, TopBarComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
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
