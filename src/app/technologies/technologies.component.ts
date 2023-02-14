import { Component } from "@angular/core";
import { CardInfos } from "../shared/models/CardInfos";

@Component({
	selector: "app-technologies",
	templateUrl: "./technologies.component.html",
	styleUrls: ["./technologies.component.scss"],
})
export class TechnologiesComponent {
	cardsInfos: CardInfos[] = [
		{
			imageUrl: "./assets/images/logos/material.svg",
			title: "Angular Material",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		},
		{
			imageUrl: "./assets/images/logos/angular.svg",
			title: "Angular",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		},
		{
			imageUrl: "./assets/images/logos/bootstrap-logo.svg",
			title: "Bootstrap",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		},
		{
			imageUrl: "./assets/images/logos/spring.svg",
			title: "Spring Boot",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		},
		{
			imageUrl: "./assets/images/logos/nodejs-icon.svg",
			title: "NodeJS",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		},
		{
			imageUrl: "./assets/images/logos/karma.svg",
			title: "Karma",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		},
	];
}
