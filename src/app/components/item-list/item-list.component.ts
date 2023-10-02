import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css', 'item-list-responsive.component.css']
})
export class ItemListComponent {
  @Input()
  listItem1:string=""
  @Input()
  listItem2:string=""
  @Input()
  listItem3:string=""

  public modifyListItem2() {
    if (this.listItem2 === "Certificações") {
      this.listItem2 = "certificados";
    }
  }
}
