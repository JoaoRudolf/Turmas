import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurmaListComponent } from './turma-list/turma-list.component';
import { TurmaSaveComponent } from './turma-save/turma-save.component';
import { FormsModule } from '@angular/forms';
import { TurmaUpdateComponent } from './turma-update/turma-update.component';
import { TurmaDeleteComponent } from './turma-delete/turma-delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TurmaListComponent,
    TurmaSaveComponent,
    TurmaUpdateComponent,
    TurmaDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule,
  ],
  exports: [
    TurmaListComponent,
    TurmaSaveComponent,
    TurmaUpdateComponent,
    TurmaDeleteComponent
  ]
})
export class TurmaModule { }
