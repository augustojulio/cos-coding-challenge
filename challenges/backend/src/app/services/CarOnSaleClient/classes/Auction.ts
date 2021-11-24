import { ICarOnSaleClient } from "../interface/ICarOnSaleClient";

export class Auction implements ICarOnSaleClient {
  getRunningAuctions(): Promise<ICarOnSaleClient> {
    let auction: ICarOnSaleClient = new Auction();
    return new Promise<ICarOnSaleClient>((resolve, reject) => {
      resolve(auction);
    });
  }
}
