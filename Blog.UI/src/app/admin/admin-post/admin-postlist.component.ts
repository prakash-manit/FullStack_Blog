import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-postlist.component.html',
  styleUrls: ['./admin-postlist.component.scss']
})
export class AdminPostListComponent implements OnInit {

  constructor(private postService: PostService) { }

  postlist: Post[] = [];

  ngOnInit(): void {
    this.postService.getPostList()
    .subscribe(
      response => {
        this.postlist = response;
      }
    );
  }

}
