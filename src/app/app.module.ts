import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CursoModule } from './cursos/curso.module';
import { CoreModule } from './core/component/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CursoModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'cursos', pathMatch: 'full'
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
