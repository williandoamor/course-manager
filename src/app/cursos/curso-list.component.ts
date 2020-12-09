import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
    templateUrl: './curso-list.component.html'
})

export class CursoListComponet implements OnInit {

    filteredCursos: Curso[] = [];

    _cursos: Curso[] = [];

    _filterBy: string;

    constructor(private cursoService: CursoService) { }

    ngOnInit(): void {
        this.retriveAll();
    }

    retriveAll(): void {
        this.cursoService.retrievAll().subscribe({
            next: cursos => {
                this._cursos = cursos;
                this.filteredCursos = this._cursos
            },
            error: err => console.log('Error', err)
        })
    }

    deleteById(cursoId: number): void {
        this.cursoService.deleteById(cursoId).subscribe({
            next: () => {
                console.log('Curso deletado com sucesso!');
                this.retriveAll()
            },
            error: err => console.log('Erro ao deletar curso', err)
        })
    }

    set filter(value: string) {

        this._filterBy = value;
        this.filteredCursos = this._cursos.filter((curso: Curso) => curso.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
    }

    get filter() {

        return this._filterBy;
    }
}