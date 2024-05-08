import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {MyComponent} from "@org/angular-lib";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MyComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-webapp';
}
