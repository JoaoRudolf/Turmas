import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlunoModel } from '../aluno/model';
import { PessoaModel } from './model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  aluno!: AlunoModel;

  constructor(private http: HttpClient) { }

  getAllPessoas() {
    return this.http.get<[PessoaModel]>(`${environment.urlTuma}/pessoa`);
  }


  create(pessoa: PessoaModel): Observable<PessoaModel> {
    return this.http.post<PessoaModel>(`${environment.urlTuma}/pessoa`, pessoa).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    alert("ocorreu um erro bem legal");
    // this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false): void {
    if(isError == false)
    alert("Sucesso!")
  }
}
