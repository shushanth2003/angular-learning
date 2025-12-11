import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Product{
  id : number,
  name : string,
  price : number,
  inStock : boolean,
}
@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product:Product[]=[
    {id: 1, name: 'Laptop', price: 100, inStock: true},
    {id:2, name:'Mouse', price:200, inStock:false},
    {id:3,name:'Keyboard',price:300,inStock:false},
    {id:4,name:'eraser',price:400,inStock:true}
  ]
  checkStatus(p:Product){
     const msg=p.inStock?`${p.name} is in stock `:`${p.name} is out of stock`;
     alert(msg);
  }
}
