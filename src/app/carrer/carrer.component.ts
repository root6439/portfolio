import { Component } from "@angular/core";
import { Job } from "../shared/models/Job";

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

	pathToUdemyLogo = "./assets/icons/udemy-logo.svg";

	certifications: CardInfo[] = [
		{
			date: new Date(2023, 1),
			imageUrl: this.pathToUdemyLogo,
			subTitle: "Udemy",
			title: "API Restful com Express e TypeORM",
		},
		{
			date: new Date(2023, 0),
			imageUrl: this.pathToUdemyLogo,
			subTitle: "Udemy",
			title: "Typescript",
		},
		{
			date: new Date(2021, 8),
			imageUrl: "./assets/icons/pluralsight-vector-logo-2022 1.svg",
			subTitle: "Pluralsight",
			title: "Angular Fundamentals",
		},
		{
			date: new Date(2021, 8),
			imageUrl: this.pathToUdemyLogo,
			subTitle: "Udemy",
			title: "Desenvolvimento WEB com Angular",
		},
		{
			date: new Date(2021, 6),
			imageUrl: this.pathToUdemyLogo,
			subTitle: "Udemy",
			title: "NodeJS do básico ao avançado",
		},
		{
			date: new Date(2019, 6),
			imageUrl: this.pathToUdemyLogo,
			subTitle: "Udemy",
			title: "Java completo",
		},
	];

	experience: Job[] = [
		{
			startDate: new Date(2021, 7),
			endDate: new Date(),
			companyLogo: "./assets/images/logos/cap-logo.svg",
			companyName: "Capgemini",
			position: "Desenvolvedor Front End Sênior",
		},
		{
			startDate: new Date(2021, 9),
			endDate: new Date(2022, 10),
			companyLogo: "./assets/images/logos/cap-logo.svg",
			companyName: "Capgemini",
			position: "Desenvolvedor Front End Pleno",
		},
		{
			startDate: new Date(2020, 7),
			endDate: new Date(2021, 6),
			companyLogo: "./assets/images/logos/brd-logo.jpg",
			companyName: "BRD Soluções",
			position: "Desenvolvedor Full Stack Júnior",
		},
	];
}
