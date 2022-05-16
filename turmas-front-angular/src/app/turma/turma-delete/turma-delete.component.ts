import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TurmaModel } from '../model';
import { TurmaService } from '../turma.service';

@Component({
  selector: 'app-turma-delete',
  templateUrl: './turma-delete.component.html',
  styleUrls: ['./turma-delete.component.scss']
})
export class TurmaDeleteComponent implements OnInit {

  turma!: TurmaModel;
  turmaId!: number;
  turmaNome!: string;

  constructor(
    private turmaService: TurmaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id')); 
      this.turmaService.getById(id).subscribe((turma) => {
        this.turma = turma;

        if(this.turma.id && this.turma.nome) {
          this.turmaId = +this.turma.id;
          this.turmaNome = this.turma.nome;
        }
    });
  }


  delete(): void {
    if(this.turma.id != null) {
      this.turmaService.delete(+this.turma.id).subscribe((resp) => {
        if (resp == true) {
          this.turmaService.showMessage("Truma excluida com sucesso!");
          this.router.navigate(["/turmas"]);
        } else {
          this.turmaService.showMessage("Truma não pôde ser excluída pois existe pessoa alocada nela.");
          this.router.navigate(["/turmas"]);
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(["/turmas"]);
  }
}
