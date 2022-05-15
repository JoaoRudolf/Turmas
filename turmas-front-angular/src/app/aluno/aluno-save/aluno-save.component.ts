
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoServiceService } from '../aluno-service.service';
import { AlunoModel } from '../model';

import { TurmaService } from 'src/app/turma/turma.service';

@Component({
  selector: 'app-aluno-save',
  templateUrl: './aluno-save.component.html',
  styleUrls: ['./aluno-save.component.scss']
})
export class AlunoSaveComponent implements OnInit {

  formAluno: AlunoModel = new AlunoModel({});
  turmas: any[] = [];
  sexoOpcao: string[] = ['M', 'F', 'O']

  constructor(private router: Router, 
              private alunoService: AlunoServiceService,
              private turmaService: TurmaService) { }

  ngOnInit(): void {
    this.carregarTurmas()
  }

  async carregarTurmas() {
    const turmas = await this.turmaService.listarTodas();
    this.turmas = turmas;
  }

  atribuiTurma(event: any) {
    const turma = (event.target as HTMLSelectElement).value;
    this.formAluno.turma.id = turma;
  }

  atribuiSexo(event: any) {
    const sexo = (event.target as HTMLSelectElement).value;
    this.formAluno.pessoa.sexo = sexo;
  }

  createAluno(): void {
    this.alunoService.create(this.formAluno).subscribe(() => {
      this.alunoService.showMessage('Aluno criado!')
      this.navigateToAlunos()
    })
  }

  navigateToAlunos(): void {
    this.router.navigate(['/alunos'])
  }

}
