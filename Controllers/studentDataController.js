var express=require('express'),
studentDataModel=require('../Models/StudentDataModel'),
 sdm = new studentDataModel;

 StudentDataController=function(){
   
 }
//  StudentDataController.prototype.getAll= function(req,res){
//     sdm.getAll(req,function(err,result){
// res.send(result);
// })
//  }
 StudentDataController.prototype.create= function(req,res){
     console.log("nnnnnnnnnnnnnnnn",req.body,"req.body");
    sdm.create(req.body, function(err,result){
         res.send(result);
     })
 }



 

 

//  StudentDataController.prototype.update= function(req,res){
     
//     sdm.update(req.body,req.params.id, function(err,result){
//          res.send(result);
//      })
//  }                                                                   

//  StudentDataController.prototype.delete = function (req, res) {
//     sdm.delete(req.params.id, function (err, data) {
//         res.send(data);
//     })
// }
 module.exports= StudentDataController;
