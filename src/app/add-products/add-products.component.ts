import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {
  public NameInput: any
  public PriceInput: any
  public QuantityInput: any
  public DescriptionInput: any
  public ImageUrlInput: any
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  async Add_Product(e: any) {
    const data_form = {
      undefined,
      Name: this.NameInput,
      Price: this.PriceInput,
      Quantity: this.QuantityInput,
      Description: this.DescriptionInput,
      Img: this.ImageUrlInput,
      Color_Img: '',
      List_Size: '',
      Current_Img: this.ImageUrlInput,
      Current_Size: '',
      Current_Quantity: '',
    }
    const data = await fetch('http://localhost:3000/products/Add_Product', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(data_form),
    })
    if (data.status === 200) {
      this.NameInput = ''
      this.PriceInput = ''
      this.QuantityInput = ''
      this.DescriptionInput = ''
      setTimeout(() => {
        this._router.navigate(['products'])
      }, 1000)
    }
  }
  onChangeName(e: any) {
    this.NameInput = e.target.value
  }
  onChangePrice(e: any) {
    this.PriceInput = e.target.value
  }
  onChangeQuantity(e: any) {
    this.QuantityInput = e.target.value
  }
  onChangeDescription(e: any) {
    this.DescriptionInput = e.target.value
  }
  onChangeImage(e: any) {
    // this.ImageInput = e.target.value
    if (e.target.files) {
      let reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (event: any) => {
        this.ImageUrlInput = event.target.result
        if (this.ImageUrlInput) {
          this.ImageUrlInput = this.ImageUrlInput.split(' ')
        }
      }
    }
  }
  addSizeInput(): void {
    const container = document.getElementById('size-container');
    if (container) {
      const newInputGroup = document.createElement('div');
      newInputGroup.className = 'input-group mb-3';
      newInputGroup.innerHTML = `<input type="text" class="form-control" placeholder="Size">`;
      container.appendChild(newInputGroup);
    } else {
      console.error('Container not found');
    }
  }
}
