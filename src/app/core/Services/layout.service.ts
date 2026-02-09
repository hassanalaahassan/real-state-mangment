import { signal, computed } from '@angular/core';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface PageInfo {
  title: string;
  subtitle: string;
}

@Injectable({ providedIn: 'root' })
export class LayoutStore {
  // Private signals
  private _sidebarCollapsed = signal(false);
  private _showUserMenu = signal(false);
  private _currentRoute = signal('');
  private _isMobileView = signal(false);

  // Page titles mapping
  private pageTitles: Record<string, PageInfo> = {
    '/': { title: 'Dashboard', subtitle: 'Welcome back, Mohamed' },
    '/properties': { title: 'Properties', subtitle: 'Manage your properties' },
    '/vip': { title: 'VIP Properties', subtitle: 'Exclusive VIP offers' },
    '/contact': { title: 'Contact Us', subtitle: 'Get in touch with us' },
    '/about': { title: 'About Us', subtitle: 'Learn about our company' },
    '/agents': { title: 'Agents', subtitle: 'Our professional agents' },
    '/reports': { title: 'Reports', subtitle: 'Sales and analytics' }
  };

  // Public computed signals (read-only)
  readonly sidebarCollapsed = this._sidebarCollapsed.asReadonly();
  readonly showUserMenu = this._showUserMenu.asReadonly();
  readonly currentRoute = this._currentRoute.asReadonly();
  readonly isMobileView = this._isMobileView.asReadonly();

  // Computed signals for page info
  readonly pageTitle = computed(() => {
    const route = this._currentRoute();
    return this.pageTitles[route]?.title || 'Premium Realty';
  });

  readonly pageSubtitle = computed(() => {
    const route = this._currentRoute();
    return this.pageTitles[route]?.subtitle || '';
  });

  readonly mainContentClasses = computed(() => {
    if (this._isMobileView()) {
      return '';
    }
    return this._sidebarCollapsed() ? 'md:ml-10' : 'md:ml-5';
  });

  // Actions (methods to update state)
  toggleSidebar() {
    this._sidebarCollapsed.update(value => !value);
  }

  setSidebar(collapsed: boolean) {
    this._sidebarCollapsed.set(collapsed);
  }

  toggleUserMenu() {
    this._showUserMenu.update(value => !value);
  }

  closeUserMenu() {
    this._showUserMenu.set(false);
  }

  setCurrentRoute(route: string) {
    this._currentRoute.set(route);
  }

  setIsMobileView(isMobile: boolean) {
    this._isMobileView.set(isMobile);
    if (isMobile) {
      this._sidebarCollapsed.set(true);
    }
  }

  isMobile(): boolean {
    return this._isMobileView();
  }
}
