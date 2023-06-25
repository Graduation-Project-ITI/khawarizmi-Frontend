import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private token: any;
  private userName = '';
  private headers: any;
  private userProfile: any = {};


  constructor(public http: HttpClient, public local: LocalStorageService) {
    this.token = localStorage.getItem("token");
    this.headers = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.token
    })
  }

  // private initHeaders() {
  //   this.headers = new HttpHeaders({
  //     Authorization: 'Bearer ' + this.token,
  //   });
  // }

  EditProfileInfo(formData: FormData) {
    // this.initHeaders();
    // Send the data to the API
    return this.http.post(`${environment.baseURL}api/Profile`, formData, { headers: this.headers });
  }

  getProfileInfo() {
    // this.initHeaders();
   return this.http
      .get(`${environment.baseURL}api/Profile`,{ headers: this.headers } );
  }

getprofilecourses(){
  // this.initHeaders();
   return this.http
      .get(`${environment.baseURL}api/Profile`,{ headers: this.headers } );
}

}
