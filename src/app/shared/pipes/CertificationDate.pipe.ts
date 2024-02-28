import { Pipe, PipeTransform } from "@angular/core";
import { monthNames } from "../models/monthNames";

@Pipe({ name: "certDatePipe", standalone: true })
export class CertificationDatePipe implements PipeTransform {
	transform(date: Date) {
		let aux = monthNames[date.getMonth()];

		return `${aux.toLowerCase().slice(0, 3)} de ${date.getFullYear()}`;
	}
}
