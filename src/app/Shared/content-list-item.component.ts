import { Component, Input}  from "@angular/core";
// @ts-ignore
import {Content} from '../Shared/Modules/content';

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  templateUrl: './content-list-item-component.html',
  styleUrls: ['./content-list-item-component.css']
})
export class ContentListItemComponent {
  @Input() content?: Content;
}
