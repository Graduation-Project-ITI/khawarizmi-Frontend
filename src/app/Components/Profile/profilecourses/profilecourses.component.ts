import { Component } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { ProfileService } from 'src/app/services/Profile/profile.service';

@Component({
  selector: 'app-profilecourses',
  templateUrl: './profilecourses.component.html',
  styleUrls: ['./profilecourses.component.css']
})
export class ProfilecoursesComponent {
  courses:
{courseImage:string,date:string,description:string,downVotes:number,
  isPublished:boolean,name:string,upVotes:0}[]=[];
  user: any;
constructor( private localStorage: LocalStorageService,public myService:ProfileService){
  this.myService.getProfileInfo().subscribe((userProfile: any) => {
    this.user = userProfile;
    this.courses=userProfile.courses;
  });

  this.courses=this.localStorage.retrieve('courses');
  console.log(this.courses);
}

}