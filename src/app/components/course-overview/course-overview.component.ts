import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseOverviewService } from 'src/app/services/course-overview.service';
import { FeedbackDialogComponent } from '../feedback-dialog/feedback-dialog.component';


@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css']
})
export class CourseOverviewComponent implements OnInit {

  course:any = null;
  totalVotesCount:any;
  netVotes:any;
  userVote:any;
  learning:any;
  bookmarked:any;

  @Input() courseFromCoursePage:any = "";
  @Input() UserIsPublisher:any = "";

  constructor (private CourseOverviewServ:CourseOverviewService, private dialog: MatDialog) {

  }

  ngOnInit(): void {

    this.course = this.courseFromCoursePage;
    console.log(this.course);

    let Votes = this.course.courseUsers.filter( (cu:any) => cu.isVoted);
    this.totalVotesCount = Votes.length;

    let upVotes = Votes.filter( (v:any) => v.isUpVoted);
    let up = upVotes.length;
    let down = this.totalVotesCount - up;

    this.netVotes = up - down;

    this.course.courseUsers.forEach( (c:any) => {
      if(c.userId == localStorage.getItem("userId")) {
        this.learning = c.isLearning;
        this.bookmarked = c.isBookmarked;
        if(c.isVoted) this.userVote = c.isUpVoted;
      }
    });

  }


  publish(){
    var data = {CourseId:this.course.id, UserId:localStorage.getItem("userId"), Boolean:true}
    this.CourseOverviewServ.updateCoursePublish(data).subscribe();
    location.reload();
  }

  draft(){
    var data = {CourseId:this.course.id, UserId:localStorage.getItem("userId"), Boolean:false}
    this.CourseOverviewServ.updateCoursePublish(data).subscribe();
    location.reload();
  }

  addbookmark(){
    var data = {CourseId:this.course.id, UserId:localStorage.getItem("userId"), Boolean:true}
    this.CourseOverviewServ.updatehUserCourseBookmark(data).subscribe();
    location.reload();
  }

  removebookmark(){
    var data = {CourseId:this.course.id, UserId:localStorage.getItem("userId"), Boolean:false}
    this.CourseOverviewServ.updatehUserCourseBookmark(data).subscribe();
    location.reload();
  }

  addlearn(){
    var data = {CourseId:this.course.id, UserId:localStorage.getItem("userId"), Boolean:true}
    this.CourseOverviewServ.updatehUserCourseLearn(data).subscribe();
    location.reload();
  }

  removelearn(){
    var data = {CourseId:this.course.id, UserId:localStorage.getItem("userId"), Boolean:false}
    this.CourseOverviewServ.updatehUserCourseLearn(data).subscribe();
    location.reload();
  }

  upVote(){
    var data = {CourseId:this.course.id, UserId:localStorage.getItem("userId"), Boolean:true}
    this.CourseOverviewServ.updatehUserCourseVote(data).subscribe();
    location.reload();
  }

  downVote(){
    var data = {CourseId:this.course.id, UserId:localStorage.getItem("userId"), Boolean:false}
    this.CourseOverviewServ.updatehUserCourseVote(data).subscribe();
    location.reload();
  }

  feedbackDialog(courseId:any){
    this.dialog.open(FeedbackDialogComponent, { data:{courseId} })
  }

}
