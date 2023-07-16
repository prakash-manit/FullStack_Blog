import { Component, OnInit } from '@angular/core';
import { PostAdd } from 'src/app/model/post-add.model';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-admin-post-add',
  templateUrl: './admin-post-add.component.html',
  styleUrls: ['./admin-post-add.component.scss']
})
export class AdminPostAddComponent implements OnInit {

  constructor(private postService: PostService) { }

  post: PostAdd = {
    title: '',
    content: '',
    summary: '',
    urlHandle: '',
    featuredImageUrl: '',
    isVisible: true,
    authorName:''
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.postService.addPost(this.post)
    .subscribe(
      response => 
      {
        alert('Added successfully');
      }
    )
  }

}
