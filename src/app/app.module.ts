import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { CardViewComponent } from './body/card-view/card-view.component';
import { ConverterPipe } from './pipe/converter.pipe';
import { CardsComponent } from './body/cards/cards.component';
import { CartComponent } from './body/cart/cart.component';
import { ToEgPipe } from './pipe/to-eg.pipe';
import { ProductCardComponent } from './body/product-card/product-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms'; // for tow way binding

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardViewComponent,
    ConverterPipe,
    CardsComponent,
    CartComponent,
    ToEgPipe,
    ProductCardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
