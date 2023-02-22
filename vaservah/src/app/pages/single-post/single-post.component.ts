import { formatNumber, NumberFormatStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/Post';
import { GetPostsService } from 'src/app/services/get-posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postsData: GetPostsService) { }

  post: Post = new Post(0, "title", "body", "teaser", "postPath", "wpPostPath");
  postId: number = 0;
  strPostId: any = "";

  ngOnInit(): void {
    this.strPostId = this.route.snapshot.paramMap.get("id");
    this.postId = +this.strPostId;

    this.postsData.getPost(this.postId).subscribe((data) => {
        this.post.id = data.id;
        this.post.title = data.title.rendered;
        this.post.body = data.content.rendered;
        this.post.teaserPath = data.featured_media_src_url;
        this.post.postPath = data.slug;
        this.post.wpPostPath = data.link;

        let newPost = new Post(data.id, data.title.rendered, data.content.rendered, data.featured_media_src_url, data.slug, data.link);
        this.post = newPost;
    })
  }

}
