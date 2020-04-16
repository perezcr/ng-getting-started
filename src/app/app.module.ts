import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  // Note that the AppRoutingModule is listed after the ProductModule in the imports array.
  // This is required because Angular registers the routes based on the order of the modules specified here.
  // The ProductModule is listed first, so it registers the product routes first.
  // Then the AppRoutingModule registers the application routes, including the wildcard route.
  // If the AppRoutingModule was before the ProductModule, then the wildcard route would be registered
  // before the product routes, and the product routes would never be accessible.
  // So the AppRoutingModule with the wildcard route should always be last in this list.
  imports: [BrowserModule, HttpClientModule, ProductModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
