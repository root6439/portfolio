import {
	Directive,
	ElementRef,
	Input,
	SecurityContext,
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Directive({
	selector: "[redirectTo]",
	standalone: true
})
export class RedirectToDirective {
	@Input()
	redirectTo: string | undefined = "";

	constructor(private el: ElementRef, private sanitizer: DomSanitizer) {
		this.el.nativeElement.addEventListener("click", () => {
			window.open(
				this.sanitizer.sanitize(
					SecurityContext.RESOURCE_URL,
					this.sanitizer.bypassSecurityTrustResourceUrl(this.redirectTo ?? "")
				) ?? "",
				"_blank"
			);
		});
	}
}
