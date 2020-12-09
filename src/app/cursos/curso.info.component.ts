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
        this.retrieveById();
    }

    retrieveById(): void {
        this.cursoService.retrieveById(+this.activeteRoute.snapshot.paramMap.get('id')).subscribe({
            next: curso => this.curso = curso,
            error: err => console.log('Error', err)
        });
    }

    salvarCurso(): void {
        this.cursoService.salvarCurso(this.curso).subscribe({
            next: curso => console.log('Curso salvo com sucesso ', curso),
            error: err => console.log('Erro ao salvar curso.')

        });
    }
}