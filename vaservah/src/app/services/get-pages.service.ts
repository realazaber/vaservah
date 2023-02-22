import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPagesService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "https://vaservah.azaber.com/wp-json/wp/v2/pages";

  getPageData(pageSlug: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${pageSlug}`);
  }
}
