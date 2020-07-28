import { Injectable } from '@angular/core';
import PrismicDOM from 'prismic-dom';
import Prismic from 'prismic-javascript';
import ResolvedApi from 'prismic-javascript/types/ResolvedApi';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { About } from '../../features/home/models/about.model';
import { ProjectCard } from '../../features/home/models/project-card.model';
import { Project, ProjectMedia } from '../../features/projects/models/project.model';

@Injectable({
  providedIn: 'root',
})
export class PrismicService {

  private api: ResolvedApi;

  async init(): Promise<void> {
    this.api = await Prismic.getApi('https://codecometio.cdn.prismic.io/api/v2');
  }

  getAbout(): Observable<About> {
    return from(this.api.getSingle('home_about')).pipe(
      map(response => ({
        title: response.data.title[0].text,
        text: PrismicDOM.RichText.asHtml(response.data.text),
        imageSrc: response.data.image.url,
      })),
    );
  }

  getProjectCards(): Observable<ProjectCard[]> {
    return from(this.api.query(
      Prismic.Predicates.at('document.type', 'project_cards'),
      { orderings: '[my.project_cards.order desc]' },
    )).pipe(
      map(response => response.results.map(result => ({
        imageSrc: result.data.image.url,
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

  getProject(id: string): Observable<Project> {
    return from(this.api.queryFirst([
      Prismic.Predicates.at('document.type', 'projects'),
      Prismic.Predicates.at('document.id', id),
    ])).pipe(
      map(result => ({
        title: result.data.project_title[0].text,
        subtitle: result.data.project_subtitle[0].text,
        bannerSrc: result.data.project_banner.url,
        content: PrismicDOM.RichText.asHtml(result.data.project_content),
        media: result.data.project_media.map((media: any) => ({
          tag: media.media_tag,
          mediaSrc: media.media.url,
        })).filter((media: ProjectMedia) => !!media.mediaSrc),
      })),
    );
  }

}
