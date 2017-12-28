import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {map} from 'rxjs/operators';

import {ContentModel} from '../models/content-model';
import {ContentData} from '../data/content-data';


@Injectable()
export class ContentService {

  constructor() { }

  private flattenItems(items: ContentModel[]): ContentModel[] {
    const flatItems: ContentModel[] = [];

    items.forEach(function (catItem) {
      flatItems.push(catItem);
      catItem.children.forEach(function (groupItem) {
        flatItems.push(groupItem);
        groupItem.children.forEach(function (contentItem) {
          flatItems.push(contentItem);
        });
      });
    });

    return flatItems;
  }

  public getContents(): Observable<ContentModel[]> {
    return of(ContentData.data).pipe(
      map(response => {
          return response.map(function (item) {
            return new ContentModel(item);
          });
        }
      )
    );
  }

  public getContent(key: string): Observable<ContentModel> {
    return this.getContents()
      .pipe(
        map(items => this.flattenItems(items)),
        map( allItems => allItems.find( item => item.key === key))
      );
  }
}
