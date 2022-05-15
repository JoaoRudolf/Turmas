import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { PessoaModel } from 'src/app/pessoa/model';
import { TurmaModel } from 'src/app/turma/model';
import { TurmaService } from 'src/app/turma/turma.service';
import { AlunoServiceService } from '../aluno-service.service';
import { AlunoModel } from '../model';

@Component({
  selector: 'app-aluno-update',
  templateUrl: './aluno-update.component.html',
  styleUrls: ['./aluno-update.component.scss']
})
export class AlunoUpdateComponent implements OnInit {

  id!: number;  
  sexoOpcao: string[] = ['M', 'F', 'O']
  turmas = new Observable<TurmaModel[]>();
  aluno: AlunoModel = new AlunoModel({
    pessoa: new PessoaModel({}),
    turma: new TurmaModel({}),
  });

  constructor(private alunoService: AlunoServiceService,
    private turmaService: TurmaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.carregarTurmas()
    this.id = this.route.snapshot.params['id']
    this.alunoService.getById(this.id).subscribe((resp) => {
      this.aluno = resp;
    });
  }

  updateAluno(): void {
    this.alunoService.update(this.aluno).subscribe((resp) => {
      this.alunoService.showMessage("Aluno atualizado com sucesso!");
      this.router.navigate(["/alunos"]);
      console.log(resp.turma.nome);
    });
  }

  carregarTurmas() {
    this.turmas = this.turmaService.getAllTurmas();
  }

  onSubmit() {
    this.alunoService.update(this.aluno).subscribe(
      data => {
        this.navigateToAlunos()
      }, error => console.log(error))
  }

  navigateToAlunos() {
    this.router.navigate(['/alunos'])
  }
}
