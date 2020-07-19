import { Injectable } from '@angular/core';
import PrismicDOM from 'prismic-dom';
import Prismic from 'prismic-javascript';
import ResolvedApi from 'prismic-javascript/types/ResolvedApi';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectCard } from '../../features/home/models/project-card.model';

@Injectable({
  providedIn: 'root',
})
export class PrismicService {

  private api: ResolvedApi;

  async init(): Promise<void> {
    this.api = await Prismic.getApi('https://codecometio.cdn.prismic.io/api/v2');
  }

  getProjectCards(): Observable<ProjectCard[]> {
    return from(this.api.query(
      Prismic.Predicates.at('document.type', 'project_cards'),
      { orderings: '[my.project_cards.order desc]' },
    )).pipe(
      map(response => response.results.map(result => ({
        imageSrc: result.data.imagesrc.url,
        title: result.data.title[0].text,
        subtitle: result.data.subtitle[0].text,
        text: PrismicDOM.RichText.asHtml(result.data.text),
        actions: result.data.actions.map((action: any) => ({
          name: action.name,
          internalRoute: action.internalRoute,
          externalRoute: action.externalRoute,
        })),
      }))),
    );
  }

}
