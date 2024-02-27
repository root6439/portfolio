import { Component } from "@angular/core";
import { CardInfos } from "../shared/models/CardInfos";

@Component({
	selector: "app-projects",
	templateUrl: "./projects.component.html",
	styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent {
	cardsInfos: CardInfos[] = [
		{
			imageUrl: "./assets/videos/checklist_confissao.mp4",
			title: "Checklist Confissão",
			description:
				"Projeto criado para facilitar os exames de consciência para católicos. O sistema possui etapas, cada etapa com seus respectivos pecados. O usuário marca os pecados cometidos e no final há a opção de imprimir a lista para levar ao confessionário.",
			technologiesUsed: ["Angular", "Angular Material"],
		},
		{
			imageUrl: "./assets/videos/gestao_de_gatos.mp4",
			title: "Gestão de gatinhos",
			description:
				"Este projeto é uma aplicação de CRUD (Create, Read, Update, Delete) desenvolvida para a gestão de informações de gatinhos. Composto por uma interface intuitiva e duas telas principais, os usuários podem pesquisar, visualizar, cadastrar, editar e excluir dados dos gatos de forma eficiente.",
			technologiesUsed: ["Angular", "Angular Material", "ExpressJS", "TypeORM"],
		},
		{
			imageUrl: "./assets/videos/quadro_kanban.mp4",
			title: "Quadro Kanban",
			description: "Este projeto é um sistema de quadro Kanban que permite aos usuários gerenciar suas tarefas de forma visual e eficiente. Ele foi desenvolvido utilizando as tecnologias Angular no frontend, com o auxílio do Angular Material para uma interface elegante e responsiva. No backend, o ExpressJS foi utilizado para criar uma API robusta que interage com o banco de dados, utilizando o TypeORM para mapeamento objeto-relacional.",
			technologiesUsed: ["Angular", "Angular Material", "ExpressJS", "TypeORM"],
		},
	];
}
