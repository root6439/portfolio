import { Component } from "@angular/core";
import { RedirectToDirective } from "../../directives/RedirectTo.directive";

@Component({
	selector: "social-logos",
	templateUrl: "./social-logos.component.html",
	styleUrls: ["./social-logos.component.scss"],
	standalone: true,
	imports: [RedirectToDirective],
})
export class SocialLogosComponent {}
