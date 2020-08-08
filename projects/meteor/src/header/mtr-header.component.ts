import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'mtr-header',
  templateUrl: './mtr-header.component.html',
  styleUrls: ['./mtr-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeteorHeaderComponent implements OnInit, OnDestroy {
  private breakpointDesktop: number;

  open: boolean = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.breakpointDesktop = Number(
      getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-desktop').slice(0, -2),
    );
    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

  toggle(): void {
    this.open = !this.open;
  }

  onResize = () => {
    if (this.open && this.breakpointDesktop <= window.innerWidth) {
      this.open = false;
      this.cdRef.markForCheck();
    }
  }
}
