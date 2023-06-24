import { Component } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { ProfileService } from 'src/app/services/Profile/profile.service';

@Component({
  selector: 'app-profilecourses',
  templateUrl: './profilecourses.component.html',
  styleUrls: ['./profilecourses.component.css']
})
export class ProfilecoursesComponent {
  courses:any;

  user: any;
constructor( private localStorage: LocalStorageService,public myService:ProfileService){
  this.myService.getProfileInfo().subscribe((userProfile: any) => {
    this.user = userProfile;
    console.log(this.user.courses);
    this.courses=this.user.courses;

  });

  // this.courses=this.localStorage.retrieve('courses');
  console.log(this.courses);
  // console.log(this.courses[0]?.Id);
}

}
