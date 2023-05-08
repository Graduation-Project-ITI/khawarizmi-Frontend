import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActiveService } from 'src/app/Services/RegisterService/active.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private formBulider: FormBuilder, private myservice: ActiveService) {
    this.signupForm = this.formBulider.group({
      name: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(6)]],

    })

  }

  signupForm: FormGroup;


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
      // const fd = new FormData();
      // fd.append('name', this.signupForm.get('name')?.value);
      // fd.append('password', this.signupForm.get('password')?.value);
      // console.log(fd)
      this.myservice.Signin(this.signupForm.value).subscribe(
       result=>console.log(result)
        
      )
      console.log(this.signupForm.get("name")?.value);
      console.log(this.signupForm.get('password')?.value);
    } catch (error) {
      console.log(error);
    }

  }

}
