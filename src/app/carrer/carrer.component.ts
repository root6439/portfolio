import { Component } from "@angular/core";

interface CardInfo {
	imageUrl: string;
	title: string;
	subTitle: string;
	date: Date;
}

@Component({
	selector: "app-carrer",
	templateUrl: "./carrer.component.html",
	styleUrls: ["./carrer.component.scss"],
})
export class CarrerComponent {
	isDesktop = window.innerWidth >= 600;

	certifications: CardInfo[] = [
		{
			date: new Date(2021, 8),
			imageUrl: "./assets/icons/udemy-logo.svg",
			subTitle: "Pluralsight",
			title: "Angular Fundamentals",
		},
		{
			date: new Date(2021, 8),
			imageUrl: "./assets/icons/pluralsight-vector-logo-2022 1.svg",
			subTitle: "Pluralsight",
			title: "Angular Fundamentals",
		},
		{
			date: new Date(2021, 8),
			imageUrl: "./assets/icons/pluralsight-vector-logo-2022 1.svg",
			subTitle: "Pluralsight",
			title: "Angular Fundamentals",
		},
		{
			date: new Date(2021, 8),
			imageUrl: "./assets/icons/pluralsight-vector-logo-2022 1.svg",
			subTitle: "Pluralsight",
			title: "Angular Fundamentals",
		},
	];
	experience: CardInfo[] = [
		{
			date: new Date(2021, 8),
			imageUrl: "./assets/icons/pluralsight-vector-logo-2022 1.svg",
			subTitle: "Pluralsight",
			title: "Angular Fundamentals",
		},
		{
			date: new Date(2021, 8),
			imageUrl: "./assets/icons/pluralsight-vector-logo-2022 1.svg",
			subTitle: "Pluralsight",
			title: "Angular Fundamentals",
		},
		{
			date: new Date(2021, 8),
			imageUrl: "./assets/icons/pluralsight-vector-logo-2022 1.svg",
			subTitle: "Pluralsight",
			title: "Angular Fundamentals",
		},
		{
			date: new Date(2021, 8),
			imageUrl: "./assets/icons/pluralsight-vector-logo-2022 1.svg",
			subTitle: "Pluralsight",
			title: "Angular Fundamentals",
		},
	];
}
