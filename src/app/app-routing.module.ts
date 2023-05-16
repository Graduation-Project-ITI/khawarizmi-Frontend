import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/about/about/about.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { ProfileComponent } from './components/Profile/profile/profile.component';
import { ProfilecoursesComponent } from './components/Profile/profilecourses/profilecourses.component';
import { LocalStorageService } from 'ngx-webstorage';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path: 'about', component: AboutComponent},
  {path:"signin",component:SignInComponent},
  {path:"signup",component:RegisterComponent},
  {path:"lesson", component:LessonComponent},
  {path:"personal",component:ProfileComponent},
  {path:"pcourses",component:ProfilecoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
