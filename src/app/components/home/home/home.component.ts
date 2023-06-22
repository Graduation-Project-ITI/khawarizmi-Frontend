import { Component, OnInit } from '@angular/core';
import { ActiveService } from 'src/app/services/RegisterService/active.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuthenticated : any;

  constructor(private actServ: ActiveService) {

  }

  ngOnInit(): void {
    this.isAuthenticated = this.actServ.isLoggedIn();
  }
}
