import { Request, Response, Application, Router } from "express";

import { ClienteController } from "../controller/cliente.controller";

export class ClienteRoutes {
  public clienteController: ClienteController = new ClienteController();

  public routes(app: Application): void {
    app.route("/clientes/test").get(this.clienteController.test);
    app.route("/clientes").get(this.clienteController.getAllCliente);
    app.route("/clientes/:id").get(this.clienteController.getOneCliente);
    app.route("/clientes").post(this.clienteController.createCliente);
    app.route("/clientes/:id").post(this.clienteController.updateCliente);
    app.route("/clientes/:id").delete(this.clienteController.deleteCliente);
  }
}