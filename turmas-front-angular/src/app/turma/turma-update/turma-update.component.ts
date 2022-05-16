import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TurmaModel } from '../model';
import { TurmaService } from '../turma.service';

@Component({
  selector: 'app-turma-update',
  templateUrl: './turma-update.component.html',
  styleUrls: ['./turma-update.component.scss']
})
export class TurmaUpdateComponent implements OnInit {

  id!: number; 
  turma: TurmaModel = new TurmaModel({});

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: TurmaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.service.getById(this.id).subscribe((resp) => {
      this.turma = resp;
    });
  }

  updateTurma(): void {
    this.service.update(this.turma).subscribe((resp) => {
      this.service.showMessage("Truma atualizada com sucesso!");
      this.router.navigate(["/turmas"]);

    });
  }

  onSubmit() {
    this.service.update(this.turma).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => this.navigateToTurmas()
    });


      // data => {
      //   this.navigateToTurmas()
      // }, error => console.log(error))
  }

  navigateToTurmas() {
    this.router.navigate(['/turmas'])
  }

}
