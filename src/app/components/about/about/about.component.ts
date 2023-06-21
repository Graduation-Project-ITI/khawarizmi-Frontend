import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  constructor() {
    console.log("ctor of about")
  }
  ngOnInit(): void {
    console.log("onInit of about")
  }



}
