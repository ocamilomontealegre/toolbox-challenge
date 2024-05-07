import { getFilesData } from '../src/challenge/controllers/controller.js';
import { expect } from 'chai';
import sinon from 'sinon';

describe('getFilesData', () => {
  beforeEach(() => {
    sinon.stub(console, 'log');
    sinon.stub(console, 'error');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should return sorted data when files are available', async () => {
    const req = { query: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy()
    };

    await getFilesData(req, res);

    expect(res.status.calledOnceWith(200)).to.be.true;
    expect(res.json.calledOnce).to.be.true;
    const response = res.json.getCall(0).args[0];
    expect(response).to.be.an('array').that.is.not.empty;
  });
});
