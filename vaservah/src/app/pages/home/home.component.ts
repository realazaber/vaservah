import { Component } from '@angular/core';
import { SafeValue } from '@angular/platform-browser';
import { GetPagesService } from 'src/app/services/get-pages.service';
import { SanitizeService } from 'src/app/services/sanitize.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  homePgraph: SafeValue = "Home content";
  homeBannerImg: string = "pathtobanner";
  homeBannerImgAlt: string = "Alt text";

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
