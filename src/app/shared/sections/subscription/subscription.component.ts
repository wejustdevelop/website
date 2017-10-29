import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
	isEmailValid:boolean;
	email:string;
	constructor() { }

	ngOnInit() {
	}
	validateEmail(email){
		console.log(email.model);
	}
	subscribe(){

	}
}
