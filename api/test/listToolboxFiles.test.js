import sinon from "sinon";
import { expect } from "chai";
import { listToolboxFiles } from "../src/challenge/controllers/controller.js";

describe('listToolboxFiles', () => {
  beforeEach(() => {
    sinon.stub(console, 'log');
    sinon.stub(console, 'error');
  });

  it('should return success response when files are retrieved', async () => {
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy()
    };

    await listToolboxFiles(req, res);

    expect(res.status.calledOnceWith(200)).to.be.true;
    expect(res.json.calledOnceWith(
      { files: 
        [
          "test1.csv", 
          "test2.csv", 
          "test3.csv", 
          "test18.csv", 
          "test4.csv", 
          "test5.csv", 
          "test6.csv", 
          "test9.csv", 
          "test15.csv"
        ] 
      })).to.be.true;
  });
});
