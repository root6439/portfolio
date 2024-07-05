import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { ApplicationConfig } from "@angular/core";
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(routes), provideAnimations()],
};
