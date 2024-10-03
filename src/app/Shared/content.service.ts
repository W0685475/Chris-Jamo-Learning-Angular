import {Injectable} from "@angular/core";
// @ts-ignore
import { Content } from "@angular/compiler";
import {Observable, of} from "rxjs";
// @ts-ignore
import {contentList} from "../Shared/content-mockdata";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private contentList: Content[] = contentList;

  getContentById(contentId: number): Observable<Content | undefined> {
    const content = this.contentList.find(item => item.id === contentId);
    return of(content);
  }
}
