import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateCourseService } from 'src/app/services/create-course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit, DoCheck {

  categories : string|any;
  tags : []|any;
  imageFile : File|any = null;
  newCourseForm : FormGroup;

  constructor (private formBuilder: FormBuilder, private courseServ : CreateCourseService,
                private snackBar: MatSnackBar, private dialog: MatDialog)
  {
    this.newCourseForm = this.formBuilder.group({
      Title : ['',Validators.required],
      Description : ['',Validators.required],
      Category : ['',Validators.required],
      Tags : [[],Validators.required],
      Image : []
    })

  }

  ngOnInit(): void {
    this.categories = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];
    this.tags = ["tag 1", "tag 2", "tag 3", "tag 4", "tag 5"];
    this.courseServ.getCategories().subscribe({
      next : res => this.categories = res,
      error : err => console.log(err)
    });
  }

  ngDoCheck(): void {
    this.courseServ.getTagsByCategory(this.newCourseForm.controls['category'].value).subscribe({
      next : res => this.tags = res,
      error : err => console.log(err)
    });
  }

  get formIsValid () {
    return this.newCourseForm.valid;
  }

  getImage(event:any){
    this.imageFile = event.target.files[0];
  }

  reset(){
    this.newCourseForm.controls["Title"].setValue('');
    this.newCourseForm.controls["Description"].setValue('');
    this.newCourseForm.controls["Category"].setValue('');
    this.newCourseForm.controls["Tags"].setValue('');
    this.newCourseForm.controls["Image"].setValue('');
  }

  save(){
    const fd = new FormData();
    fd.append('title', this.newCourseForm.controls['Title'].value);
    fd.append('description', this.newCourseForm.controls['Description'].value);
    fd.append('category', this.newCourseForm.controls['Category'].value);
    fd.append('tags', this.newCourseForm.controls['Tags'].value);
    if (this.imageFile) {
      fd.append('Image', this.imageFile, this.imageFile.name);
      this.imageFile = null;
    }

    this.courseServ.postCourseData("id", fd).subscribe({
      next : res => {
        console.log(res);
        this.dialog.closeAll();
        this.snackBar.open("Your course is successfully created", "Ok", {duration: 2000});
      },
      error : err => console.log(err)
    });
  }

}
