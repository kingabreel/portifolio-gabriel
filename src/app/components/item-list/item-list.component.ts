import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  @Input()
  listItem1:string=""
  @Input()
  listItem2:string=""
  @Input()
  listItem3:string=""

}
