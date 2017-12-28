import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, Input} from "@angular/core";

import {ColorsComponent} from './colors.component';
import {FlexLayoutModule} from "@angular/flex-layout"
import {ContentModel} from "../../../core/models/content-model";


@Component({
  selector: 'mat-card',
  template: ''
})
export class MatCard {
}

@Component({
  selector: 'mat-card-title',
  template: ''
})
export class MatCardTitle {
}

@Component({
  selector: 'mat-card-subtitle',
  template: ''
})
export class MatCardSubtitle {
}

@Component({
  selector: 'mat-card-header',
  template: ''
})
export class MatCardHeader {
}

@Component({
  selector: 'mat-card-content',
  template: ''
})
export class MatCardContent {
}

@Component({
  selector: 'mat-card-actions',
  template: ''
})
export class MatCardActions {}

@Component({
  selector: 'mat-tab-group',
  template: ''
})
export class MatTabGroup {
  @Input() dynamicHeight:any;
}

@Component({
  selector: 'mat-tab',
  template: ''
})
export class MatTab {
}

@Component({
  selector: 'app-source-viewer',
  template: ''
})
export class AppSourceViewer {
  @Input() data:any;
  @Input() type:any;
}

describe('ColorsComponent', () => {
  let component: ColorsComponent;
  let fixture: ComponentFixture<ColorsComponent>;
  let MOCK_Data:ContentModel = new ContentModel({name: 'Foobar', component: {}, children: []});

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ColorsComponent,
        MatCard,
        MatCardTitle,
        MatCardSubtitle,
        MatCardHeader,
        MatCardContent,
        MatTabGroup,
        MatTab,
        MatCardActions,
        AppSourceViewer
      ],
      providers: [
        FlexLayoutModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsComponent);
    component = fixture.componentInstance;
    component.data = MOCK_Data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have bound data', () => {
    expect(component.data).toBe(MOCK_Data);
  });

  it('should contain a byline', () => {
    expect(component.byline).toBeDefined();
  });

  it('should contain a description', () => {
    expect(component.description).toBeDefined();
  });

  it('should contain a referenceUrl', () => {
    expect(component.referenceUrl).toBeDefined();
  });

  it('should contain a demoHtml', () => {
    expect(component.demoHtml).toBeDefined();
  });

  it('should contain a demoTs', () => {
    expect(component.demoTs).toBeDefined();
  });

  it('should contain a demoScss', () => {
    expect(component.demoScss).toBeDefined();
  });

});
