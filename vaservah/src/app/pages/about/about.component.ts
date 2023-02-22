import { Component } from '@angular/core';
import { GetPagesService } from 'src/app/services/get-pages.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  aboutPgraph: String = "About content";
  aboutBannerImg: String = "pathtobanner";
  aboutBannerImgAlt: String = "Alt text";

  constructor(private pagesService: GetPagesService) {

  }

  ngOnInit(): void {
    this.pagesService.getPageData('26').subscribe((data) => {
      this.aboutPgraph = data.content.rendered;
      this.aboutBannerImgAlt = data.better_featured_image.alt_text;
      this.aboutBannerImg = data.better_featured_image.media_details.sizes.large.source_url;
    })
  }
}
