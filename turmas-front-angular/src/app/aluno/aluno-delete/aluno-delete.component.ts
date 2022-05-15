import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoServiceService } from '../aluno-service.service';
import { AlunoModel } from '../model';

@Component({
  selector: 'app-aluno-delete',
  templateUrl: './aluno-delete.component.html',
  styleUrls: ['./aluno-delete.component.scss']
})
export class AlunoDeleteComponent implements OnInit {
  aluno!: AlunoModel;

  constructor(
    private alunoService: AlunoServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id')); 
      this.alunoService.getById(id).subscribe((aluno) => {
        this.aluno = aluno;
    });
  }

  deleteAluno(): void {
    if(this.aluno.id != null) {
      this.alunoService.delete(this.aluno.id).subscribe(() => {
        this.alunoService.showMessage("Aluno excluido com sucesso!");
        this.router.navigate(["/alunos"]);
      });
    }
  }

  cancel(): void {
    this.router.navigate(["/alunos"]);
  }
}
