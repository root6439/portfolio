import { Component, EventEmitter, Output } from "@angular/core";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
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
