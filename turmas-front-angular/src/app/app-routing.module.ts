import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './frame/home/home.component';
import { PessoaListComponent } from './pessoa/pessoa-list/pessoa-list.component';
import { AlunoListComponent } from './aluno/aluno-list/aluno-list.component';
import { AlunoSaveComponent } from './aluno/aluno-save/aluno-save.component';
import { ProfessorSaveComponent } from './professor/professor-save/professor-save.component';
import { ProfessorListComponent } from './professor/professor-list/professor-list.component';
import { TurmaListComponent } from './turma/turma-list/turma-list.component';
import { TurmaSaveComponent } from './turma/turma-save/turma-save.component';
import { AlunoDeleteComponent } from './aluno/aluno-delete/aluno-delete.component';
import { AlunoUpdateComponent } from './aluno/aluno-update/aluno-update.component';
import { ProfessorDeleteComponent } from './professor/professor-delete/professor-delete.component';
import { ProfessorUpdateComponent } from './professor/professor-update/professor-update.component';
import { TurmaDeleteComponent } from './turma/turma-delete/turma-delete.component';
import { TurmaUpdateComponent } from './turma/turma-update/turma-update.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'pessoas', component: PessoaListComponent},

  { path: 'alunos', component: AlunoListComponent},
  { path: 'aluno-create', component: AlunoSaveComponent},
  { path: 'aluno-delete/:id', component: AlunoDeleteComponent},
  { path: 'aluno-update/:id', component: AlunoUpdateComponent},

  { path: 'professores', component: ProfessorListComponent},
  { path: 'professor-create', component: ProfessorSaveComponent},
  { path: 'professor-delete/:id', component: ProfessorDeleteComponent},
  { path: 'professor-update/:id', component: ProfessorUpdateComponent},
  
  { path: 'turmas', component: TurmaListComponent},
  { path: 'turma-create', component: TurmaSaveComponent},
  { path: 'turma-delete/:id', component: TurmaDeleteComponent},
  { path: 'turma-update/:id', component: TurmaUpdateComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
