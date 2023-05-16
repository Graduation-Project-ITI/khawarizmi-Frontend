import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LearningService } from 'src/app/services/MyLearningService/learning.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-my-learing',
  templateUrl: './my-learing.component.html',
  styleUrls: ['./my-learing.component.css']
})
export class MyLearingComponent implements OnInit {
 id:any;
 courses:any;
 baseurl=environment.baseURL;
  constructor(private myservice:LearningService,myId:ActivatedRoute) {
    
    //this.id= myId.snapshot.params['UserId'];
this.id=localStorage.getItem("userId");
    
  }

  ngOnInit(): void {
    this.myservice.getAllCourses("7dc3bd6baa64",1,"allcourses").subscribe(
      {
        next:(res)=>{ console.log(res);
          this.courses=res;
        },
        error:(err)=>{
          console.log(err)
        }
      }
    );

  }
  GetCourses(data:string)
  {
    this.myservice.getAllCourses("dc18f4ff-1b09-4789-aae7-7dc3bd6baa64",1,data).subscribe(
      {
        next:(res)=>{ console.log(res);
          this.courses=res;
        },
        error:(err)=>{
          console.log(err)
        }
      }
    );
  }
}
