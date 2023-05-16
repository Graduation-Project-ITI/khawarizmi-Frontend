import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLearingComponent } from './Components/my-learing/my-learing.component';
import { ProfileComponent } from './Components/Profile/profile/profile.component';
import { RegisterComponent } from './Components/register/register.component';
import { LessonComponent } from './Components/lesson/lesson.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { AboutComponent } from './components/about/about/about.component';
import { HomeComponent } from './Components/home/home/home.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path: 'about', component: AboutComponent},
  {path:"signin",component:SignInComponent},
  {path:"signup",component:RegisterComponent},
  {path:"lesson", component:LessonComponent},
  {path:"personal",component:ProfileComponent},
  {path:"Mylearning",component:MyLearingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
