import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {
  
  @Input() postId: number = 0;
  @Input() imgSrc: string = "Img path not found";
  @Input() title: string = "Title not found";
  @Input() body: string = "Body not found";
  @Input() excerpt: string = this.body.substring(0, 50);

  constructor() { }

  ngOnInit(): void {
    //console.log(`Post ${this.postId} ${this.title} ${this.excerpt}`);
    this.excerpt = this.excerpt.substring(0, 50);
  }

}
