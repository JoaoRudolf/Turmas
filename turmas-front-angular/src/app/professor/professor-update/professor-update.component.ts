import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { PessoaModel } from 'src/app/pessoa/model';
import { TurmaModel } from 'src/app/turma/model';
import { TurmaService } from 'src/app/turma/turma.service';
import { ProfessorModel } from '../model';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-update',
  templateUrl: './professor-update.component.html',
  styleUrls: ['./professor-update.component.scss']
})
export class ProfessorUpdateComponent implements OnInit {

  id!: number; 
  sexoOpcao: string[] = ['M', 'F', 'O']
  turmas = new Observable<TurmaModel[]>();
  professor: ProfessorModel = new ProfessorModel({
    pessoa: new PessoaModel({}),
    turma: new TurmaModel({}),
  });

  constructor(private professorService: ProfessorService,
    private turmaService: TurmaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.carregarTurmas()
    this.id = this.route.snapshot.params['id']
    this.professorService.getById(this.id).subscribe((resp) => {
      this.professor = resp;
    });
  }

  updateProfessor(): void {
    this.professorService.update(this.professor).subscribe((resp) => {
      this.professorService.showMessage("Professor atualizado com sucesso!");
      this.router.navigate(["/professors"]);
      console.log(resp.turma.nome);
    });
  }

  carregarTurmas() {
    this.turmas = this.turmaService.getAllTurmas();
  }

  onSubmit() {
    this.professorService.update(this.professor).subscribe(
      data => {
        this.navigateToProfessores()
      }, error => console.log(error))
  }

  navigateToProfessores() {
    this.router.navigate(['/professores'])
  }

}
