import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunoServiceService } from '../aluno-service.service';
import { AlunoModel } from '../model';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.scss']
})
export class AlunoListComponent implements OnInit {

  constructor( private router: Router,
    private alunoService: AlunoServiceService) { }

  alunos$ = new Observable<AlunoModel[]>();

  ngOnInit(): void {
    this.loadAlunos();
  }

  navigateToAlunoCreate(): void {
    this.router.navigate(['/aluno-create'])
  }

  navigateToHome(): void {
    this.router.navigate(['/home'])
  }

  loadAlunos() {
    this.alunos$ = this.alunoService.getAll();
    this.alunoService
      .getAll()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

}
