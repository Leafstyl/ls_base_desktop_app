import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FallbackComponent} from './fallback.component';
import {MatCardModule} from "@angular/material";

describe('FallbackComponent', () => {
  let component: FallbackComponent;
  let fixture: ComponentFixture<FallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FallbackComponent ],
      imports: [
        MatCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.ngOnInit).toBeDefined();
  });
});
