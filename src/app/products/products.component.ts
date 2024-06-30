import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
    constructor(private router: Router, @Inject(ProductsService) private _product: ProductsService) { }
    // @Input() data!: any
    // @Output() dataChange = new EventEmitter<any>()
    isDisplay = false
    isDisplay_stock = false
    isDisabled: boolean = false
    public Cart: any = []
    total: any = 0
    public Products: any
    ngOnInit(): void {
      this._product.getProducts().subscribe(data => {
        this.Products = data
        // console.log(this.Products);

      })
    }
    onSelect(id_product: any) {

      this.router.navigate(['/detail', id_product]);
    }
    change_size(id_product: any, id_Size: any) {
      for (let i = 0; i < this.Products.length; i++) {
        if (this.Products[i]._id === id_product) {
          this.Products[i].List_Size.find((item: any, index: any) => {
            const result = item.id === id_Size ? this.Products[i].Current_Size = item.id : 'Error'
            console.log(result);

          })
        }
      }
    }

  }
