import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { GetPostsService } from 'src/app/services/get-posts.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/Post';
import { SanitizeService } from 'src/app/services/sanitize.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostsComponent implements OnInit {

  tmpPosts: any[] = [];
  posts: Post[] = [];
  @Input() postLimit: number = 15;

  constructor(private postsData: GetPostsService, private sanitizer: SanitizeService, private meta: Meta) { }

  ngOnInit(): void {
    this.postsData.getPosts(this.postLimit).subscribe((data) => {
      this.tmpPosts = data;
      this.tmpPosts.forEach(element => {
        this.posts.push(new Post(element.id, element.title.rendered, element.content.rendered, element.featured_media_src_url, element.slug, element.link));
      });
    });


    this.meta.updateTag({ name: 'title', content: 'Vaservah Blog' });
    this.meta.updateTag({ name: 'description', content: 'Vaservah Blog Posts' });
    this.meta.updateTag({ property: 'og:title', content: 'Vaservah Blog' });
    this.meta.updateTag({ property: 'og:description', content: 'Vaservah Blog Posts' });
    this.meta.updateTag({ property: 'og:image', content: "/favicon.ico" });

  }
}
