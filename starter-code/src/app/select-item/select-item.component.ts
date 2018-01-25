import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.css']
})
export class SelectItemComponent implements OnInit {

	thisItem :any;

  constructor( private itemService :ItemService ) { }

  ngOnInit() {
  }

  setSelectedItem(item) {
  	this.itemService.setSelectedItem(item);
  	this.thisItem = this.itemService.getSelectedItem();
  }
}
