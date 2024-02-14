import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPostListComponent } from './admin/admin-post/admin-postlist.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminPostViewComponent } from './admin/admin-post-view/admin-post-view.component';
import { FormsModule } from '@angular/forms';
import { AdminPostAddComponent } from './admin/admin-post-add/admin-post-add.component';
import { PostlistComponent } from './postlist/postslist.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPostListComponent,
    AdminPostViewComponent,
    AdminPostAddComponent,
    PostlistComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
