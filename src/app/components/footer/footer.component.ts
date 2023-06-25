import { Component, OnInit } from '@angular/core';
import { ActiveService } from 'src/app/services/RegisterService/active.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  isAuthenticated : any;

  constructor(private actServ: ActiveService) { }

  ngOnInit(): void {
    this.isAuthenticated = this.actServ.isLoggedIn();
  }

}
