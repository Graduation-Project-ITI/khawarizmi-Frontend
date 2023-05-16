import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home/home.component';
import { AboutComponent } from './Components/about/about/about.component';
import { LessonComponent } from './Components/lesson/lesson.component';
import { ProfileComponent } from './Components/Profile/profile/profile.component';
import { MyLearingComponent } from './Components/my-learing/my-learing.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path: 'about', component: AboutComponent},
  {path:"signin",component:SignInComponent},
  {path:"signup",component:RegisterComponent},
  {path:"lesson", component:LessonComponent},
  {path:"profile",component:ProfileComponent},
  {path:"Mylearning",component:MyLearingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
