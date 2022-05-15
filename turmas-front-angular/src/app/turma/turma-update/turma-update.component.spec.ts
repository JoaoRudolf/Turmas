import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaUpdateComponent } from './turma-update.component';

describe('TurmaUpdateComponent', () => {
  let component: TurmaUpdateComponent;
  let fixture: ComponentFixture<TurmaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurmaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
