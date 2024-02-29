import { Component } from "@angular/core";
import { Job } from "../shared/models/Job";
import { SectionTitle } from "../shared/components/title/title.component";
import { CommonModule } from "@angular/common";
import { CertificationDatePipe } from "../shared/pipes/CertificationDate.pipe";
import { Certification } from "../shared/models/Certification";

@Component({
	selector: "app-carrer",
	templateUrl: "./carrer.component.html",
	styleUrls: ["./carrer.component.scss"],
	standalone: true,
	imports: [SectionTitle, CommonModule, CertificationDatePipe],
})
export class CarrerComponent {
	isDesktop = window.innerWidth >= 600;

	pathToUdemyLogo = "./assets/icons/udemy-logo.svg";
	certificationsPath = "./assets/images/certifications"

	certifications: Certification[] = [
		{
			endDate: new Date(2023, 1),
			companyLogo: this.pathToUdemyLogo,
			companyName: "Udemy",
			courseName: "API Restful com Express e TypeORM",
			url: "./assets/images/certifications/API Restful com Express.png"
		},
		{
			endDate: new Date(2023, 0),
			companyLogo: this.pathToUdemyLogo,
			companyName: "Udemy",
			courseName: "Typescript",
			url: `${this.certificationsPath}/Entendendo Typescript.png`
		},
		{
			endDate: new Date(2021, 8),
			companyLogo: "./assets/icons/pluralsight-vector-logo-2022 1.svg",
			companyName: "Pluralsight",
			courseName: "Angular Fundamentals",
			url: `${this.certificationsPath}/Angular fundamentals.png`
		},
		{
			endDate: new Date(2021, 8),
			companyLogo: this.pathToUdemyLogo,
			companyName: "Udemy",
			courseName: "Desenvolvimento WEB com Angular",
			url: `${this.certificationsPath}/Desenvolvimento web com Angular.png`
		},
		{
			endDate: new Date(2021, 6),
			companyLogo: this.pathToUdemyLogo,
			companyName: "Udemy",
			courseName: "NodeJS do básico ao avançado",
			url: `${this.certificationsPath}/node basico ao avançado.png`
		},
		{
			endDate: new Date(2019, 6),
			companyLogo: this.pathToUdemyLogo,
			companyName: "Udemy",
			courseName: "Java completo",
			url: `${this.certificationsPath}/java.png`
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

	openCertification(url: string) {
		window.open(url, "_blank")
	}
}
