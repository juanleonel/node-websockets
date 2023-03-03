import express from "express";

import cors from "cors";
import { SERVER_PORT } from "./global/enviroments";
import router from "./routes/router";

class Server {
  private app: express.Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = SERVER_PORT || Number(process.env.PORT);
    this.app.use(cors({
      origin: true,
      credentials: true
    }))
    this.app.use(express.json());
    this.app.use('/', router);
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log('Server running! in ' + this.port);
    });
  }
}

export default Server;
