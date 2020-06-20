import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mtr-side-menu-item',
  template: '<ng-content></ng-content>',
  styleUrls: ['./mtr-side-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeteorSideMenuItemComponent { }
