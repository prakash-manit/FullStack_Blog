import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postService:PostService) { }

  posts: Post[] = [];

  ngOnInit(): void {
    this.postService.getAllPosts()
    .subscribe(
      response => {
        this.posts = response;
       
        }
      );
  }

}





