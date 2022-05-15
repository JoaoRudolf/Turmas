import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, firstValueFrom, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TurmaModel } from './model';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {



  turmasUrl: string

  constructor(private http: HttpClient) {

    this.turmasUrl = `${environment.urlTuma}/turma`;
  }

  listarTodas(): Promise<any> {
    return firstValueFrom(this.http.get(this.turmasUrl));
  }

  getById(id: number) {
    return this.http.get<TurmaModel>(`${environment.urlTuma}/turma/${id}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }


  getAllTurmas() {
    return this.http.get<TurmaModel[]>(`${environment.urlTuma}/turma`);
  }


  create(turma: TurmaModel): Observable<TurmaModel> {
    return this.http.post<TurmaModel>(`${environment.urlTuma}/turma`, turma).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<TurmaModel> {
    const url = `${environment.urlTuma}/turma/${id}`;
    return this.http.delete<TurmaModel>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false): void {
    if (isError == false)
      alert(msg)
  }

}
