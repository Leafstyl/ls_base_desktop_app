import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {ContentModel} from '../models/content-model';
import {ContentService} from '../services/content.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DetailsResolve implements Resolve<ContentModel> {

  constructor ( private contentService: ContentService ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ContentModel> {
    return this.contentService.getContent(route.paramMap.get('key'));
  }

}
