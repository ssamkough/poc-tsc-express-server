// lib/app.ts
import * as express from "express";
import * as bodyParser from "body-parser";
import * as jwt from "express-jwt";
import * as jwtAuthz from "express-jwt-authz";
import * as jwksRsa from "jwks-rsa";
import { Routes } from "./config/routes";

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  public checkJwt = jwt({
    // Dynamically provide a signing key
    // based on the kid in the header and 
    // the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://dev-2qc73rwc.auth0.com/.well-known/jwks.json`
    }),
  
    // Validate the audience and the issuer.
    audience: 'http://localhost:3000',
    issuer: `https://dev-2qc73rwc.auth0.com/`,
    algorithms: ['RS256']
  });
}

export default new App().app;
