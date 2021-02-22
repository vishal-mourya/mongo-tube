const Student = require('../app/student');
const assert = require('assert');

// describe and it are used for creating actual test cases for our DB testing
describe('Create  Tests', () => {
  it('create a user in DB', () => {
    // assert(false);
    const sam = new Student({ name : "Sam"});
    sam.save()
        .then( () => {
          assert(!sam.isNew);
        })
        .catch( () => {
          console.log("error");
        })
  });
});
