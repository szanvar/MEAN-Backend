const mongoose = require("mongoose");

//MongoDB Atlas

mongoose.connect("mongodb+srv://seemaz:seema123@cluster0.iq5wb.mongodb.net/MEAN?retryWrites=true&w=majority",
{useNewUrlParser: true,useUnifiedTopology: true}, function(err)
{
    if(err)
    {
        console.log("Unable to Connect");
    }
    else
    {
        console.log("Connection To MongoDB Atlas Successfully...");
    }
});



// MongoDB Compass

// mongoose.connect("mongodb://localhost:27017/MEANDB", function(err)
// {
//     if(err)
//     {
//         console.log("Unable to connect");
//     }
//     else
//     {
//         console.log("Connection with MongoDB Compass is successfully");
//     }
// });



















// var studSchema = new mongoose.Schema({
//     name : String,
//     batch: String,
//     fees: Number
// });
// var studModel = mongoose.model('Students', studSchema);


// module.exports = studModel;



//const uri = "mongodb+srv://seemaz:seema123@cluster0.iq5wb.mongodb.net/MEAN?retryWrites=true&w=majority";

// mongoose.connect("mongodb+srv://seemaz:seema123@cluster0.iq5wb.mongodb.net/MEAN?retryWrites=true&w=majority", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log("MongoDB Connected…");
// })
// .catch(err => console.log("Unable to connect"))

// mongodb+srv://seemaz:<password>@cluster0.iq5wb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority