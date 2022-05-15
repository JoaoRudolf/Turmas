import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoSaveComponent } from './aluno-save/aluno-save.component';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlunoDeleteComponent } from './aluno-delete/aluno-delete.component';
import { RouterModule } from '@angular/router';
import { AlunoUpdateComponent } from './aluno-update/aluno-update.component';



@NgModule({
  declarations: [
    AlunoSaveComponent,
    AlunoListComponent,
    AlunoDeleteComponent,
    AlunoUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule,
  ],
  exports: [
    AlunoSaveComponent,
    AlunoListComponent,
    AlunoDeleteComponent,
    AlunoUpdateComponent
  ]
})
export class AlunoModule { }
