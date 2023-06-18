import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LearningService {

  URL=environment.baseURL+"api/Learning";
  constructor( private Client:HttpClient ) { }

  getAllCourses(userid:string,pagenumber:number,path:string)
  {
      return this.Client.get(`${this.URL}/${path}/${userid}?pagenumber=${pagenumber}`);
  }

 

}
