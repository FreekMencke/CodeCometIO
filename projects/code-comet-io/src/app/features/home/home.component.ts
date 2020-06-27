import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  goToMeteorite(): void {
    window.location.assign('/CodeCometIO/meteorite');
  }

}
