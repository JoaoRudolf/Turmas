import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TurmaService } from 'src/app/turma/turma.service';
import { ProfessorModel } from '../model';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-save',
  templateUrl: './professor-save.component.html',
  styleUrls: ['./professor-save.component.scss']
})
export class ProfessorSaveComponent implements OnInit {

  formProfessor: ProfessorModel = new ProfessorModel({});
  turmas: any[] = [];
  sexoOpcao: string[] = ['M', 'F', 'O']

  constructor(private router: Router, 
              private professorService: ProfessorService,
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
    this.formProfessor.turma.id = turma;
  }

  atribuiSexo(event: any) {
    const sexo = (event.target as HTMLSelectElement).value;
    this.formProfessor.pessoa.sexo = sexo;
  }

  createProfessor(): void {
    this.professorService.create(this.formProfessor).subscribe(() => {
      this.professorService.showMessage('Professor criado!')
      this.navigateToProfessores()
    })
  }

  navigateToProfessores(): void {
    this.router.navigate(['/professores'])
  }
}
