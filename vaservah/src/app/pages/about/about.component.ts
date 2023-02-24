import { Component } from '@angular/core';
import { SafeValue } from '@angular/platform-browser';
import { GetPagesService } from 'src/app/services/get-pages.service';
import { SanitizeService } from 'src/app/services/sanitize.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  aboutPgraph: SafeValue = "About content";
  aboutBannerImg: String = "pathtobanner";
  aboutBannerImgAlt: String = "Alt text";

  constructor(private pagesService: GetPagesService, private sanitizer: SanitizeService) {

  }

  ngOnInit(): void {
    this.pagesService.getPageData('26').subscribe((data) => {
      this.aboutBannerImgAlt = data.better_featured_image.alt_text;
      this.aboutBannerImg = data.better_featured_image.media_details.sizes.large.source_url;
      this.aboutPgraph = this.sanitizer.sanitizeVar(data.content.rendered);
    })
  }
}
