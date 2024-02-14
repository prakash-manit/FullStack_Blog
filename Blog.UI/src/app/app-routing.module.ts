import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPostListComponent } from './admin/admin-post/admin-postlist.component';
import { AdminPostViewComponent } from './admin/admin-post-view/admin-post-view.component';
import { AdminPostAddComponent } from './admin/admin-post-add/admin-post-add.component';
import { PostlistComponent } from './postlist/postslist.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    component:PostlistComponent
  },
  {
    path: 'post/:id',
    component:PostComponent
  },
  {
    path: 'admin/post',
    component: AdminPostListComponent
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
