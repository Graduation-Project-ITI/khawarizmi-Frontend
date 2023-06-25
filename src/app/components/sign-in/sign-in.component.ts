import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { ActiveService } from 'src/app/services/RegisterService/active.service';
import Swal from 'sweetalert2';


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


          this.authService.Signin(this.signupForm.value).subscribe(
            (result: any) => {
              console.log(result);
              this.sentToken = result;
              this.local.store('userName', this.signupForm.controls['name'].value);
              this.local.store('token',this.sentToken.token);
              localStorage.setItem("token", this.sentToken.token);
              localStorage.setItem("userId", result.userId)

              this.isAuthentication = this.authService.isLoggedIn();
              this.isLoading = false;
              Swal.fire({
                icon: 'success',
                title: 'Signed up successfully',
                showConfirmButton: false,
                timer: 1500
    
              });

              // Redirect to home page if user is authenticated
              if (this.local.retrieve('token')) {
                window.location.assign("/home");

              } else {
                console.log('not logged in');
              }
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

  }
}
