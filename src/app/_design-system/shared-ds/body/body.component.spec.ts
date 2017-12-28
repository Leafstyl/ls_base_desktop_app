import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {BodyComponent} from './body.component';
import {Component, Input} from "@angular/core";
import {ResizeService} from "../services/resize.service";
import {of} from "rxjs/observable/of";

@Component({
  selector: 'app-resizable',
  template: ''
})
export class AppResizableComponent {
  @Input() width:number;
  @Input() height:number;
}

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BodyComponent,
        AppResizableComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {
          provide: ResizeService,
          useValue: {
            width$: of(0)
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
