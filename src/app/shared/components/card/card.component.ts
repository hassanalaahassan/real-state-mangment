import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProperty, PropertyStatus, PropertyType } from '../../../core/models/property.model';

@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() property!: IProperty;
  @Input() viewMode: 'grid' | 'list' = 'grid';
  @Output() favoriteToggle = new EventEmitter<string>();
  @Output() contactRequest = new EventEmitter<string>();

  isFavorite = false;
  isImageLoaded = false;

  // الحصول على لون حسب نوع العقار
  getPropertyTypeColor(type: PropertyType): string {
    const colors: Record<PropertyType, string> = {
      'apartment': 'bg-blue-100 text-blue-800',
      'villa': 'bg-green-100 text-green-800',
      'office': 'bg-purple-100 text-purple-800',
      'land': 'bg-amber-100 text-amber-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  }

  // الحصول على أيقونة حسب نوع العقار
  getPropertyTypeIcon(type: PropertyType): string {
    const icons: Record<PropertyType, string> = {
      'apartment': '🏢',
      'villa': '🏡',
      'office': '🏛️',
      'land': '🌳'
    };
    return icons[type] || '🏠';
  }

  // الحصول على لون حسب حالة العقار
  getPropertyStatusColor(status: PropertyStatus): string {
    const colors: Record<PropertyStatus, string> = {
      'for-sale': 'bg-red-100 text-red-800',
      'for-rent': 'bg-blue-100 text-blue-800',
      'sold': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  }

  // تنسيق السعر
  formatPrice(price: number, currency: string): string {
    if (currency === 'EGP') {
      return `EGP ${price.toLocaleString('en-EG')}`;
    }
    return `$${price.toLocaleString('en-US')}`;
  }

  // حساب السعر للمتر
  getPricePerSquareMeter(): number {
    return Math.round(this.property.price / this.property.area);
  }

  // تبديل المفضلة
  toggleFavorite(event: Event): void {
    event.stopPropagation();
    this.isFavorite = !this.isFavorite;
    this.favoriteToggle.emit(this.property.id);
  }

  // طلب التواصل
  onContactRequest(event: Event): void {
    event.stopPropagation();
    this.contactRequest.emit(this.property.id);
  }

  // تحميل الصورة
  onImageLoad(): void {
    this.isImageLoaded = true;
  }
}
