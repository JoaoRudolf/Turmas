import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorSaveComponent } from './professor-save.component';

describe('ProfessorSaveComponent', () => {
  let component: ProfessorSaveComponent;
  let fixture: ComponentFixture<ProfessorSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
