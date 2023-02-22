import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../interfaces/Post';

@Injectable({
  providedIn: 'root'
})
export class GetPostsService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "https://vaservah.azaber.com/wp-json/wp/v2/posts";

  getPosts(postLimit: Number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/?limit=${postLimit}`);
  }

  getPost(postId: Number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${postId}`);
  }
}
