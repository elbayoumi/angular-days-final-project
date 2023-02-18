import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './body/cards/cards.component';
import { CardViewComponent } from './body/card-view/card-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductCardComponent } from './body/product-card/product-card.component';
import { CartComponent } from './body/cart/cart.component';

const routes: Routes = [
{
  path: '',
  component: CardsComponent,

},
{
  path: 'view-card',
  component: CardViewComponent,
},
{
  path:'product-card/:id',
  component: ProductCardComponent,
},{
  path:'cart/:id',
  component: CartComponent,
},
{
  path: 'errrrr',
  component: NotFoundComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
