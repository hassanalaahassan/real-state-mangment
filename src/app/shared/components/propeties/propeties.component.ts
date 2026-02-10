import { Component, inject } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { PropertyService } from '../../../core/Services/property.service';
import { ScrollObserverDirective } from "../../directives/scroll-observer.directive";
import { DropdownComponent } from "../drobdown/drobdown.component";

@Component({
  selector: 'app-propeties',
  imports: [CardComponent, ScrollObserverDirective, DropdownComponent],
  templateUrl: './propeties.component.html',
  styleUrl: './propeties.component.scss'
})
export class PropetiesComponent {

  propertiesService = inject(PropertyService);
  properties = this.propertiesService.filteredProperties$;


}
