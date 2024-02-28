import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { Component } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import { SectionTitle } from "../shared/components/title/title.component";
import { MatButtonModule } from "@angular/material/button";

@Component({
	selector: "app-contact",
	templateUrl: "./contact.component.html",
	styleUrls: ["./contact.component.scss"],
	standalone: true,
	imports: [
		ReactiveFormsModule,
		SectionTitle,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule
	],
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
