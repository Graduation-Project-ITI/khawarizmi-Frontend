import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilecoursesComponent } from './components/Profile/profilecourses/profilecourses.component';
import { LocalStorageService } from 'ngx-webstorage';

import { AboutComponent } from './components/about/about/about.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ProfileComponent } from './components/Profile/profile/profile.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { RegisterComponent } from './components/register/register.component';

import { MyLearingComponent } from './components/my-learing/my-learing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'pcourses', component: ProfilecoursesComponent },
  { path: 'lesson', component: LessonComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'courseOverview/:id', component: CourseOverviewComponent },
  { path: 'mylearning', component: MyLearingComponent },
  { path: 'personal', component: ProfileComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'signup', component: RegisterComponent },
  {
    path: 'coursePage/:courseId',
    component: CoursePageComponent,
    children: [
      { path: 'courseOverview', component: CourseOverviewComponent },
      { path: 'lesson/:id', component: LessonComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
