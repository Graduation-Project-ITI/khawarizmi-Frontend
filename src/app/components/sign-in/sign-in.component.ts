import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import jwt_decode from 'jwt-decode';

import { ActiveService } from 'src/app/services/RegisterService/active.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

   isAuthentication:any;

  constructor(private formBulider: FormBuilder, private authService: ActiveService,public local: LocalStorageService, private router: Router)
   {
    this.signupForm = this.formBulider.group({
      name: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(6)]],

    })

    //check if token in local storage
  }
  ngOnInit(): void {

  }

  signupForm: FormGroup;
  sentToken:{token:string}={token:""};

  get nameNotValid() {
    return !this.signupForm.controls['name'].value ? 'You must enter a value'
      : !this.signupForm.controls['name'].valid ? 'Invalid name format' : '';
  }
  get passwordNotValid() {
    return !this.signupForm.controls['password'].value ? 'You must enter a value'
      : !this.signupForm.controls['password'].valid ? 'Invalid password format, password should be 8 - 16 (lowercase or uppercase)characters or digits' : '';
  }

  signUp() {
    try {
      this.authService.Signin(this.signupForm.value).subscribe(
      (result:any) =>{console.log(result)
       this.local.store('token',this.sentToken.token);
       this.sentToken=result;
       this.local.store('token',this.sentToken.token);
       const decodedToken :any = jwt_decode(this.sentToken.token);
       const nameIdentifier = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
       console.log(decodedToken);
       console.log(nameIdentifier);

       console.log(this.local.retrieve('token'));

       //check if user authentication
      this.isAuthentication = this.authService.isLoggedIn();
      Swal.fire('Done', 'Successfully logged in', 'success');
     //route if login
       if(this.isAuthentication){
         this.router.navigateByUrl('/home');
          }
       else{
        console.log('not logged in');
       }
      //end route if login
      }) //end subscribe

      console.log(this.signupForm.get("name")?.value);
      console.log(this.signupForm.get('password')?.value);
    }
    catch (error) {
      console.log(error);
    }}//end function


  }


