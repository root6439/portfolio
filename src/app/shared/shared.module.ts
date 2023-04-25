import { CertificationDatePipe } from "./pipes/CertificationDate.pipe";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SectionTitle } from "./title/title.component";
import { RedirectToDirective } from "./directives/RedirectTo.directive";

@NgModule({
	declarations: [SectionTitle, CertificationDatePipe, RedirectToDirective],
	imports: [CommonModule],
	exports: [SectionTitle, CertificationDatePipe, RedirectToDirective],
})
export class SharedModule {}
