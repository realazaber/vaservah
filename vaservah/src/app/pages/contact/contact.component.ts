import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'title', content: 'Vaservah Blog' });
    this.meta.updateTag({ name: 'description', content: 'Vaservah Blog Contact' });
    this.meta.updateTag({ property: 'og:title', content: 'Vaservah Blog' });
    this.meta.updateTag({ property: 'og:description', content: 'Vaservah Blog Contact' });
    this.meta.updateTag({ property: 'og:image', content: "/favicon.ico" });

  }
}
