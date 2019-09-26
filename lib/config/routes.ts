// lib/config/routes.ts
import * as jwt from "express-jwt";
import * as jwtAuthz from "express-jwt-authz";
import * as jwksRsa from "jwks-rsa";
import { Request, Response } from "express";
import { NodesController } from "../controllers/nodes.controller";
import { App } from "../app";

export class Routes {
  public nodesController: NodesController = new NodesController();

  public routes(app): void {
    app.route("/").get(this.nodesController.index);

    app
      .route("/nodes")
      .get(this.nodesController.index)
      .post(this.nodesController.create);

    app
      .route("/nodes/:id")
      .get(this.nodesController.show)
      .put(this.nodesController.update)
      .delete(this.nodesController.delete);

      app.route('/api/public').get(function(req, res) {
        res.json({
          message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
        });
      });
      
      // This route need authentication
      app.route('/api/private').get(App.checkJwt, function(req, res) {
        res.json({
          message: 'Hello from a private endpoint! You need to be authenticated to see this.'
        });
      });

      const checkScopes = jwtAuthz([ 'read:messages' ]);

      app.route('/api/private-scoped').get(App.checkJwt, checkScopes, function(req, res) {
        res.json({
          message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
        });
      });
  }
}
