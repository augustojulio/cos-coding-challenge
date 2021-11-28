import { inject, injectable } from "inversify";
import { ILogger } from "./services/Logger/interface/ILogger";
import { DependencyIdentifier } from "./DependencyIdentifiers";
import "reflect-metadata";
import express, { Application } from "express";

const PORT = process.env.PORT || 8000;

const app: Application = express();

@injectable()
export class AuctionMonitorApp {
  public constructor(
    @inject(DependencyIdentifier.LOGGER) private logger: ILogger
  ) {}

  public async start(): Promise<void> {
    this.logger.log(`Auction Monitor started.`);

    // TODO: Retrieve auctions and display aggregated information (see README.md)
    app.get("/health", async (_req, res) => {
      res.send({
        message: "CarOnSale is ON",
        date: new Date(),
      });
    });
    app.get("/v1/authentication/:mailAddress/registered", async (_req, res) => {
      res.sendStatus(204);
      // console.log(res);
      return res;
    });
    // app.get("/v2/auction/seller/{userId}/running", async (_req, res)=>{

    // })
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  }
}
