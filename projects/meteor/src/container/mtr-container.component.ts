import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'mtr-container',
  template: '<ng-content></ng-content>',
  styleUrls: ['./mtr-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeteorContainerComponent {

  @Input() @HostBinding('class.mtr-container--has-header') headerOffset: boolean = true;
  @Input() @HostBinding('class.mtr-container--full-width') fullWidth: boolean = false;
  @Input() @HostBinding('class.mtr-container--center') center: boolean = true;

}
