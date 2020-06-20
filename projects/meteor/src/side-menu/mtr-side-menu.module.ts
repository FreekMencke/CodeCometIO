import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeteorSideMenuComponent } from './mtr-side-menu.component';
import { MeteorSideMenuContentComponent } from './mtr-side-menu-content.component';
import { MeteorSideMenuItemListComponent } from './mtr-side-menu-item-list.component';
import { MeteorSideMenuToggleDirective } from './mtr-side-menu-toggle.directive';
import { MeteorSideMenuItemComponent } from './mtr-side-menu-item.component';
import { MeteorButtonModule } from '../button/mtr-button.module';

const COMPONENTS = [
  MeteorSideMenuComponent,
  MeteorSideMenuContentComponent,
  MeteorSideMenuItemListComponent,
  MeteorSideMenuItemComponent,
  MeteorSideMenuToggleDirective,
];

@NgModule({
  imports: [
    CommonModule,
    MeteorButtonModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class MeteorSideMenuModule { }
