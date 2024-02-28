import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { Component, EventEmitter, Output } from "@angular/core";
import { AboutComponent } from "../about/about.component";
import { CarrerComponent } from "../carrer/carrer.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";
import { TechnologiesComponent } from "../technologies/technologies.component";
import { ProjectsComponent } from "../projects/projects.component";
import { SocialLogosComponent } from "../shared/components/social-logos/social-logos.component";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
	standalone: true,
	imports: [
		MatIconModule,
		AboutComponent,
		CarrerComponent,
		ContactComponent,
		FooterComponent,
		TechnologiesComponent,
		ProjectsComponent,
		SocialLogosComponent,
		MatButtonModule
	],
})
export class HomeComponent {
	@Output()
	openSideNav = new EventEmitter<void>();

	goTo(ref: HTMLDivElement) {
		ref.scrollIntoView();
	}

	emit(): void {
		this.openSideNav.emit();
	}
}
