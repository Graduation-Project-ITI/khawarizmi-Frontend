import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import jwt_decode from 'jwt-decode';




import Swal from 'sweetalert2';
import { ActiveService } from 'src/app/services/RegisterService/active.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

  isAuthentication: any;
  isLoading= false;
  signupForm: FormGroup;
  sentToken: { token: string } = { token: "" };

  constructor(
    private formBulider: FormBuilder,
    private authService: ActiveService,
    public local: LocalStorageService,
    private router: Router
  ) {
    this.signupForm = this.formBulider.group({
      name: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  get nameNotValid() {
    return !this.signupForm.controls['name'].value ? 'You must enter a value'
      : !this.signupForm.controls['name'].valid ? 'Invalid name format' : '';
  }

  get passwordNotValid() {
    return !this.signupForm.controls['password'].value ? 'You must enter a value'
      : !this.signupForm.controls['password'].valid ? 'Invalid password format, password should be 6 - 12 (lowercase or uppercase)characters or digits' : '';
  }

  signUp() {
      this.isLoading= true;
        try {
          this.authService.Signin(this.signupForm.value).subscribe(
            (result: any) => {
              console.log(result);
              localStorage.setItem('userName', this.signupForm.controls['name'].value);
              localStorage.setItem("userId", result.userId);
              this.sentToken = result;
              localStorage.setItem("token", this.sentToken.token);
              console.log(localStorage.getItem('token'));

              // const decodedToken: any = jwt_decode(this.sentToken.token);
              // const nameIdentifier = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
              // //console.log(decodedToken);
              // console.log(nameIdentifier);
              // console.log(this.local.retrieve('token'));

              // Check if user is authenticated
              this.isAuthentication = this.authService.isLoggedIn();
              this.isLoading = false;
              Swal.fire('Done', 'Successfully logged in', 'success');

              // Redirect to home page if user is authenticated
              if (this.isAuthentication) {
                window.location.href = 'http://localhost:4201/home';
              } else {
                console.log('not logged in');
              }

              console.log(this.signupForm.get("name")?.value);
              console.log(this.signupForm.get('password')?.value);
            },
            (error) => {
              this.isLoading = false;
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'UserName Or Password is incorrect!',
              });
              console.log('not logged in');

              console.log(error);
            }
          );
        } catch (error) {
          console.log(error);
        }

     //end subscribe

    console.log(this.signupForm.get("name")?.value);
    console.log(this.signupForm.get('password')?.value);
  }
}
