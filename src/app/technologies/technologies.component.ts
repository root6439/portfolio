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
			imageUrl: "./assets/images/logos/angular.svg",
			title: "Angular",
			description:
				"Framework typescript para criação do front-end. Também é responsável por criar um código de fácil implementação e manutenção.",
			url: "https://angular.io/",
		},
		{
			imageUrl: "./assets/images/logos/material.svg",
			title: "Angular Material",
			description:
				"Biblioteca feita em Angular com componentes pré-prontos que incluem práticas para tornar o código limpo e um template agradável ao usuário.",
			url: "https://material.angular.io/",
		},
		{
			imageUrl: "./assets/images/logos/bootstrap-logo.svg",
			title: "Bootstrap",
			description:
				"Kit de ferramentas de front-end com componentes e classes css para auxiliar na criação de sistemas responsíveis.",
			url: "https://getbootstrap.com/",
		},
		{
			imageUrl: "./assets/images/logos/spring.svg",
			title: "Spring Boot",
			description:
				"Framework Java para criação de endpoints com o propósito de recuperar informações do banco de dados. ",
			url: "https://spring.io/",
		},
		{
			imageUrl: "./assets/images/logos/nodejs-icon.svg",
			title: "NodeJS",
			description:
				"Assim como o Spring, é utilizado para criação de endpoints. Normalmente utilizado junto com o Express.",
			url: "https://nodejs.org/en",
		},
		{
			imageUrl: "./assets/images/logos/karma.svg",
			title: "Karma",
			description:
				"Biblioteca padrão para fazer testes unitários no Angular juntament com o Jasmine.",
			url: "https://karma-runner.github.io/latest/index.html",
		},
	];
}
