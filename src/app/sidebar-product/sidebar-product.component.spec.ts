import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProductComponent } from './sidebar-product.component';

describe('SidebarProductComponent', () => {
  let component: SidebarProductComponent;
  let fixture: ComponentFixture<SidebarProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
