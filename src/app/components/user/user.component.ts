import { Component, OnInit } from '@angular/core';
import { JSONPlaceholderApiService } from 'src/app/services/jsonplaceholder-api.service';
import { ActivatedRoute } from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  users: any = [];
  posts: any = [];
  id: any;

  usrPosts: any = [];
  usr: any;

  error: boolean = false;
  errorMsj: string = '';
  nameAlert: string = '';

  closeModal: string | undefined;
  viewPost: any;

  constructor(private apiService: JSONPlaceholderApiService, private _router: ActivatedRoute,
    private modalService: NgbModal) {
    this.id = Number(this._router.snapshot.params.id);

    this.apiService.getPosts().subscribe((data: any) => {
      this.posts = data;

      this.posts.forEach((post: any) => {
        if (post.userId === this.id) {
          this.usrPosts.push(post);
        }
      });
    }, (errorService) => {
      this.error = true;
      this.errorMsj = errorService.error.error.message;
    });

    this.apiService.getUserList().subscribe((data: any) => {
      this.users = data;
      this.users.forEach((user: any) => {
        if (user.id === this.id) {
          this.usr = user;
        }
      });
    }, (errorService) => {
      this.error = true;
      this.errorMsj = errorService.error.error.message;
    });
  }

    triggerPost(content: any, idPost: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });

    this.usrPosts.forEach((post: any) => {
      if(idPost === post.id) {
        this.viewPost = post.body;
      }
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  }

}

