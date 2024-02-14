import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostUpdate } from 'src/app/model/post-update.model';
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-admin-post-view',
  templateUrl: './admin-post-view.component.html',
  styleUrls: ['./admin-post-view.component.scss']
})
export class AdminPostViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postService: PostService, public router: Router) { }
  post: Post | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');

        if (id)
        {
            this.postService.getPostById(id)
            .subscribe(
              response => {
                this.post = response;
              }
            )
        }
      }
    );
  }

  onSubmit(): void {
    const postUpdate: PostUpdate = {
      title: this.post?.title,
      content: this.post?.content,
      summary: this.post?.summary,
      urlHandle: this.post?.urlHandle,
      featuredImageUrl: this.post?.featuredImageUrl,
      isVisible: this.post?.isVisible,
      updatedDate:this.post?.updatedDate
    }

    this.postService.updatePost(this.post?.id, postUpdate)
    .subscribe(
      response => {
        alert('Success');
        this.router.navigate(['admin/post']);
      }
    )
  }

  deletePost(): void {
    this.postService.deletePost(this.post?.id)
    .subscribe(
      response => {
        alert('Deleted successfully');
        this.router.navigate(['admin/post']);
      }
    );
  }
}
