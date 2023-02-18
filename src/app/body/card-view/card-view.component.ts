import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit{
currnt:any;
@Input() productUser=  {
  "createdAt":"2022-09-30T16:41:31.124Z",
  "name":"Wadi Food Natural Green Olives | Canned Food | Grocery Shopping",
  "image":"https://mcprod.hyperone.com.eg/media/catalog/product/cache/1ca275941aea0ae98b372dcb44b7c67a/6/2/6223000191392_ugyh.png",
  "rate":7.5,
  "count":0,
  "description":"Generic",
  "price":"80.00",
  "reviews":[
     "reviews 1",
     "Good Product",
     "Recommended"
  ],
  "id":"1"
};

constructor(private router :Router){}

ngOnInit() :void{
  console.log(this.productUser.id)
}
showCard(){
 const num  =  this.productUser.id;
 this.productUser.count? this.router.navigate(['product-card',num]):this.router.navigate(['']);

}
}
