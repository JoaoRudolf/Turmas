import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorModel } from '../model';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-delete',
  templateUrl: './professor-delete.component.html',
  styleUrls: ['./professor-delete.component.scss']
})
export class ProfessorDeleteComponent implements OnInit {

  professor!: ProfessorModel;

  constructor(
    private professorService: ProfessorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id')); 
      this.professorService.getById(id).subscribe((professor) => {
        this.professor = professor;
    });
  }

  deleteProfessor(): void {
    if(this.professor.id != null) {
      this.professorService.delete(this.professor.id).subscribe(() => {
        this.professorService.showMessage("Professor excluido com sucesso!");
        this.router.navigate(["/professores"]);
      });
    }
  }

  cancel(): void {
    this.router.navigate(["/professores"]);
  }
}
