import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mit-button-docs',
  templateUrl: './button-docs.component.html',
  styleUrls: ['./button-docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDocsComponent { }
