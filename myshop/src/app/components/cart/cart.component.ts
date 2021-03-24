import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
  }
  getCartPrice() {
    let price = 0;
    for (const objekt of this.mainService.cart) {
      price += parseFloat(objekt.product.price);
    }
    return price;
  }

}
