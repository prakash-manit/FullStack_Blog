import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../model/post.model';
import { Observable } from 'rxjs';
import { PostUpdate } from '../model/post-update.model';
import { PostAdd } from '../model/post-add.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  apiBaseUrl = environment.apiBaseUrl;


  getPostList(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiBaseUrl + 'api/post');
  }

  getPostById(id: string): Observable<Post>{
    return this.http.get<Post>(this.apiBaseUrl + 'api/post/' + id);
  }

  updatePost(id: string | undefined, postUpdate: PostUpdate): Observable<Post>{
    return this.http.put<Post>(this.apiBaseUrl + 'api/post/' + id, postUpdate);
  }

  addPost(addPost: PostAdd): Observable<Post> {
    return this.http.post<Post>(this.apiBaseUrl + 'api/post', addPost);
  }

  deletePost(id: string | undefined): Observable<Post>{
    return this.http.delete<Post>(this.apiBaseUrl + 'api/post/' + id);
  }
}
