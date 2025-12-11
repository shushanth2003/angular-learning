import { Component } from '@angular/core';
interface User{
  id:number,
  name:string,
  email:string
}
type orderStatus='pending'|'shipped'|'delievered';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user:User[]=[
    {id:1,name:"shushanth",email:"bsshu2003@gmail.com"},
    {id:2,name:"mohan",email:"ramkumar@gmail.com"},
  ];
  orderStatus:orderStatus="pending";
  
}
