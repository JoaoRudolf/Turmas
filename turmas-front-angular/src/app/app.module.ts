
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { FrameModule } from './frame/frame.module';
import { AppComponent } from './app.component';

import { AlunoModule } from './aluno/aluno.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { ProfessorModule } from './professor/professor.module';
import { TurmaModule } from './turma/turma.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule, // Exports all the basic Angular directives and pipes, such as NgIf, NgForOf, DecimalPipe, and so on
    FormsModule, //esse cara é importante: Exports the required providers and directives for template-driven forms, making them available for import
    HttpClientModule,  //esse cara é importante: Configures the dependency injector for HttpClient with supporting services for XSRF. Automatically imported by HttpClientModule
    NgbModule, // angular bootstrap

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FrameModule, // módulo feito por mim, contento header, footer, home e content
    PessoaModule,
    AlunoModule,
    ProfessorModule,
    TurmaModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
