import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  activedRouted: any;
  products:Product[] =[
    {
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
    },
    {
       "createdAt":"2022-09-30T02:45:19.349Z",
       "name":"Mayonnaise Png, Transparent Png - kindpng",
       "image":"https://www.kindpng.com/picc/m/374-3744320_mayonnaise-png-transparent-png.png",
       "rate":6,
       "count":20,
       "description":"Product description goes here",
       "price":"198.00",
       "reviews":[
          "Great one"
       ],
       "id":"2"
    },
    {
       "createdAt":"2022-09-30T07:21:14.130Z",
       "name":"Muesli Fitness (500g)",
       "image":"https://demo2.madrasthemes.com/cartzilla/grocery/wp-content/uploads/sites/5/2020/04/01.jpg",
       "description":"Muesli Fitness Nutritious Energy, Gluten Free (500g) – Grocery Store",
       "rate":9,
       "count":10,
       "price":"828.00",
       "reviews":[
          "reviews 3",
          "bad Product",
          "not Recommended"
       ],
       "id":"3"
    },
    {
       "createdAt":"2022-09-30T02:32:29.522Z",
       "name":"Al Doha Egyptian Rice-5 kg",
       "image":"https://demo2.madrasthemes.com/cartzilla/grocery/wp-content/uploads/sites/5/2020/04/01.jpg",
       "description":"Refined",
       "rate":6.5,
       "count":25,
       "price":"929.00",
       "reviews":[
          "reviews 4"
       ],
       "id":"4"
    },
    {
       "createdAt":"2022-09-30T03:09:25.056Z",
       "name":"23 Black-Owned",
       "image":"https://cdn.apartmenttherapy.info/image/upload/v1597243598/k/Design/k-essentials-grocery-2020/photos/Morton-Z/Zach_Zoe-Wildflower-Jar-Front-HighRes.png",
       "description":"Unbranded",
       "rate":5,
       "count":0,
       "price":"85.00",
       "reviews":[
          "reviews 5"
       ],
       "id":"5"
    },
    {
      "createdAt":"2022-09-30T11:57:53.372Z",
      "name":"Tomato Ketckup",
      "image":"https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/heinz-tomato-ketchup.jpg",
      "rate":2.5,
      "count":60,
      "description":"Sleek",
      "price":"638.00",
      "reviews":[
         "reviews 6"
      ],
      "id":"6"
   },  {
    "createdAt":"2022-09-30T11:57:53.372Z",
    "name":"Tomato Ketckup",
    "image":"https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/heinz-tomato-ketchup.jpg",
    "rate":2.5,
    "count":60,
    "description":"Sleek",
    "price":"638.00",
    "reviews":[
       "reviews 6",
       "best Product",
       "Recommended"
    ],
    "id":"7"
  },  {
    "createdAt":"2022-09-30T11:57:53.372Z",
    "name":"Tomato Ketckup",
    "image":"https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/heinz-tomato-ketchup.jpg",
    "rate":2.5,
    "count":60,
    "description":"Sleek",
    "price":"638.00",
    "reviews":[
       "reviews 6",
       "best Product",
       "Recommended"
    ],
    "id":"8"
  },
  {
     "createdAt":"2022-09-30T07:21:14.130Z",
     "name":" Fitness (500g)",
     "image":"https://demo2.madrasthemes.com/cartzilla/grocery/wp-content/uploads/sites/5/2020/04/01.jpg",
     "description":" Fitness Nutritious Energy, Gluten Free (500g) – Grocery Store",
     "rate":9,
     "count":10,
     "price":"828.00",
     "reviews":[
        "reviews 3",
        "bad Product",
        "not Recommended"
     ],
     "id":"9"
  }
  ];
  productView :any= {

  };
  constructor(private activedRoute : ActivatedRoute,private router :Router){}
ngOnInit() : void{
  this.activedRouted=this.activedRoute.snapshot.params['id'];
this.productView = this.products.find(p => p.id==this.activedRouted);
console.log(this.productView);

}
goToHome(){
  this.router.navigate(['']);
}
addToCard(){

}
showCard(){
  const num  =  this.productView.id;
  !(this.productView.count)? this.router.navigate(['product-card',num]):this.router.navigate(['/cart',num]);
 
 }
}
