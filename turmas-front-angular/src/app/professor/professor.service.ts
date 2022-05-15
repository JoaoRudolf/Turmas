import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProfessorModel } from './model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<[ProfessorModel]>(`${environment.urlTuma}/professor`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );;
  }

  getById(id: number): Observable<ProfessorModel> {
    return this.http.get<ProfessorModel>(`${environment.urlTuma}/professor/${id}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  create(professor: ProfessorModel): Observable<ProfessorModel> {
    return this.http.post<ProfessorModel>(`${environment.urlTuma}/professor`, professor).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<ProfessorModel> {
    const url = `${environment.urlTuma}/professor/${id}`;
    return this.http.delete<ProfessorModel>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(professor: ProfessorModel): Observable<ProfessorModel> {
    const url = `${environment.urlTuma}/professor/${professor.id}`;
    return this.http.put<ProfessorModel>(url, professor).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false): void {
    if(isError == false) {
      alert(msg)
    }
  }


}
