import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({

    selector: 'app-curso-list',
    templateUrl: './curso-list.component.html'

})

export class CursoListComponet implements OnInit {

    cursos: Curso[] = [];

    ngOnInit(): void {

        this.cursos = [

            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/imagens/forms.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                releaseDate: 'November, 2, 2019.'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/imagens/http.png',
                price: 45.99,
                code: 'LKL-1894',
                duration: 80,
                rating: 4,
                releaseDate: 'November, 04, 2019.'
            }

        ]

    }
}