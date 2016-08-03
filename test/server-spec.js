const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const app = require('../server/server.js');

chai.use(chaiHttp);

describe('Server Functionality', () => {
  it('should exist', () => {
    expect(app).to.exist;
  });

  it('should run in development when testing', () => {
    expect(app.settings.env).to.equal('development');
  });

  it('should serve static files on a GET to /', done => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(200);
        expect(res.ok).to.equal(true);
        done();
      });
  });

  it('should respond with an error when requesting a nonexistant route', done => {
    chai.request(app)
      .get('/foo')
      .end((err, res) => {
        expect(err).to.exist;
        expect(res.status).to.equal(404);
        expect(res.ok).to.equal(false);
        done();
      });
  });
});
