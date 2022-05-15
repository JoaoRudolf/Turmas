export class PessoaModel {
    id?: number;
    nome?: string;
    endereco?: string;
    idade?: number;
    sexo?: string;

    constructor(obj: Partial<PessoaModel>) {
        Object.assign(this, obj);
    }
}
