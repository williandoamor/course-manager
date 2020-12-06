import { Component, Input, OnChanges } from '@angular/core';

@Component({

    selector: 'app-star',
    templateUrl: "./star.component.html"
})

/*OnChanges espera receber a requisicao da requicao http*/
export class StarComponet implements OnChanges {

    /*Disponibiliza a variavel para ser utilizado por outro componentes*/
    @Input()
    rating: number = 0;

    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 94 / 5;
    }

}