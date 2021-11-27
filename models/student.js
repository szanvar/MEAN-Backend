const mongoose = require('mongoose');

// StudColl - Collection Name
const stud = mongoose.model("StudColl", {
      name : {type : String},
      batch : {type : String},
      fees : {type: Number}
});

module.exports = stud;