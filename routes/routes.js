const express = require('express');
const router = express.Router();

const Student = require('../models/student');
const objectId = require('mongoose').Types.ObjectId;

// Base path - http://localhost:9000/students

// Get api
router.get('/', function(req,res){
    Student.find((err,doc) =>{
        if(err){
            console.log("Error in Get Data" + err);
        }
        else{
            res.send(doc);
        }
    })
});

// Get single Student api
router.get('/:id', function(req,res){
       if(objectId.isValid(req.params.id)){
        Student.findById(req.params.id, (err, doc) => {
            if(err){
                console.log("Error in Get Student by id " + err);
            }
            else{
                res.send(doc);
            }
         })
       }
       else{
           return res.status(400).send("No record found..." + req.params.id)
       }
});

// Post api
router.post('/', function(req, res){
    let stud = new Student({
        name : req.body.name,
        batch : req.body.batch,
        fees : req.body.fees
    });
   stud.save((err, doc) => {
       if(err){
           console.log("Error in Post Data" + err);
       }
       else{
           res.send(doc);
       }
   })
});

// Update single Student api
router.put('/:id', function(req,res){
    if(objectId.isValid(req.params.id)){
        let stud = {
            name : req.body.name,
            batch : req.body.batch,
            fees : req.body.fees
        };

    Student.findByIdAndUpdate(req.params.id, {$set: stud}, {new: true}, (err, doc) => 
    {
        if(err){
            console.log("Error in Update Student by id " + err);
        }
        else{
            res.send(doc);
        }
    })
    }
    else{
        return res.status(400).send("No record found..." + req.params.id)
    }
});

// Delete single Student api
router.delete('/:id', function(req,res){
    if(objectId.isValid(req.params.id)){
      Student.findByIdAndRemove(req.params.id, (err, doc) => {
         if(err){
             console.log("Error in Delete Student by id " + err);
         }
         else{
             res.send(doc);
         }
      })
    }
    else{
        return res.status(400).send("No record found..." + req.params.id)
    }
});

module.exports = router;