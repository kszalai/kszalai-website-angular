import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onMenuOpen', () => {
    it('should toggle menuOpen boolean', () => {
      component.menuOpen = false;
      expect(component.menuOpen).toBeFalsy();
      component.onMenuOpen();
      expect(component.menuOpen).toBeTruthy();
      component.onMenuOpen();
      expect(component.menuOpen).toBeFalsy();
    });
  });

  describe('toggleClassMenu', () => {
    it('should toggle classMenuOpen boolean', () => {
      component.classMenuOpen = false;
      expect(component.classMenuOpen).toBeFalsy();
      component.toggleClassMenu();
      expect(component.classMenuOpen).toBeTruthy();
      component.toggleClassMenu();
      expect(component.classMenuOpen).toBeFalsy();
    });
  });
});
