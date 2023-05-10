// import { Component, ElementRef, ViewChild } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// declare var gapi: any;

// @Component({
//   selector: 'app-root',
//   template: `
//     <input type="file" #fileInput>
//     <button (click)="authenticate()">Sign In with Google</button>
//     <button (click)="upload()">Upload Video</button>
//   `
// })
// export class AppComponent {
//   private CLIENT_ID = '746104989048-ijt1g7tr6prgfelmhj4rg34l6ipe7gsq.apps.googleusercontent.com';
//   private API_KEY = 'YOUR_API_KEY';
//   private DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'];
//   private SCOPES = 'https://www.googleapis.com/auth/youtube.upload';
//   private accessToken: string | null = null;

//   @ViewChild('fileInput') fileInput: ElementRef | null = null;

//   constructor(private http: HttpClient) {}

//   authenticate() {
//     gapi.load('client:auth2', () => {
//       gapi.auth2.init({
//         client_id: this.CLIENT_ID,
//         scope: this.SCOPES
//       }).then(() => {
//         gapi.auth2.getAuthInstance().signIn().then(() => {
//           this.accessToken = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;
//         });
//       });
//     });
//   }

//   async upload() {
//     const file = this.fileInput!.nativeElement.files[0];
//     const reader = new FileReader();
//     reader.readAsArrayBuffer(file);
//     reader.onload = async () => {
//       const metadata = {
//         snippet: {
//           title: 'My Test Video',
//           description: 'This is a test video uploaded from Angular app',
//           tags: ['angular', 'video', 'test']
//         },
//         status: {
//           privacyStatus: 'private'
//         }
//       };
//       const formData = new FormData();
//       formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
//       formData.append('file', new Blob([reader.result as ArrayBuffer], { type: file.type }), file.name);
//       const url = `https://www.googleapis.com/upload/youtube/v3/videos?access_token=${this.accessToken}&part=snippet,status`;
//       await this.http.post(url, formData).toPromise();
//       console.log('Video uploaded successfully!');
//     };
//   }
// }

import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { CreateLessonComponent } from './components/create-lesson/create-lesson.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'khawarizmi-frontend';

  x:any;

  constructor(public dialog: MatDialog) {}

  createCourseDialog() {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = false;

        this.x = this.dialog.open(CreateCourseComponent, dialogConfig);
    }
    openLessonDialog() {
      const LessonDialogRef = this.dialog.open(CreateLessonComponent);
      LessonDialogRef.afterClosed().subscribe(result => {
        console.log('the dialog was closed');
        console.log(result);
        
      })
    }
}
