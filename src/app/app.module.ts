import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { CursoListComponet } from './cursos/curso-list.component';
import { StarComponet } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoListComponet,
    StarComponet
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
