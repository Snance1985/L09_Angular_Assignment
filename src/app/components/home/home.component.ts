import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string = "Sonic";
  name2: string = "The Hedgehog";
  tagline: string = "Gotta. Go. Fast.";

 constructor() { }

 ngOnInit(): void {
 }
}