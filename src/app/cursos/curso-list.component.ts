import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({

    selector: 'app-curso-list',
    templateUrl: './curso-list.component.html'

})

export class CursoListComponet implements OnInit {

    filteredCursos: Curso[] = [];

    _cursos: Curso[] = [];

    _filterBy: string;

    constructor(private cursoService: CursoService) { }

    ngOnInit(): void {
        this._cursos = this.cursoService.retrievAll();
        this.filteredCursos = this._cursos;
    }

    set filter(value: string) {

        this._filterBy = value;
        this.filteredCursos = this._cursos.filter((curso: Curso) => curso.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
    }

    get filter() {
        
        return this._filterBy;
    }
}