import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilecoursesComponent } from './components/Profile/profilecourses/profilecourses.component';
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
import { SearchCoursesComponent } from './components/search-courses/search-courses.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'personal', component: ProfileComponent },
  { path: 'Mylearning', component: MyLearingComponent },
  { path: 'pcourses', component: ProfilecoursesComponent },
  { path: 'lesson', component: LessonComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'coursePage/:courseId', component: CoursePageComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'SearchCourses', component: SearchCoursesComponent },
  {
    path: 'coursePage/:courseId',
    component: CoursePageComponent,
    children: [
      { path: '', component: CourseOverviewComponent },
      { path: 'courseOverview', component: CourseOverviewComponent },
      { path: 'lesson/:id', component: LessonComponent },
    ],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
