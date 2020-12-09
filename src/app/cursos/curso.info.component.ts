import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
    templateUrl: './curso.info.component.html'
})
export class CursoInfoComponent implements OnInit {
    curso: Curso;

    constructor(private activeteRoute: ActivatedRoute, private cursoService: CursoService) { }

    ngOnInit(): void {
        this.curso = this.cursoService.retrieveById(+this.activeteRoute.snapshot.paramMap.get('id'));
    }

    salvarCurso(): void {
        this.cursoService.salvarCurso(this.curso);
    }
}