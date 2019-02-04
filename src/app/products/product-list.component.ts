import { Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import {NgxPaginationModule} from 'ngx-pagination';




@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})



export class ProductListComponent implements OnInit {
    pageTitle: string = 'Listado de Productos'
    imageWidth: number = 50;
    imageMargin: number = 2;
    imageAlign: string = "Center";
    errorMessage: string;
    _listFilter : string;
    _listFilter2 : string;
    p: number = 1;
     get listFilter() : string {
      return this._listFilter;
    }

     set listFilter(value : string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    get listFilter2() : string {
      return this._listFilter2;
    }

    set listFilter2(value : string) {
      this._listFilter2 = value;
      this.filteredProducts2 = this._listFilter2 ? this.performFilter2(this._listFilter2) : this.products2;
    }
    
    filteredProducts: IProduct[];
    filteredProducts2: IProduct[];


     showImage: boolean = true;
     products: IProduct[] = [];
     products2: IProduct[] = [];

      constructor( private productService: ProductService){
        
      }
      onRatingClicked(message: string): void{
        this.pageTitle = 'Product List: ' + message;
      }

      toggleImage(): void {
          
        this.showImage = !this.showImage;
      }
      ngOnInit(): void{
        this.productService.getProducts().subscribe(
        products => {
          this.products = products
          this.filteredProducts = this.products;
        },
        error => this.errorMessage = <any>error  
      );
        
      }

      performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy)!== -1)
      }

      performFilter2(filterBy2: string): IProduct[]{
        filterBy2 = filterBy2.toLocaleLowerCase();
        return this.products2.filter((product2: IProduct) => product2.category.toLocaleLowerCase().indexOf(filterBy2)!== -1)
      }
      

 
}