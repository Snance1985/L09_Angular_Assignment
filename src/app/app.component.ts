import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar">
      <a routerLink="/home">Home</a>|
      <a routerLink="/about">About</a>|
      <a routerLink="/jobs">Jobs</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }