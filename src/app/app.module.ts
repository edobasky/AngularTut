import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { productListComponent } from './products/product-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-spaces';
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    productListComponent,
    ConvertToSpacePipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }