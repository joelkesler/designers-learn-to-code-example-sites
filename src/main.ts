import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, provideRouter } from '@angular/router';
import 'zone.js';
import { routes } from './app/routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <router-outlet />
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
