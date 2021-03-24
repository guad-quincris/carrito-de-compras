import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsServivce: ProductsService
  ) { }

  ngOnInit(): void {
    this.listProducts();
  }

  clickProduct(id: number){
    console.log('product');
    console.log(id);
  }
  listProducts(){
    this.productsServivce.getAllProducts().subscribe(products => {
      // console.log(products);
      this.products = products;

    });
  }

}
