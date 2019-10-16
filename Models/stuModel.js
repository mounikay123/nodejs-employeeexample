var mongoose = require("mongoose");
Schema = mongoose.Schema;
studentCollection = mongoose.model("employeeData", new Schema({
    "id": { type: Number },
    "email": { type: String },
    "first_name": { type: String },
    "last_name": { type: String },
    "ip": { type: String },
    "latitude": { type: Number },
    "longitude": { type: Number },
    "created_at": { type: String },
    "updated_at": { type: String },
    
}))
studentModel = function () {
    this.studentCollection = studentCollection;
}
studentModel.prototype.getAll = function (req, callback) {
     this.studentCollection.find({}, function (err, data) {
        console.log(err, data)
        if (err)


            callback(err, null)
        callback(null, data)
    });
}
studentModel.prototype.create = function (data, callback) {
        this.studentCollection.insertMany(data, function (err, res) {
            callback(null, res)
        })
}
studentModel.prototype.update = function (data, id, callback) {

    this.studentCollection.update({ _id: id }, data, function (err, data) {

    });
}
studentModel.prototype.delete = function (id, c) {
    this.studentCollection.remove({ studentId: id }, c);
}
module.exports = studentModel;

