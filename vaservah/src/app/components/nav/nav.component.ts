import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/interfaces/Link';
import { GetUrlsService } from 'src/app/services/get-urls.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private urls: GetUrlsService) { }

  links: Link[] = [];

  ngOnInit(): void {
    this.urls.getUrls().subscribe((data) => this.links = data);
  }

}
