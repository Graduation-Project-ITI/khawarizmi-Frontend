import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/about/about/about.component';
<<<<<<< HEAD
import { LessonComponent } from './components/lesson/lesson.component';
=======
import { ProfileComponent } from './components/Profile/profile/profile.component';
>>>>>>> Abanoub

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path: 'about', component: AboutComponent},
  {path:"signin",component:SignInComponent},
  {path:"signup",component:RegisterComponent},
<<<<<<< HEAD
  {path:"lesson", component:LessonComponent}
=======
  {path:"profile",component:ProfileComponent},
>>>>>>> Abanoub
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
