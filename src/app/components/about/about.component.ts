import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutMe: string = "A Hedgehog Becomes A Hero.";
  statement: string = "I have no master, except the wind that blows free!";
  technologies: string = "Speed Force";
  technology1: string = "Golden Rings";
  technology2: string = "Bashing Baddies";
  technology3: string = "Disrupting Dr. Robotnik";

 constructor() { }

 ngOnInit(): void {
 }
}