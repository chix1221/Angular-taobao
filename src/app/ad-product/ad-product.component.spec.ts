import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdProductComponent } from './ad-product.component';

describe('AdProductComponent', () => {
  let component: AdProductComponent;
  let fixture: ComponentFixture<AdProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
