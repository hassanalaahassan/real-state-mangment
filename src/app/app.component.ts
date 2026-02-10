import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from "./shared/layouts/main-layout/main-layout.component";
import { CardComponent } from "./shared/components/card/card.component";
import { LoaderComponent } from "./shared/components/loader/loader.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MainLayoutComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  isLoading = signal(true);

  constructor() {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 3000);
  }
  


}
