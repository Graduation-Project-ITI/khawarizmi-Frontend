import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseOverviewService } from 'src/app/services/course-overview.service';
import { FeedbackDialogComponent } from '../feedback-dialog/feedback-dialog.component';
import { CourseDataService } from 'src/app/services/CourseDataService/course-data.service';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css'],
})
export class CourseOverviewComponent implements OnInit {
  course: any = null;
  totalVotesCount: any;
  netVotes: any;
  isVoted: boolean = false;
  isUpVoted: any;
  learning: any;
  bookmarked: any;
  userIsPublisher: boolean | null = null;
  feedbacks : any[] = [];

  constructor(
    public CourseOverviewServ: CourseOverviewService,
    private dialog: MatDialog,
    private dataService: CourseDataService
  ) {}

  ngOnInit(): void {
    // get data from service
    console.log('course overview');
    this.course = this.dataService.courseData;
    this.feedbacks = this.course.feedbacks;
    console.log('feedbacks from api',this.feedbacks)
    this.userIsPublisher = this.dataService.userIsPublisher;
    this.totalVotesCount = this.course.upVotes + this.course.downVotes;
    this.netVotes = this.course.upVotes - this.course.downVotes;

    // to tell if this user bookmarked or learning this course
    this.course.courseUsers.forEach((c: any) => {
      if (c.userId == localStorage.getItem('userId')) {
        this.learning = c.isLearning;
        this.bookmarked = c.isBookmarked;
        if (c.isVoted) {
          this.isVoted = c.isVoted
          this.isUpVoted = c.isUpVoted;
        }
      }
    });
    console.log('user voted', this.isVoted);
    console.log('user up voted', this.isUpVoted);

  }

  publish() {
    var data = {
      CourseId: this.course.id,
      UserId: localStorage.getItem('userId'),
      Boolean: true,
    };
    this.CourseOverviewServ.updateCoursePublish(data).subscribe({
      next: (res) => (this.course.isPublished = true),
      error: (err) => console.log(err),
    });
  }

  draft() {
    var data = {
      CourseId: this.course.id,
      UserId: localStorage.getItem('userId'),
      Boolean: false,
    };
    this.CourseOverviewServ.updateCoursePublish(data).subscribe({
      next: (res) => (this.course.isPublished = false),
      error: (err) => console.log(err),
    });
  }

  addbookmark() {
    var data = {
      CourseId: this.course.id,
      UserId: localStorage.getItem('userId'),
      Boolean: true,
    };
    this.CourseOverviewServ.updatehUserCourseBookmark(data).subscribe({
      next: (res) => (this.bookmarked = true),
      error: (err) => console.log(err),
    });
  }

  removebookmark() {
    var data = {
      CourseId: this.course.id,
      UserId: localStorage.getItem('userId'),
      Boolean: false,
    };
    this.CourseOverviewServ.updatehUserCourseBookmark(data).subscribe({
      next: (res) => (this.bookmarked = false),
      error: (err) => console.log(err),
    });
  }

  addlearn() {
    var data = {
      CourseId: this.course.id,
      UserId: localStorage.getItem('userId'),
      Boolean: true,
    };
    this.CourseOverviewServ.updatehUserCourseLearn(data).subscribe({
      next: (res) => (this.learning = true),
      error: (err) => console.log(err),
    });
  }

  removelearn() {
    var data = {
      CourseId: this.course.id,
      UserId: localStorage.getItem('userId'),
      Boolean: false,
    };
    this.CourseOverviewServ.updatehUserCourseLearn(data).subscribe({
      next: (res) => (this.learning = false),
      error: (err) => console.log(err),
    });
  }

  upVote() {
    var data = {
      CourseId: this.course.id,
      UserId: localStorage.getItem('userId'),
      Boolean: true,
    };
    if(this.isUpVoted) return console.log('already up voted')
    this.CourseOverviewServ.updatehUserCourseVote(data).subscribe({
      next: (res) => {
        // if user down voted
        if (this.isVoted)
        {
          this.isUpVoted = true;
          this.netVotes += 2;
        }
        else {
          // if not voted yet
          this.totalVotesCount++;
          this.netVotes++;
          this.isVoted = true;
          this.isUpVoted = true;
        }
      },
      error: (err) => console.log(err),
    });
  }

  downVote() {
    var data = {
      CourseId: this.course.id,
      UserId: localStorage.getItem('userId'),
      Boolean: false,
    };
    if(this.isVoted && !this.isUpVoted) return console.log('already down voted');

    this.CourseOverviewServ.updatehUserCourseVote(data).subscribe({
      next: (res) => {
        // if user upvoted voted
        if (this.isVoted)
        {
          this.netVotes -= 2;
          this.isUpVoted = false;
        }
        else {
          // if not voted yet
          this.netVotes--;
          this.totalVotesCount++;
          this.isVoted = true;
          this.isUpVoted = false;
        }
      },
      error: (err) => console.log(err),
    });
  }

  feedbackDialog(courseId: any) {
    const dialogRef = this.dialog.open(FeedbackDialogComponent, { data: { courseId } });
    dialogRef.afterClosed().subscribe({
      next: fed => {
        console.log('curr feedback',fed);

        let flag = true;
        const x ={ courseId:this.course.id, userId:localStorage.getItem('userId'), body:fed }
        console.log(x)
        if(fed){
          this.feedbacks.forEach((ele:any) => {
              if(ele.userId == localStorage.getItem('userId')){
                flag = false;
                ele.body = fed;
              }
            })

          if(flag){
            this.feedbacks.push(x);
          }
        }

      },
      error: err => console.log(err)

    })
  }
}
