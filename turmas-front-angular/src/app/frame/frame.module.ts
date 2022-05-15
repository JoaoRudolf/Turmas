import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule, //esse cara é importante
    HttpClientModule,  //esse cara é importante
    NgbModule,
    BrowserModule,
    AppRoutingModule, // esse cara é importante, sem ele não tem como fazer o roteamento
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent
  ]
})
export class FrameModule { }
