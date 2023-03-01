import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Link } from '../interfaces/Link';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUrlsService {

  links: Link[] = [];

  constructor(private http: HttpClient) { }

   getUrls(): Observable<Link[]> {
     return this.http.get<Link[]>("/assets/libs/urls.json");    
   }


}
