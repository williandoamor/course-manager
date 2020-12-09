import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReplacePipe } from '../shared/pipe/replace.pipe';
import { StarModule } from '../shared/component/star/star.module';
import { CursoListComponet } from './curso-list.component';
import { CursoInfoComponent } from './curso.info.component';
import { AppPipeModule } from '../shared/pipe/app.pipe.modulo';


@NgModule({
    declarations: [
        CursoListComponet,
        CursoInfoComponent

    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'cursos/info/:id', component: CursoInfoComponent
            },
            {
                path: 'cursos', component: CursoListComponet
            },
        ])
    ]
})
export class CursoModule {

}