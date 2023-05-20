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

  baseUrl = "https://localhost:7249/CourseSearch";
  onSearch(keyWord:string): Observable<any>{
    return this.http.get(`${this.baseUrl}?kerWord=${keyWord}`);
  }

}
