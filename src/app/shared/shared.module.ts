import { CertificationDatePipe } from "./pipes/CertificationDate.pipe";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SectionTitle } from "./title/title.component";

@NgModule({
	declarations: [SectionTitle, CertificationDatePipe],
	imports: [CommonModule],
	exports: [SectionTitle, CertificationDatePipe],
})
export class SharedModule {}
