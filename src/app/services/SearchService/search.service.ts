import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  headers:any;
  token:any;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem("token");
    this.headers = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.token
    })
  }

  searchQuery ="";
  SearchResult :any = [];
  isloading = true;
  searchTotal:any;
  p :any = 1;
  isError =false;
  errorMsg:any;
  baseUrl = `${environment.baseURL}CourseSearch`;

  onSearch(keyWord:string): Observable<any>{
    return this.http.get(`${this.baseUrl}?kerWord=${keyWord}`, {headers : this.headers});
  }

}
