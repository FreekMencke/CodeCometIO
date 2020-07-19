import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cc-footer',
  templateUrl: './cc-footer.component.html',
  styleUrls: ['./cc-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
