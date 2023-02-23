import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Injectable({
  providedIn: 'root'
})
export class SanitizeService {

  constructor(private sanitized: DomSanitizer) { }

  sanitizeVar(oldVar: any): string {
    return this.sanitized.bypassSecurityTrustHtml(oldVar).toString();
  }
}
