import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about/about.component';

import { ProfilecoursesComponent } from './components/Profile/profilecourses/profilecourses.component';
import { LocalStorageService } from 'ngx-webstorage';
import { HomeComponent } from './Components/home/home/home.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { ProfileComponent } from './Components/Profile/profile/profile.component';
import { LessonComponent } from './Components/lesson/lesson.component';
import { RegisterComponent } from './Components/register/register.component';
import { MyLearingComponent } from './components/my-learing/my-learing.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path: 'about', component: AboutComponent},
  {path:"signin",component:SignInComponent},
  {path:"signup",component:RegisterComponent},
  {path:"lesson", component:LessonComponent},
  {path:"personal",component:ProfileComponent},
  {path:"Mylearning",component:MyLearingComponent},
  {path:"pcourses",component:ProfilecoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
