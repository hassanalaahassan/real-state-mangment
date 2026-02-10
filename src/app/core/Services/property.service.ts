import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { IProperty, PropertyType } from '../models/property.model';
import { PROPERTIES_DATA } from '../constants/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private properties:WritableSignal<IProperty[]> = signal(PROPERTIES_DATA)
  private propertiesType = signal<PropertyType | null>(null)

  readonly properties$ = this.properties.asReadonly();
  readonly selectedType = this.propertiesType.asReadonly();


  readonly filteredProperties$ = computed(()=>{
    const type = this.propertiesType();
    const properties = this.properties();
    if(!type) return properties;
    return properties.filter(p => p.type === type);
  })

  setType(type: PropertyType | null) {
    this.propertiesType.set(type);
  }

}
