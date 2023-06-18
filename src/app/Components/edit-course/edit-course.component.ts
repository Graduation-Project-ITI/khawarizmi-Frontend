import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CourseOverviewService } from 'src/app/services/course-overview.service';
import { DialogData } from '../feedback-dialog/feedback-dialog.component';
import { CreateCourseService } from 'src/app/services/create-course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent {

  userId = localStorage.getItem("userId");
  categories : any;
  tags : any;
  imageFile : File|any = null;
  editCourseForm : FormGroup;
  initialCategory : any;

  constructor (private formBuilder: FormBuilder, private courseServ:CreateCourseService, private CourseOverviewServ:CourseOverviewService,
    public dialogRef: MatDialogRef<EditCourseComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData|any)
  {
    this.courseServ.getCategories().subscribe({
      next : res => {
        this.categories = res;
        this.initialCategory = this.categories.filter( (c:any) => c.id == data.categoryId)[0].id;
        console.log(this.categories);
        console.log(this.initialCategory);
      },
      error : err => console.log(err)
    });


    this.editCourseForm = this.formBuilder.group({
      title : [data.title, Validators.required],
      description : [data.description, Validators.required],
      category : ['', Validators.required],
      tags : [[], Validators.required],
      image : []
    })

  }


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
    return this.editCourseForm.valid;
  }


  getImage(event:any){
    this.imageFile = event.target.files[0];
  }


  close(){
    this.dialogRef.close();
  }


  update(){

    const fd = new FormData();
    fd.append('Id', this.data.id);
    fd.append('Name', this.editCourseForm.get('title')?.value);
    fd.append('Description', this.editCourseForm.controls['description'].value);
    fd.append('CategoryId', this.editCourseForm.controls['category'].value);
    fd.append('TagsIds', this.editCourseForm.controls['tags'].value);
    if (this.imageFile) {
      fd.append('File', this.imageFile, this.imageFile.name);
      this.imageFile = null;
    }

    this.CourseOverviewServ.updateCourseInfo(fd).subscribe({
      next : res => {
        this.dialogRef.close();
        location.assign(`/coursePage/${res}`);
      },
      error : err => console.log(err)
    });

  }

}
