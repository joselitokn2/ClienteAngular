import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CreateProductoComponent } from "./producto/components/create-producto/create-producto.component";
import { ProductoDetailsComponent } from "./producto/components/producto-details/producto-details.component";
import { ListProductosComponent } from "./producto/components/list-productos/list-productos.component";
import { UpdateProductoComponent } from "./producto/components/update-producto/update-producto.component";
import { AppRoutingModule } from "./app.routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CreateProductoComponent,
    ProductoDetailsComponent,
    ListProductosComponent,
    UpdateProductoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
