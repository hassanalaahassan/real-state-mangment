import { Component, signal, computed, inject, output } from '@angular/core';
import { PropertyService } from './../../../core/Services/property.service';
import { PropertyType } from '../../../core/models/property.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drobdown.component.html',
  styleUrl: './drobdown.component.scss'
})
export class DropdownComponent {

  isOpen = signal(false);

  propertyService = inject(PropertyService);


  propertyTypes: { label: string; value: PropertyType | null }[] = [
    { label: 'All Properties', value: null },
    { label: 'Apartments', value: 'apartment' },
    { label: 'Villas', value: 'villa' },
    { label: 'Offices', value: 'office' },
    { label: 'Land', value: 'land' }
  ];


  toggle() {
    this.isOpen.update(v => !v);
  }

  select(type: PropertyType | null) {
    this.propertyService.setType(type);
    this.isOpen.set(false);
  }

  selectedLabel = computed(() => {
    const found = this.propertyTypes.find(t => t.value === this.propertyService.selectedType());
    return found?.label ?? 'Select Type';
  });
}
