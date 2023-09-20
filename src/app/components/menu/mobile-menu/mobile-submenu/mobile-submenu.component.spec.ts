import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSubmenuComponent } from './mobile-submenu.component';

describe('MobileSubmenuComponent', () => {
  let component: MobileSubmenuComponent;
  let fixture: ComponentFixture<MobileSubmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileSubmenuComponent]
    });
    fixture = TestBed.createComponent(MobileSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
