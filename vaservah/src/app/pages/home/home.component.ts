import { Component } from '@angular/core';
import { GetPagesService } from 'src/app/services/get-pages.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  homePgraph: String = "Home content";
  homeBannerImg: String = "pathtobanner";
  homeBannerImgAlt: String = "Alt text";

  constructor(private pagesService: GetPagesService) {

  }

  ngOnInit(): void {
    this.pagesService.getPageData('24').subscribe((data) => {
      this.homePgraph = data.content.rendered;
      this.homeBannerImgAlt = data.better_featured_image.alt_text;
      this.homeBannerImg = data.better_featured_image.media_details.sizes.large.source_url;
    })
  }
  
}
