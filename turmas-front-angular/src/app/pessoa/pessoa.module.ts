import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PessoaSaveComponent } from './pessoa-save/pessoa-save.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    // PessoaSaveComponent,
    PessoaListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    // PessoaSaveComponent,
    PessoaListComponent
  ]
})
export class PessoaModule { }
