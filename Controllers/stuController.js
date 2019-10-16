var express=require('express'),
studentModel=require('../Models/stuModel'),
 sm = new studentModel;
 studentController=function(){
   
 }
 studentController.prototype.getAll= function(req,res){
    sm.getAll(req,function(err,result){
res.send(result);
})
 }
 studentController.prototype.create= function(req,res){
    sm.create(req.body, function(err,result){
         res.send(result);
     })
 }
 studentController.prototype.update= function(req,res){
     
     sm.update(req.body,req.params.id, function(err,result){
         res.send(result);
     })
 }                                                                   

studentController.prototype.delete = function (req, res) {
    sm.delete(req.params.id, function (err, data) {
        res.send(data);
    })
}
 module.exports= studentController;

