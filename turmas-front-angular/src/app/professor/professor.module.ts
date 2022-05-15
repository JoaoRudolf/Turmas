import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorSaveComponent } from './professor-save/professor-save.component';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { ProfessorDeleteComponent } from './professor-delete/professor-delete.component';
import { ProfessorUpdateComponent } from './professor-update/professor-update.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ProfessorSaveComponent,
    ProfessorListComponent,
    ProfessorDeleteComponent,
    ProfessorUpdateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule,
  ],
  exports: [
    ProfessorSaveComponent,
    ProfessorListComponent,
    ProfessorDeleteComponent,
    ProfessorUpdateComponent,
  ]
})
export class ProfessorModule { }
