import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/about/about/about.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { ProfileComponent } from './components/Profile/profile/profile.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';
import { CoursePageComponent } from './components/course-page/course-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:"signin",component:SignInComponent},
  {path:"lesson",component:LessonComponent},
  {path:"profile",component:ProfileComponent},
  {path:"signup",component:RegisterComponent},
  {path:"coursePage/:courseId",component:CoursePageComponent,children:[
                                                                      {path:"courseOverview", component:CourseOverviewComponent}
                                                                      ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
