import { Component, OnInit } from '@angular/core';

import { BalanceService } from '../balance/balance.service';

@Component({
  selector: 'app-insert-coin',
  templateUrl: './insert-coin.component.html',
  styleUrls: ['./insert-coin.component.css']
})
export class InsertCoinComponent implements OnInit {

	coinBalance :number = 0;

  constructor( private balanceService :BalanceService ) { }

  ngOnInit() {
  	this.balanceService.onBalanceUpdated((balance)=> {
  		this.coinBalance = balance;
  	});
  }

  addBalance(amount :number) {
  	this.balanceService.addBalance(amount);
  }
}
