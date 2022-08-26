import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabasePrinciplesComponent } from './database-principles.component';

describe('DatabasePrinciplesComponent', () => {
  let component: DatabasePrinciplesComponent;
  let fixture: ComponentFixture<DatabasePrinciplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabasePrinciplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabasePrinciplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
