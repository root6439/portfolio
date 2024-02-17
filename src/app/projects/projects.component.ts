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
				"Sistema CRUD criado para gestão de uma casa de doação de gatos. Foram implementadas uma tela de login, com autenticação usando JWT. Uma tela de pesquisa e outra de cadastro/atualização. A exclusão de gatos é feita diretamente na tela de pesquisa. Foram criadas as tabelas e seus relacionamentos através do TypeORM e os endpoints em ExpressJS.",
			technologiesUsed: ["Angular", "Angular Material", "ExpressJS", "TypeORM"],
		},
	];
}
