import { MatButtonModule } from "@angular/material/button";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "./shared/shared.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AboutComponent } from "./about/about.component";
import { TechnologiesComponent } from "./technologies/technologies.component";
import { ProjectsComponent } from "./projects/projects.component";
import { CarrerComponent } from "./carrer/carrer.component";
import { ContactComponent } from "./contact/contact.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from "./footer/footer.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent,
		TechnologiesComponent,
		ProjectsComponent,
		CarrerComponent,
		ContactComponent,
		FooterComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		SharedModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
		MatSidenavModule,
		MatIconModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
