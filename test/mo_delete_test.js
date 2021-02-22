const Student = require('../app/student');
const assert = require('assert');

// all delete test

describe( "Delete Tests", () => {
  let deleter;

  beforeEach( (done) => {
    deleter = new Student({ name : "Deleter"});
    deleter.save()
      .then( () => done() );
  });

  it("A delete test for deleter", (done) => {
    // deleter.remove(); -- > not recommended
    Student.findByIdAndDelete(deleter._id)
      .then( () => Student.findOne({name : "Deleter"}))
      .then( (student) => {
        assert(student === null);
        done();
      } )
  })

})
