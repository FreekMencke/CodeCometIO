import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeteorSideMenuContainerComponent } from './mtr-side-menu-container.component';
import { MeteorSideMenuContentComponent } from './mtr-side-menu-content.component';
import { MeteorSideMenuItemListComponent } from './mtr-side-menu-item-list.component';
import { MeteorSideMenuToggleDirective } from './mtr-side-menu-toggle.directive';
import { MeteorSideMenuItemComponent } from './mtr-side-menu-item.component';

const COMPONENTS = [
  MeteorSideMenuContainerComponent,
  MeteorSideMenuContentComponent,
  MeteorSideMenuItemListComponent,
  MeteorSideMenuItemComponent,
  MeteorSideMenuToggleDirective,
];

@NgModule({
  imports: [CommonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class MeteorSideMenuModule { }
