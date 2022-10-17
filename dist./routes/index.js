"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const cliente_1 = require("./cliente");
//import {ventaRoutes  } from './venta';
//import { ProductoRoutes} from './producto';
//import {TipoProductoRoutes } from './tipoproducto';
class Routes {
    constructor() {
        this.clienteRoutes = new cliente_1.ClienteRoutes();
        //   public ventaRoutes: ventaRoutes = new ventaRoutes();
        //   public productoRoutes: ProductoRoutes = new ProductoRoutes();
        //   public tipoProductoRoutes: TipoProductoRoutes = new TipoProductoRoutes();
    }
}
exports.Routes = Routes;
