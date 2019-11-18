import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'isNull'})
export class IsNullPipe implements PipeTransform {

	transform(value: any): boolean {
		return value === null || value === undefined;
	}

}
