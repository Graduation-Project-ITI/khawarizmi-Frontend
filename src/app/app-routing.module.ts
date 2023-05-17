import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilecoursesComponent } from './components/Profile/profilecourses/profilecourses.component';
import { LocalStorageService } from 'ngx-webstorage';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/about/about/about.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { ProfileComponent } from './components/Profile/profile/profile.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { CoursesComponent } from './components/courses/courses.component';
import { MyLearingComponent } from './components/my-learing/my-learing.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:"signin",component:SignInComponent},
  {path:"signup",component:RegisterComponent},
  {path:"lesson", component:LessonComponent},
  {path:"personal",component:ProfileComponent},
  {path:"Mylearning",component:MyLearingComponent},
  {path:"pcourses",component:ProfilecoursesComponent},
  {path:"lesson",component:LessonComponent},
  {path:"profile",component:ProfileComponent},
  {path:"coursePage/:courseId",component:CoursePageComponent},
  {path:"courseOverview/:id",component:CourseOverviewComponent},
  {path:"Mylearning",component:MyLearingComponent},
  {path:"personal",component:ProfileComponent},
  {path:"courses",component:CoursesComponent},
  {path:"signup",component:RegisterComponent},
  {path:"coursePage/:courseId",component:CoursePageComponent,children:[
                                                                      {path:"courseOverview", component:CourseOverviewComponent}
                                                                      ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
