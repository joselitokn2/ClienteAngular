import { Routes, RouterModule } from "@angular/router";
import { CreateProductoComponent } from "./producto/components/create-producto/create-producto.component";
import { UpdateProductoComponent } from "./producto/components/update-producto/update-producto.component";
import { ProductoDetailsComponent } from "./producto/components/producto-details/producto-details.component";
import { ListProductosComponent } from "./producto/components/list-productos/list-productos.component";
import { NgModule } from "@angular/core";
const routes: Routes = [
  { path: "", redirectTo: "producto", pathMatch: "full" },
  { path: "productos", component: ListProductosComponent },
  { path: "add", component: CreateProductoComponent },
  { path: "update/:id", component: UpdateProductoComponent },
  { path: "details/:id", component: ProductoDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
