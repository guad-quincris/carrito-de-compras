import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      const id = params.id;
      this.listProduct(id);
      // this.product = this.productsService.getProduct(id);

    });
    }
    listProduct(id: string){
      this.productsService.getProduct(id).subscribe(product =>{
        console.log(product);
        this.product = product;
      });
    }

}
