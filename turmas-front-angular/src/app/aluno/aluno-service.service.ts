import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PessoaModel } from '../pessoa/model';
import { AlunoModel } from './model';

@Injectable({
  providedIn: 'root'
})
export class AlunoServiceService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<[AlunoModel]>(`${environment.urlTuma}/aluno`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );;
  }

  getById(id: number): Observable<AlunoModel> {
    return this.http.get<AlunoModel>(`${environment.urlTuma}/aluno/${id}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  create(aluno: AlunoModel): Observable<AlunoModel> {
    return this.http.post<AlunoModel>(`${environment.urlTuma}/aluno`, aluno).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(aluno: AlunoModel): Observable<AlunoModel> {
    const url = `${environment.urlTuma}/aluno/${aluno.id}`;
    console.log('s' + aluno.id + 'a' + aluno.turma.nome);
    return this.http.put<AlunoModel>(url, aluno).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      );
  }

  delete(id: number): Observable<AlunoModel> {
    const url = `${environment.urlTuma}/aluno/${id}`;
    return this.http.delete<AlunoModel>(url).pipe(
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
