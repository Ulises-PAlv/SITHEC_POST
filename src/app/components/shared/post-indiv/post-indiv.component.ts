import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JSONPlaceholderApiService } from 'src/app/services/jsonplaceholder-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-indiv',
  templateUrl: './post-indiv.component.html',
  styleUrls: ['./post-indiv.component.css']
})
export class PostIndivComponent implements OnInit {
comments: any = [];
commentsBand: boolean = false;
users: any = [];

error: boolean = false;
errorMsj: string = '';
nameAlert: string = '';

@Input() PadrePost: any = {};
@Output() selectedPost: EventEmitter<number>;

  constructor(private apiService: JSONPlaceholderApiService, private _router: Router) {
    this.selectedPost = new EventEmitter();

    this.apiService.getUserList().subscribe((data:any) => {
      this.users = data;
    }, (errorService) => {
      this.error = true;
      this.errorMsj = errorService.error.error.message;
    });
  }

  seeComments(id: any) {
    if(this.commentsBand === false) {
      this.commentsBand = true;

      this.apiService.getComments(id).subscribe((data: any) => {
        this.comments = data;
        console.log(this.comments);
        
      }, (errorService) => {
        this.error = true;
        this.errorMsj = errorService.error.error.message;
      });
    } else {
      this.commentsBand = false;
    }
  }

  goToUsr(id: any) {
    this._router.navigate(['/user', id]);
  }

  ngOnInit(): void {
  }

}
