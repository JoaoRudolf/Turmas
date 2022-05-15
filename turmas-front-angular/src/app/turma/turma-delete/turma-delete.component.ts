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

  constructor(
    private turmaService: TurmaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id')); 
      this.turmaService.getById(id).subscribe((turma) => {
        this.turma = turma;

        if(this.turma.id) {
          this.turmaId = +this.turma.id
        }
    });
  }


  delete(): void {
    if(this.turma.id != null) {
      this.turmaService.delete(+this.turma.id).subscribe(() => {
        this.turmaService.showMessage("Truma excluida com sucesso!");
        this.router.navigate(["/turmas"]);
      });
    }
  }

  cancel(): void {
    this.router.navigate(["/turmas"]);
  }
}
