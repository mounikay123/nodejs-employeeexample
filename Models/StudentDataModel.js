var mongoose = require("mongoose");

Schema = mongoose.Schema;
StudentDataCollection = mongoose.model("StudentData", new Schema({
    "firstName":{ type: String },
    "MiddleName": { type: String },
    "LastName": { type: String },
    "DOB": { type: String },
    "LatestEducation": { type: String },
    "Specialization": { type: String }
  
}))
studentDataModel = function () {
    this.StudentDataCollection = StudentDataCollection;
}
// studentDataModel.prototype.getAll = function (req, callback) {
//     this.StudentDataCollection.find({}, function (err, data) {
//         console.log(err, data)
//         if (err)
//             callback(err, null)
//         callback(null, data)
//     });
// }
studentDataModel.prototype.create = function (data, callback) {
    this.StudentDataCollection.create(data, function (err, res) {
        console.log(res,"res")
        if (err) throw err;

        callback(null, res);

    });
}
// studentDataModel.prototype.update = function (data, id, callback) {

//     this.StudentDataCollection.update({ _id: id }, data, function (err, data) {

//     });
// }
// studentDataModel.prototype.delete = function (id, c) {
//     this.StudentDataCollection.remove({ _id: id }, c);
// }
module.exports = studentDataModel;
