import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Album } from 'app/album';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo: Album;
    // private instance of that product service
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    // make a call to the getAlbum in the product service
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
