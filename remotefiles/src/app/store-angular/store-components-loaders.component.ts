import { Component } from '@angular/core';

@Component({
  selector: 'app-store-components-loaders',
  templateUrl: './store-components-loaders.component.html',
  styleUrls: ['./store-components-loaders.component.css']
})
export class StoreComponentsLoadersComponent {

  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
