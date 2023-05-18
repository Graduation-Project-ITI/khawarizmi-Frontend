import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';


@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private token: { token: string } = { token: '' };
  private userName = '';
  private headers: any;
  private userProfile: any = {};


  constructor(public http: HttpClient, public local: LocalStorageService) {
    this.token = this.local.retrieve('token') || { token: '' };
    this.userName = this.local.retrieve('userName') || '';
    this.initHeaders();
  }

  private initHeaders() {
    this.headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
    });
  }

  EditProfileInfo(formData: FormData) {
    this.initHeaders();
    // Send the data to the API
    return this.http.post('https://localhost:7249/api/Profile', formData, {headers: this.headers,});


  }

  getProfileInfo() {
    this.initHeaders();
   return this.http
      .get(`https://localhost:7249/api/Profile`,{ headers: this.headers } );
  }

getprofilecourses(){
  this.initHeaders();
   return this.http
      .get(`https://localhost:7249/api/Profile`,{ headers: this.headers } );
}

}
