import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandIdentityComponent } from './brand-identity.component';

describe('BrandIdentityComponent', () => {
  let component: BrandIdentityComponent;
  let fixture: ComponentFixture<BrandIdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandIdentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
