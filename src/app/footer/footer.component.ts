import { Component } from "@angular/core";
import { SectionTitle } from "../shared/components/title/title.component";
import { SocialLogosComponent } from "../shared/components/social-logos/social-logos.component";

@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"],
	standalone: true,
	imports: [SectionTitle, SocialLogosComponent],
})
export class FooterComponent {}
