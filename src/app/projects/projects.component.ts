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
			imageUrl: "./assets/images/checklist confissao.svg",
			title: "Checklist Confissão",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nunc a nibh sollicitudin faucibus. Suspendisse id finibus nisi, ac volutpat sapien. Praesent egestas urna et interdum cursus. Integer luctus lectus metus, et aliquet diam sodales ut. Suspendisse maximus quis metus et congue. Phasellus semper venenatis mauris. Cras eu condimentum orci, a euismod purus. Nunc commodo tellus venenatis semper vulputate.. ",
			technologiesUsed: ["Angular", "Angular Material"],
		},
		{
			imageUrl: "./assets/images/checklist confissao.svg",
			title: "Angular",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nunc a nibh sollicitudin faucibus. Suspendisse id finibus nisi, ac volutpat sapien. Praesent egestas urna et interdum cursus. Integer luctus lectus metus, et aliquet diam sodales ut. Suspendisse maximus quis metus et congue. Phasellus semper venenatis mauris. Cras eu condimentum orci, a euismod purus. Nunc commodo tellus venenatis semper vulputate.. ",
		},
		{
			imageUrl: "./assets/images/checklist confissao.svg",
			title: "Bootstrap",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nunc a nibh sollicitudin faucibus. Suspendisse id finibus nisi, ac volutpat sapien. Praesent egestas urna et interdum cursus. Integer luctus lectus metus, et aliquet diam sodales ut. Suspendisse maximus quis metus et congue. Phasellus semper venenatis mauris. Cras eu condimentum orci, a euismod purus. Nunc commodo tellus venenatis semper vulputate.. ",
		},
		{
			imageUrl: "./assets/images/checklist confissao.svg",
			title: "Spring Boot",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nunc a nibh sollicitudin faucibus. Suspendisse id finibus nisi, ac volutpat sapien. Praesent egestas urna et interdum cursus. Integer luctus lectus metus, et aliquet diam sodales ut. Suspendisse maximus quis metus et congue. Phasellus semper venenatis mauris. Cras eu condimentum orci, a euismod purus. Nunc commodo tellus venenatis semper vulputate.. ",
		},
		{
			imageUrl: "./assets/images/checklist confissao.svg",
			title: "NodeJS",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nunc a nibh sollicitudin faucibus. Suspendisse id finibus nisi, ac volutpat sapien. Praesent egestas urna et interdum cursus. Integer luctus lectus metus, et aliquet diam sodales ut. Suspendisse maximus quis metus et congue. Phasellus semper venenatis mauris. Cras eu condimentum orci, a euismod purus. Nunc commodo tellus venenatis semper vulputate.. ",
		},
		{
			imageUrl: "./assets/images/checklist confissao.svg",
			title: "Karma",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nunc a nibh sollicitudin faucibus. Suspendisse id finibus nisi, ac volutpat sapien. Praesent egestas urna et interdum cursus. Integer luctus lectus metus, et aliquet diam sodales ut. Suspendisse maximus quis metus et congue. Phasellus semper venenatis mauris. Cras eu condimentum orci, a euismod purus. Nunc commodo tellus venenatis semper vulputate.. ",
		},
	];
}
