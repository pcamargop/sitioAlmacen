"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRoutes = void 0;
const cliente_controller_1 = require("../controller/cliente.controller");
class ClienteRoutes {
    constructor() {
        this.clienteController = new cliente_controller_1.ClienteController();
    }
    routes(app) {
        app.route("/clientes/test").get(this.clienteController.test);
        app.route("/clientes").get(this.clienteController.getAllCliente);
        app.route("/clientes/:id").get(this.clienteController.getOneCliente);
        app.route("/clientes").post(this.clienteController.createCliente);
        app.route("/clientes/:id").post(this.clienteController.updateCliente);
        app.route("/clientes/:id").delete(this.clienteController.deleteCliente);
    }
}
exports.ClienteRoutes = ClienteRoutes;
