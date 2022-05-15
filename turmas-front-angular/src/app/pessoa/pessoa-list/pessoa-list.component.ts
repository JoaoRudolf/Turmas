import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PessoaModel } from '../model';
import { PessoaService } from '../pessoa.service';



@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss']
})
export class PessoaListComponent implements OnInit {

  constructor(private router: Router,
    private pessoaService: PessoaService
  ) { }


  pessoas$ = new Observable<PessoaModel[]>();

  pessoas: PessoaModel[] = [ // usado para teste
    { id: 1, nome: "joão", sexo: "M", idade: 33 },
    { id: 2, nome: "maria", sexo: "F", idade: 21 },
    { id: 3, nome: "josé", sexo: "M", idade: 26 }
  ]


  ngOnInit(): void {
    this.loadPessoas()
  }

  navigateToPessoaCreate(): void {
    this.router.navigate(['/pessoa-create'])
  }

  loadPessoas() {
    this.pessoas$ = this.pessoaService.getAllPessoas();
    // this.pessoaService
    //   .getAllPessoas()
    //   .subscribe(
    //     (response) => {
    //       console.log(response);
    //     }
    //   );
  }

}
