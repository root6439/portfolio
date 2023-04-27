import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: "app-contact",
	templateUrl: "./contact.component.html",
	styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
	formContact: FormGroup = this.fb.group({
		name: ["", Validators.required],
		email: ["", [Validators.required, Validators.email]],
		subject: ["", Validators.required],
		message: ["", Validators.required],
	});

	constructor(private fb: FormBuilder) {}
}
