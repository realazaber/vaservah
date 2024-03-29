import { Component } from '@angular/core';
import { Meta, SafeValue } from '@angular/platform-browser';
import { GetPagesService } from 'src/app/services/get-pages.service';
import { SanitizeService } from 'src/app/services/sanitize.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  aboutPgraph: string = "About content";
  aboutBannerImg: string = "pathtobanner";
  aboutBannerImgAlt: string = "Alt text";

  constructor(private pagesService: GetPagesService, private meta: Meta) {

  }

  ngOnInit(): void {
    this.pagesService.getPageData('26').subscribe((data) => {
      this.aboutBannerImgAlt = data.better_featured_image.alt_text;
      this.aboutBannerImg = data.better_featured_image.media_details.sizes.large.source_url;
      this.aboutPgraph = data.content.rendered;


      this.meta.updateTag({ name: 'title', content: 'Vaservah Blog' });
      this.meta.updateTag({ name: 'description', content: this.aboutPgraph.toString() });
      this.meta.updateTag({ property: 'og:title', content: 'Vaservah Blog' });
      this.meta.updateTag({ property: 'og:description', content: this.aboutPgraph.toString() });
      this.meta.updateTag({ property: 'og:image', content: this.aboutBannerImg.toString() });
    })
  }
}
