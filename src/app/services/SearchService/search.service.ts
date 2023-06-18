import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}

  searchQuery ="";
  SearchResult :any = [];
  isloading = true;
  searchTotal:any;
  p :any = 1;
  isError =false;
  errorMsg:any;
  baseUrl = "https://e-learning-api-sc6i.onrender.com/CourseSearch";
  onSearch(keyWord:string): Observable<any>{
    return this.http.get(`${this.baseUrl}?kerWord=${keyWord}`);
  }

}
