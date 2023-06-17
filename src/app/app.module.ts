import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';


//Components


//Angular Material Modules
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CreateLessonComponent } from './components/create-lesson/create-lesson.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

//storage
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { CommonModule } from '@angular/common';
import { EditLessonTitleComponent } from './components/edit-lesson-title/edit-lesson-title.component';
import { ChangeLessonVideoComponent } from './components/change-lesson-video/change-lesson-video.component';
import { QuillModule } from 'ngx-quill';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ToastrModule } from 'ngx-toastr';
import { LessonService } from './services/LessonService/lesson.service';
import { MyLearingComponent } from './components/my-learing/my-learing.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home/home.component';
import { CarouselTopCourseComponent } from './components/carousel-top-course/carousel-top-course.component';
import { FooterComponent } from './components/footer/footer.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { ProfileComponent } from './components/Profile/profile/profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { FeedbackDialogComponent } from './components/feedback-dialog/feedback-dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchCoursesComponent } from './components/search-courses/search-courses.component';
import { ConfirmDeletionDialogComponent } from './components/confirm-deletion-dialog/confirm-deletion-dialog.component';
import { TopVotesComponent } from './components/top-votes/top-votes.component';

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
    LessonComponent,
    CourseOverviewComponent,
    CoursePageComponent,
    EditLessonTitleComponent,
    ChangeLessonVideoComponent,
    ProfileComponent,
    CoursesComponent,
    MyLearingComponent,
    CoursesComponent,
    EditCourseComponent,
    FeedbackDialogComponent,
    SearchCoursesComponent,
    ConfirmDeletionDialogComponent,
    TopVotesComponent,
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
    RouterModule,
    NgxPaginationModule

  ],
  providers: [LessonService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
