import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

	items;

  constructor( private itemService :ItemService ) { }

  ngOnInit() {
  	this.itemService.onItemsRetrieved((items)=> {
  		this.items = items;
  	});
  }

}
