import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// @ts-ignore
import {Content} from "../Shared/Modules/content";
// @ts-ignore
import { contentList} from '../Shared/content-mockdata';

@Injectable({
  providedIn: 'root'
})
export class ContentListService {
  private contents: Content[] = contentList;

  constructor() { }

  // Method to retrieve content by ID
  getContentById(contentId: number): Observable<Content | undefined> {
    const content = this.contents.find(item => item.id === contentId);
    return of(content);
  }
}
