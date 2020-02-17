import { Component, OnInit } from "@angular/core";
import { Producto } from "../../model/producto";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductoService } from "../../services/producto.service";
import { ProductoDTO } from "../../model/productoDTO";

@Component({
  selector: "app-producto-details",
  templateUrl: "./producto-details.component.html",
  styleUrls: ["./producto-details.component.css"]
})
export class ProductoDetailsComponent implements OnInit {
  id: number;
  producto: ProductoDTO;
  categoria: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    this.producto = new ProductoDTO();

    this.id = this.route.snapshot.params["id"];

    this.productoService.getProducto(this.id).subscribe(
      data => {
        console.log(data);
        this.producto = data;
        this.categoria = data.categoria.nombre;
      },
      error => console.log(error)
    );
  }

  list() {
    this.router.navigate(["productos"]);
  }
}
