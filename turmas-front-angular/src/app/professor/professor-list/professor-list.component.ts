import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfessorModel } from '../model';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.scss']
})
export class ProfessorListComponent implements OnInit {

  constructor( private router: Router,
    private professorService: ProfessorService) { }

  professors$ = new Observable<ProfessorModel[]>();

  ngOnInit(): void {
    this.loadprofessors();
  }

  navigateToprofessorCreate(): void {
    this.router.navigate(['/professor-create'])
  }

  navigateToHome(): void {
    this.router.navigate(['/home'])
  }

  loadprofessors() {
    this.professors$ = this.professorService.getAll();
    this.professorService
      .getAll()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }
}
