import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectCard, ProjectCardAction } from './models/project-card.model';

@Component({
  selector: 'cc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  projectCards: ProjectCard[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.projectCards = this.activatedRoute.snapshot.data.projectCards;
  }

  onActionClick(action: ProjectCardAction): void {
    if (action.internalRoute) {
      this.router.navigate(action.internalRoute.split('/'));
      return;
    }
    if (action.externalRoute) {
      window.open(action.externalRoute, '_blank');
      return;
    }
  }

}
