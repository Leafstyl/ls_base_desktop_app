import {inject, TestBed} from '@angular/core/testing';
import {ContentService} from './content.service';
import {ContentData} from "../data/content-data";

describe('ContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContentService,
        ContentData
      ]
    });
  });

  it('should be created', inject([ContentService], (service: ContentService) => {
    expect(service).toBeTruthy();
  }));


  it('should be able to load a list of content models', inject([ContentService], (service: ContentService) => {
    service.getContents().subscribe(items => {
      expect(items.length).toEqual(ContentData.data.length);

      items.forEach((item, index) => {
        expect(item.name).toEqual(ContentData.data[index]['name']);
        expect(item.component).toEqual(ContentData.data[index]['component']);
        expect(item.children.length).toEqual(ContentData.data[index]['children'].length);
      });

    })
  }));

  it('should be able to get a top level item by its key', inject([ContentService], (service: ContentService) => {
    const MOCK_Item:any = ContentData.data[0];
    const MOCK_Key:string = MOCK_Item.name.replace(' ', '_').toLowerCase();

    service.getContent(MOCK_Key).subscribe(item => {
      expect(item.name).toEqual(MOCK_Item['name']);
      expect(item.component).toEqual(MOCK_Item['component']);
      expect(item.children.length).toEqual(MOCK_Item['children'].length);
    })
  }));

  it('should be able to get a second level item by its key', inject([ContentService], (service: ContentService) => {
    const MOCK_Item:any = ContentData.data[0].children[0];
    const MOCK_Key:string = MOCK_Item.name.replace(' ', '_').toLowerCase();

    service.getContent(MOCK_Key).subscribe(item => {
      expect(item.name).toEqual(MOCK_Item['name']);
      expect(item.component).toEqual(MOCK_Item['component']);
      expect(item.children.length).toEqual(MOCK_Item['children'].length);
    })
  }));

  it('should be able to get a third level item by its key', inject([ContentService], (service: ContentService) => {
    const MOCK_Item:any = ContentData.data[0].children[0].children[0];
    const MOCK_Key:string = MOCK_Item.name.replace(' ', '_').toLowerCase();

    service.getContent(MOCK_Key).subscribe(item => {
      expect(item.name).toEqual(MOCK_Item['name']);
      expect(item.component).toEqual(MOCK_Item['component']);
    })
  }));



});
