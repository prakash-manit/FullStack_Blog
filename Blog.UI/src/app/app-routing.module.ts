import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPostComponent } from './admin/admin-post/admin-post.component';
import { AdminPostViewComponent } from './admin/admin-post-view/admin-post-view.component';
import { AdminPostAddComponent } from './admin/admin-post-add/admin-post-add.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    component:PostsComponent
  },
  {
    path: 'post/:id',
    component:PostComponent
  },
  {
    path: 'admin/post',
    component: AdminPostComponent
  },
  {
    path: 'admin/post/add',
    component: AdminPostAddComponent
  },
  {
    path: 'admin/post/:id',
    component: AdminPostViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
