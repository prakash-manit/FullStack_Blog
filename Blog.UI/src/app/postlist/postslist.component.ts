import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

  constructor(private postService:PostService) { }

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





