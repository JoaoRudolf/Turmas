import { PessoaModel } from "../pessoa/model";
import { TurmaModel } from "../turma/model";

export class ProfessorModel {
    id?: number;
    pessoa: PessoaModel = new PessoaModel({});
    turma: TurmaModel = new TurmaModel({});

    constructor(obj: Partial<ProfessorModel>) {
        Object.assign(this, obj);
    }
}
