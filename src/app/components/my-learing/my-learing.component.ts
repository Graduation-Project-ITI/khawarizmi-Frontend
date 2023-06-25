import { Component, OnInit } from '@angular/core';
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
 isEmpty: boolean = false;
  constructor(private myservice:LearningService) {
    //this.id= myId.snapshot.params['UserId'];
    this.id=localStorage.getItem("userId");    
  }

  ngOnInit(): void {
    this.myservice.getAllCourses(this.id,1,"allcourses").subscribe(
      {
        next:(res)=>{ console.log(res);
          this.courses=res;
          if(this.courses.length == 0) this.isEmpty = true;
          else this.isEmpty = false;
        },
        error:(err)=>{
          console.log(err)
        }
      }
    );
  }
  GetCourses(data:string)
  {
    this.myservice.getAllCourses(this.id,1,data).subscribe(
      {
        next:(res)=>{ console.log(res);
          this.courses=res;
          if(this.courses.length == 0) this.isEmpty = true;
          else this.isEmpty = false;
        },
        error:(err)=>{
          console.log(err)
        }
      }
    );
  }
}

