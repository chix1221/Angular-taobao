import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotProductComponent } from './hot-product.component';

describe('HotProductComponent', () => {
  let component: HotProductComponent;
  let fixture: ComponentFixture<HotProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
