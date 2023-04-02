import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ProductService } from "./product.service";
import { IProduct } from "./products";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls : ['./product-list.component.css']
})
export class productListComponent implements OnInit,OnDestroy {

  pageTitle : string = 'Product List';
  imageWidth : number = 50;
  imageMargin : number = 2;
  showImage : boolean = false;
  errormessage : string = '';
  sub!: Subscription;


  constructor(private productService : ProductService) {}


  private _listFilter = '';

  get listFilter() : string {
    return this._listFilter;
  }

  set listFilter(value : string) {
    this._listFilter = value;
    console.log("In setter:", value);
    this.filteredProducts =  this.performFilter(value);
  }

  filteredProducts : IProduct[] = [];
  products: IProduct[] = [
  ];



  toggleImage() : void {
    this.showImage = !this.showImage
  }

  ngOnInit(): void {
   this.sub = this.productService.getProducts().subscribe({
      next : products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error : err => this.errormessage = err
    });

  }

  performFilter(filterBy: string) : IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().includes(filterBy) )
  }

  onRatingClicked(message : string) : void {
    this.pageTitle = 'product List: ' + message;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
