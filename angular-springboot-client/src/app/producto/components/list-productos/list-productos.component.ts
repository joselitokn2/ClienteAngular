import { Component, OnInit } from "@angular/core";
import { Producto } from "../../model/producto";
import { ProductoService } from "../../services/producto.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ProductoDTO } from "../../model/productoDTO";

@Component({
  selector: "app-list-productos",
  templateUrl: "./list-productos.component.html",
  styleUrls: ["./list-productos.component.css"]
})
export class ListProductosComponent implements OnInit {
  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}
  productos: Observable<ProductoDTO[]>;
  nombre: string;
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.productoService.getProductosList().subscribe(data => {
      console.log(data);
      this.productos = data.content;
    });
  }
  deleteProducto(id: number) {
    this.productoService.deleteProducto(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  productoDetails(id: number) {
    this.router.navigate(["details", id]);
  }
  productoUpdate(id: number) {
    this.router.navigate(["update", id]);
  }

  buscar(nombre: string) {
    if (nombre.length <= 2) {
      this.reloadData();
    } else {
      this.productoService.buscarProductoNombre(nombre).subscribe(
        data2 => {
          console.log(data2);
          this.productos = null;
          this.productos = data2.content;
        },
        error => console.log(error)
      );
    }
  }
}
