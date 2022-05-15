export class TurmaModel {
    id?: string | number;
    nome?: string;
    periodo?: string;
    maxAlunos?: number;
  
    constructor(obj: Partial<TurmaModel>) {
        Object.assign(this, obj);
    }
  }