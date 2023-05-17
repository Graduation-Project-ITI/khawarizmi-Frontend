import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register.component';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home/home.component';
import { ProfileComponent } from './components/Profile/profile/profile.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';
import { CoursePageComponent } from './components/course-page/course-page.component';

//Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ToastrModule } from 'ngx-toastr';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CreateLessonComponent } from './components/create-lesson/create-lesson.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { CommonModule } from '@angular/common';
import { EditLessonTitleComponent } from './components/edit-lesson-title/edit-lesson-title.component';
import { ChangeLessonVideoComponent } from './components/change-lesson-video/change-lesson-video.component';
import { QuillModule } from 'ngx-quill';
import { CarouselTopCourseComponent } from './components/carousel-top-course/carousel-top-course.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CoursesComponent } from './components/courses/courses.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FeedbackDialogComponent } from './components/feedback-dialog/feedback-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SignInComponent,
    CreateCourseComponent,
    CreateLessonComponent,
    NavBarComponent,
    HomeComponent,
    CarouselTopCourseComponent,
    FooterComponent,
    CreateLessonComponent,
    LessonComponent,
    CourseOverviewComponent,
    CoursePageComponent,
    EditCourseComponent,
    EditLessonTitleComponent,
    ChangeLessonVideoComponent,
    ProfileComponent,
    CoursesComponent,
    FeedbackDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    CommonModule,
    CarouselModule,
    SweetAlert2Module,
    QuillModule.forRoot(),
    NgxWebstorageModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
