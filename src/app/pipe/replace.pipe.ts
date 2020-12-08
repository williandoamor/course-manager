import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replace'
})
/*Classe criada para remover caracter e substituir por outro*/
export class ReplacePipe implements PipeTransform {

    transform(value: string, char: string, valueToReplace: string) {
        return value.replace(char, valueToReplace)
    }
}