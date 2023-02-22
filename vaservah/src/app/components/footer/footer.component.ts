import { Component, OnInit } from '@angular/core';
import { GetUrlsService } from 'src/app/services/get-urls.service';
import { Link } from 'src/app/interfaces/Link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private urls: GetUrlsService) { }

  links: Link[] = [];

  ngOnInit(): void {
    this.urls.getUrls().subscribe((data) => this.links = data);
  }

}
