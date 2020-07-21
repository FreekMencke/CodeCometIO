import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from './models/about.model';
import { HomePage } from './models/home-page.model';
import { ProjectCard, ProjectCardAction } from './models/project-card.model';

@Component({
  selector: 'cc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  about: About;
  projectCards: ProjectCard[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const homePage = this.activatedRoute.snapshot.data.homePage as HomePage;
    this.about = homePage.about;
    this.projectCards = homePage.projectCards;
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
