const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // this line specifies that i am interested in ES6 - promises

// before here indicates that it will run anyhow and atfirst
before( done => {
  // 1st param - a string - This string is responsible for making connection to our database
  // 2nd param - useNewUrlParser - this will make our connection more better - compulsory
  mongoose.connect("mongodb://localhost/mongotube", {useNewUrlParser : true});

  // Once and on are listeners eg: succesfull events, failure events, etc
  mongoose.connection
        .once('open', () => {
          //  console.log('Connected')
          done(); // this done represents that i am done with the connection now you can move a head

        })
        // The above will print connected on console when we are connected with our DB
        .on('error', (error) => {
          console.log( "Your Error " , error );
          // The above will print error on console when we get some error in our DB connectivity
        });
});

beforeEach( (done) => {

  mongoose.connection.collections.students.drop( () => {
    done();
  } );
})
