var mongoose = require("mongoose");
var jwt=require('jsonwebtoken');
Schema = mongoose.Schema;
RegisterCollection = mongoose.model("RegisterData", new Schema({
    "first_name": { type: String },
    "last_name": { type: String },
    "email": { type: String },
    "password": { type: String }
}))
registerModel = function () {
    this.RegisterCollection = RegisterCollection;
}
registerModel.prototype.getAll = function (req, callback) {
    this.RegisterCollection.find({}, function (err, data) {
        console.log(err, data)
        if (err)
            callback(err, null)
        callback(null, data)
    });
}

registerModel.prototype.create = function (data, callback) {
    this.RegisterCollection.create(data, function (err, res) {
        if (err) throw err;

        callback(null, res);

    });
}




registerModel.prototype.loginCheck = function (data, callback) {
    this.RegisterCollection.findOne({ "email": data.email }, function (err, res) {
        if (err) throw err;
        else if (res != null) {
            if (res.password === data.password) {
                var token=jwt.sign(data,"mouni");
                callback(null, {...res["_doc"],token});
            }
            else {
                callback({"msg": "email or password are incorrect" }, null)
            }
        }
        else{
            callback({ "msg": "Record is not found pls register"},null)  
        }


    });
}


registerModel.prototype.dashboard = function (data, callback) {
    this.RegisterCollection.find({}, function (err, data) {
        console.log(err, data)
        if (err)
            callback(err, null)
        callback(null, data)
    });
}

registerModel.prototype.update = function (data, id, callback) {

    this.RegisterCollection.update({ _id: id }, data, function (err, data) {

    });
}
registerModel.prototype.delete = function (id, c) {
    this.RegisterCollection.remove({ _id: id }, c);
}
module.exports = registerModel;
