import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateCourseService } from 'src/app/services/create-course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  userId = localStorage.getItem("userId");
  categories : any;
  tags : any;
  imageFile : File|any = null;
  newCourseForm : FormGroup;

  constructor (private formBuilder: FormBuilder, private courseServ : CreateCourseService,
                private snackBar: MatSnackBar, private dialog: MatDialog, public dialogRef: MatDialogRef<CreateCourseComponent>)
  {
    this.newCourseForm = this.formBuilder.group({
      title : ['',Validators.required],
      description : ['',Validators.required],
      category : ['',Validators.required],
      tags : [[],Validators.required],
      image : []
    })

    this.courseServ.getCategories().subscribe({
      next : res => {
        this.categories = res;
        console.log(this.categories);
      },
      error : err => console.log(err)
    });
  }

  ngOnInit(): void {}

  getTags(e:any){
    console.log(e);
    this.courseServ.getTagsByCategory(+e.value).subscribe({
      next : res => {
        this.tags = res;
        console.log(this.tags);
      },
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
    this.newCourseForm.controls["title"].setValue('');
    this.newCourseForm.controls["description"].setValue('');
    this.newCourseForm.controls["category"].setValue('');
    this.newCourseForm.controls["tags"].setValue('');
    this.newCourseForm.controls["image"].setValue('');
  }

  submit(){

    const fd = new FormData();
    fd.append('Title', this.newCourseForm.get('title')?.value);
    fd.append('Description', this.newCourseForm.controls['description'].value);
    fd.append('CategoryId', this.newCourseForm.controls['category'].value);
    fd.append('TagsIds', this.newCourseForm.controls['tags'].value);
    if (this.imageFile) {
      fd.append('File', this.imageFile, this.imageFile.name);
      this.imageFile = null;
    }

    this.courseServ.postCourseData(this.userId, fd).subscribe({
      next : res => {
        this.snackBar.open("Your course is successfully created", "Ok", {duration: 3000});
        setTimeout(() => {
          this.dialogRef.close();
          location.assign(`/coursePage/${res}`);
        }, 2000);
      },
      error : err => console.log(err)
    });

  }

}
