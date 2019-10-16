var mySql = require("mySql");
var con = mySql.createConnection({
    host: "mysql.qa.talentscreen.io",
    user: "whiteboxqa",
    password: "Innovapath1*",
    database: "talentdb"
})
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");


})
function subjectModel() {
    this.mySql = con;

}
subjectModel.prototype.getAll = function (callback) {

    this.mySql.query("SELECT * from subject", callback);
}
subjectModel.prototype.create = function (data, callback) {
    this.mySql.query("INSERT INTO subject (categoryid, name, mode, icon_class, template, codemirror_theme, flag, test_framework, description, lastmoddatetime, lastmoduserid) ", function (err, res) {
        if (err) {
            console.log("error", err);
        } else {
            console.log("result", res);
        }
    })
}
module.exports = subjectModel;