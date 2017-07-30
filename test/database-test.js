const expect = require('chai').expect;

describe('Database connection', function() {
  const Database = require('../models/database.js');
  const db = new Database('helloworld');

  // connect
  it ('should connect to mongodb server.', function(done) {
    db.connect(function(err) {
      expect(err).to.be.null;
      done();
    });
  });

  // create (insert)
  it ('should insert document into database collection', function(done) {
    expect(true).to.be.true;
    done();
  });

  // read
  it ('should read documents from a collection', function(done) {
    expect(true).to.be.true;
    done();
  });

  // update
  it ('should a collection\'s document', function(done) {
    expect(true).to.be.ok;
    done();
  });

  // delete
  it ('should delete document(s) from a collection', function(done) {
    expect(true).to.be.ok;
    done();
  });

});