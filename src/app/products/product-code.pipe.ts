import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'ProductCode'
}) 
export class ProductCodePipe implements PipeTransform {

    transform(value: string, ...args: any[]) {
        return value.split('-');
    }
    
}