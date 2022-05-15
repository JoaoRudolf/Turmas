import { TurmaModel } from '../turma/model';
import { PessoaModel } from './../pessoa/model';
export class AlunoModel {
  id?: number;
  ano?: number;
  pessoa: PessoaModel = new PessoaModel({});
  turma: TurmaModel = new TurmaModel({});

  constructor(obj: Partial<AlunoModel>) {
      Object.assign(this, obj);
  }
}



