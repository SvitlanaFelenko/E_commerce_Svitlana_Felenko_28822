import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NEVER, never } from 'rxjs';
import { MainService } from 'src/app/services/main.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
  }

  getProducts(){
    this.mainService.getProducts(this.mainService.productsRequest);
  }
  addToCart(product) {
    this.mainService.cart.push({ product });
    console.log('dodano do koszyka produkt:');
    console.log(product);
  }
}
