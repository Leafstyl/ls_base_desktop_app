import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {ContentModel} from '../models/content-model';
import {ContentService} from '../services/content.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AllResolve implements Resolve<ContentModel[]> {

  constructor (private contentService: ContentService) {}

  resolve(): Observable<ContentModel[]> {
    return this.contentService.getContents();
  }

}
