import { Component } from '@angular/core';
import { SafeValue } from '@angular/platform-browser';
import { GetPagesService } from 'src/app/services/get-pages.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  homePgraph: SafeValue = "Home content";
  homeBannerImg: string = "pathtobanner";
  homeBannerImgAlt: string = "Alt text";

  constructor(private pagesService: GetPagesService, private meta: Meta) {

  }

  ngOnInit(): void {
    this.pagesService.getPageData('24').subscribe((data) => {
      this.homePgraph = data.content.rendered;
      this.homeBannerImgAlt = data.better_featured_image.alt_text;
      this.homeBannerImg = data.better_featured_image.media_details.sizes.large.source_url;

      this.meta.updateTag({ name: 'title', content: 'Vaservah Blog' });
      this.meta.updateTag({ name: 'description', content: this.homePgraph.toString() });
      this.meta.updateTag({ property: 'og:title', content: 'Vaservah Blog' });
      this.meta.updateTag({ property: 'og:description', content: this.homePgraph.toString() });
      this.meta.updateTag({ property: 'og:image', content: this.homeBannerImg.toString() });

    })
  }

}
