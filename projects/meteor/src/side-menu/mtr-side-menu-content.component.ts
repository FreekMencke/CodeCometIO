import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mtr-side-menu-content',
  template: '<ng-content></ng-content>',
  styles: [':host { width: 100%; height: 100%; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeteorSideMenuContentComponent { }
