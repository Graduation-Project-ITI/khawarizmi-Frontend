import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//Components
import { AppComponent } from './app.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home/home.component';
import { ProfileComponent } from './Components/Profile/profile/profile.component';

//Angular Material Modules
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CreateLessonComponent } from './components/create-lesson/create-lesson.component';
import { LessonComponent } from './Components/lesson/lesson.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
//storage
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ToastrModule } from 'ngx-toastr';
import { CoursesComponent } from './components/courses/courses.component';
import { LessonService } from './Services/lesson.service';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselTopCourseComponent } from './components/carousel-top-course/carousel-top-course.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';



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
    ProfileComponent,
    CoursesComponent

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
    CarouselModule ,
    MatSnackBarModule,
    SweetAlert2Module,
    NgxWebstorageModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [LessonService],
  bootstrap: [AppComponent],
  //entryComponents: [CreateCourseComponent]
})
export class AppModule { }
