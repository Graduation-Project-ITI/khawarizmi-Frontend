import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//Components
import { AppComponent } from './app.component';
import { CreateCourseComponent } from './Components/create-course/create-course.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { RegisterComponent } from './Components/register/register.component';
import { NavBarComponent } from './Components/nav/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home/home.component';
import { ProfileComponent } from './Components/Profile/profile/profile.component';

//Angular Material Modules
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CarouselTopCourseComponent } from './Components/carousel-top-course/carousel-top-course.component';
import { FooterComponent } from './Components/footer/footer.component';
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
import { MyLearingComponent } from './Components/my-learing/my-learing.component';
import { LessonService } from './Services/lesson.service';
import { CoursesComponent } from './components/courses/courses.component';



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
    MyLearingComponent,
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
