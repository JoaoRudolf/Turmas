import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoSaveComponent } from './aluno-save.component';

describe('AlunoSaveComponent', () => {
  let component: AlunoSaveComponent;
  let fixture: ComponentFixture<AlunoSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
