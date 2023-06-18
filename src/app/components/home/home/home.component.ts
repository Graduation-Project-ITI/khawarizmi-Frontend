import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  constructor() {
    console.log("ctor of home")
  }
  ngOnInit(): void {
    console.log("onInit of home")
  }
  ngOnDestroy(): void {
    console.log("destroy home")
  }
}
