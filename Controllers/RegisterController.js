var express=require('express'),
registerModel=require('../Models/RegisterModel'),
 rm = new registerModel;
 RegisterController=function(){
   
 }
 RegisterController.prototype.getAll= function(req,res){
    rm.getAll(req,function(err,result){
res.send(result);
})
 }
 RegisterController.prototype.create= function(req,res){
    rm.create(req.body, function(err,result){
         res.send(result);
     })
 }



 RegisterController.prototype.loginCheck= function(req,res){
    rm.loginCheck(req.body, function(err,result){
        if(err) res.send(err)
        else
         res.send(result);
     })
 }

 RegisterController.prototype.dashboard= function(req,res){
     
    rm.dashboard(req.body, function(err,result){
        if(err) res.send(err)
        else
         res.send(result);
     })
 }

 RegisterController.prototype.update= function(req,res){
     
    rm.update(req.body,req.params.id, function(err,result){
         res.send(result);
     })
 }                                                                   

 RegisterController.prototype.delete = function (req, res) {
    rm.delete(req.params.id, function (err, data) {
        res.send(data);
    })
}
 module.exports= RegisterController;
