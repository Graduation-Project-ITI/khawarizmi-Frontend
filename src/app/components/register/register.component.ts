import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ActiveService } from 'src/app/services/RegisterService/active.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  successMessage: any;
  isLoading = false;
  constructor(private formBulider: FormBuilder, private myservice: ActiveService, private router:Router) {
    this.signupForm = this.formBulider.group({
      name: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(6),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])[a-zA-Z\d!@#\$%\^&\*]{6,20}$/)]],
      Gender: ['', [Validators.required, Validators.pattern("^(male|female)$")]]

    })


  }

  signupForm: FormGroup;
    errorMessage: string = '';



  get nameNotValid() {
    return !this.signupForm.controls['name'].value ? 'You must enter a value'
      : !this.signupForm.controls['name'].valid ? 'Invalid name format must be min 3 char' : '';
  }

  get emailNotValid() {
    return !this.signupForm.controls['email'].value ? 'You must enter a value'
      : !this.signupForm.controls['email'].valid ? 'Invalid email format' : '';
  }

  get passwordNotValid() {
    return !this.signupForm.controls['password'].value ? 'You must enter a value'
      : !this.signupForm.controls['password'].valid ? 'Invalid password format, password should be 6 - 12 (lowercase and uppercase and digits)' : '';
  }

  get GenderNotValid() {
    return !this.signupForm.controls['Gender'].value ? 'You must enter a value'
      : !this.signupForm.controls['Gender'].valid ? 'Please select a valid gender ' : '';
  }


  signUp() {
    this.isLoading = true;
    try {
      const fd = new FormData();
      fd.append('name', this.signupForm.get('name')?.value);
      fd.append('email', this.signupForm.get('email')?.value);
      fd.append('password', this.signupForm.get('password')?.value);
      fd.append('Gender', this.signupForm.get('Gender')?.value);
      console.log(this.signupForm.get('Gender')?.value);
      fd.append('role', "user");
      console.log(fd)
      // Swal.fire('Done', 'Successfully register', 'success');
      //     this.router.navigateByUrl('/login');
      this.myservice.SignUp(fd).subscribe({
        next: (response: any) => {
          // handle success response
          this.isLoading = false;
          console.log(response); // log the response to see what the server is actually returning
          Swal.fire({
            icon: 'success',
            title: 'Signed up successfully',
            showConfirmButton: false,
            timer: 1500

          }).then(()=>window.location.href = 'http://localhost:4201/signin');


        },
        error: (error: HttpErrorResponse) => {
          // handle error response
          console.log(error);
          this.isLoading = false;
          this.errorMessage = error.error.message; // access the error message from the error object
          if(this.errorMessage=="Email Already Exist"){
            Swal.fire({
              title: 'Email Already Exist !!',
              showClass: {
                popup: 'animate_animated animate_fadeInDown',
              },
              hideClass: {
                popup: 'animate_animated animate_fadeOutUp',
              },
            });



          }
          else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'in Valid sign up please try again !',
            });
          }
          console.log(this.errorMessage);
        }
      });

    } catch (error:any) {
      console.log(error.errorMessage);
      console.log(error);
    }

  }

}
