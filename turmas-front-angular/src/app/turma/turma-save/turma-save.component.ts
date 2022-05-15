import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TurmaModel } from '../model';
import { TurmaService } from '../turma.service';

@Component({
  selector: 'app-turma-save',
  templateUrl: './turma-save.component.html',
  styleUrls: ['./turma-save.component.scss']
})
export class TurmaSaveComponent implements OnInit {

  formTurma: TurmaModel = new TurmaModel({});
  turmas: any[] = [];
  sexoOpcao: string[] = ['M', 'F', 'O']

  constructor(private router: Router, 
              private turmaService: TurmaService) { }

  ngOnInit(): void {
    this.carregarTurmas()
  }

  async carregarTurmas() {
    const turmas = await this.turmaService.listarTodas();
    this.turmas = turmas;
  }

  createTurma(): void {
    this.turmaService.create(this.formTurma).subscribe(() => {
      this.turmaService.showMessage('Turma criada!')
      this.navigateToTurmas()
    })
  }

  navigateToTurmas(): void {
    this.router.navigate(['/turmas'])
  }
}
