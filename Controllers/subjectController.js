var subjectModel=require("../models/subjectModel.js")
sm= new subjectModel;
subjectController =function(){

}
subjectController.prototype.getAll=function(req,res){
sm.getAll(req,function(err,result){
    res.send(result);
})
}
subjectController.prototype.create=function(req,res){
sm.create(req.body,function(err,result){
    res.send(result);
})
}
// subjectController.prototype.update=function(req,res){
// sm.update(req.body,req.params.id,function(err,result){
//     res.send(result);
// })
// }
// subjectController.prototype.delete=function(req,res){
// sm.remove(req.body,req.params.id,function(err,result){
//     res.send(result);
// })
// }
module.exports=subjectController;