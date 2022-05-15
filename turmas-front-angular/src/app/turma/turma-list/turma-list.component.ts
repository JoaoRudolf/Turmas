import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TurmaModel } from '../model';
import { TurmaService } from '../turma.service';

@Component({
  selector: 'app-turma-list',
  templateUrl: './turma-list.component.html',
  styleUrls: ['./turma-list.component.scss']
})
export class TurmaListComponent implements OnInit {

  constructor(private router: Router,
    private turmaService: TurmaService) { }

  turmas$ = new Observable<TurmaModel[]>();

  ngOnInit(): void {
    this.loadTurmas();
  }

  navigateToTurmaCreate(): void {
    this.router.navigate(['/turma-create'])
  }

  navigateToHome(): void {
    this.router.navigate(['/home'])
  }

  loadTurmas() {
    this.turmas$ = this.turmaService.getAllTurmas();
    this.turmaService
      .getAllTurmas()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

}
