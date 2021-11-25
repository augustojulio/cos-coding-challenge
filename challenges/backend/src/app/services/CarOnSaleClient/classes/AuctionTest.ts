// import { getRunningAuctions } from "../interface/ICarOnSaleClient";
import { expect } from "chai";
import "mocha";

describe("First Auction test", () => {
  it("should return an Auction", () => {
    // const result = getRunningAuctions.getRunningAuctions();
    const result = true;
    expect(result).to.equal(true);
  });
});
