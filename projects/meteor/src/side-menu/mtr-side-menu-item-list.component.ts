import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mtr-side-menu-item-list',
  template: '<ng-content></ng-content>',
  styleUrls: ['./mtr-side-menu-item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeteorSideMenuItemListComponent { }
