import { CertificationDatePipe } from "./pipes/CertificationDate.pipe";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SectionTitle } from "./components/title/title.component";
import { RedirectToDirective } from "./directives/RedirectTo.directive";
import { SocialLogosComponent } from "./components/social-logos/social-logos.component";

@NgModule({
	declarations: [
		SectionTitle,
		CertificationDatePipe,
		RedirectToDirective,
		SocialLogosComponent,
	],
	imports: [CommonModule],
	exports: [
		SectionTitle,
		CertificationDatePipe,
		RedirectToDirective,
		SocialLogosComponent,
	],
})
export class SharedModule {}
