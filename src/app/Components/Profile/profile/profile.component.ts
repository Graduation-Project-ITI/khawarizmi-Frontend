import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'ngx-webstorage';
import { ProfileService } from 'src/app/services/Profile/profile.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import * as $ from 'jquery'; // import jQuery
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, AfterViewInit {
  token: any;
  user: any;
  userID: any;
  headers: any;
  ImageSrc: any;
  ProfileImage: any;
  cover: any;
  check:string="";
    x:String='';
      y:String='';
      z:String='';
      w:String='';
     message: string = `${this.x} ${this.y} ${this.z} ${this.w}`;
     us:boolean=false;


  UpdatingForm: any;
  gender: any[] = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
  ];

  UserInfo: {
    name: string;
    userImage: string;
    coverImage: string;
    email: string;
    gender: number;
    courses:
    {courseImage:string,date:string,description:string,downVotes:number,
      isPublished:boolean,name:string,upVotes:0}[];
  } = { name: 'doaa', userImage: '', coverImage: '', email: 'do@do.com', gender: 0,courses:[] };

  selectedFile: File | null = null;

  constructor(
    private myService: ProfileService,
    private formBuilder: FormBuilder,
    private localStorage: LocalStorageService,
    public toastr: ToastrService,
    public router:Router
  ) {

  //   if(this.us){

  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Signed in successfully',
  //       timer: 2000, // set the timer to 2 seconds (2000 milliseconds)
  //       showConfirmButton: false, // hide the "Confirm" button
  //     });

  //   this.us=false;
  // }

  }

  ngOnInit(): void {
    this.UpdatingForm = this.formBuilder.group({
      Name: ['', [Validators.maxLength(12), Validators.minLength(3)]],
      Email: [
        '',
        [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      ],
      Gender: [''],
      password: [
        '',
        [Validators.maxLength(12), Validators.minLength(6)],
      ],
      UserImage: [],
    });

    this.myService.getProfileInfo().subscribe((userProfile: any) => {
      this.user = userProfile;
      this.ProfileImage =  this.user.userImage;
      this.localStorage.store('courses',this.user.courses);
      console.log(this.user);
      console.log(this.user.courses);
    });
  }

  ngAfterViewInit(): void {}


  get nameNotValid(): string {
    if (!this.UpdatingForm.controls['Name'].value) {
      return 'You must enter a value';
    } else if (!this.UpdatingForm.controls['Name'].valid) {
      return 'Invalid name format';
    } else {
      return '';
    }
  }

  get emailNotValid(): string {
    if (!this.UpdatingForm.controls['Email'].value) {
      return 'You must enter a value';
    } else if (!this.UpdatingForm.controls['Email'].valid) {
      return 'Invalid email format';
    } else {
      return '';
    }
  }

  get passwordNotValid(): string {
    if (!this.UpdatingForm.controls['password'].valid) {
      return 'Invalid password format, password should be 8 - 16 (lowercase or uppercase)characters or digits';
    } else {
      return '';
    }
  }

  getPhoto(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }


  onsubmit() {
    if (this.UpdatingForm.valid) {
      const fd = new FormData();
      fd.append('Name', this.UpdatingForm.get('Name')?.value);
      fd.append('Email', this.UpdatingForm.get('Email')?.value);
      fd.append('Password', this.UpdatingForm.get('password')?.value);
      fd.append('Gender', 'male');

      if (this.selectedFile) {
        fd.append('UserImage', this.selectedFile, this.selectedFile.name);
      }

     this.myService.EditProfileInfo(fd).subscribe({
  next: (result) => {
    this.selectedFile = null;

    console.log(result);


    window.location.reload();


  },
  error: (error:HttpErrorResponse ) => {
    if(error.status==400){
      console.log(error);
     this.x=error.error.errors.Name?.[0]??'';
     this.y=error.error.errors.UserImage?.[0]??'';
     this.z=error.error.errors.Email?.[0]??'';
     this.w=error.error.errors.Password?.[0]??'';

    this.message= `${this.x} ${this.y} ${this.z} ${this.w}`;


      alert(this.message);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: this.message,
      })
    }


      if(error.status==200){
        this.us=true;


        location.reload();



      }


      // window.location.reload();


    // window.location.reload();
  },
});

  }

}
}
