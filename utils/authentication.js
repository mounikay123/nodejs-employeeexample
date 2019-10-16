var jwt = require('jsonwebtoken');

var authentication = function (req, res, next) {
    console.log(req.headers['x-access-token'],"hiiii");
    var token = req.headers['x-access-token'];
    if (token) {
        console.log(token,"tokennn")
        jwt.verify(token,"mouni", function (err, decoded) {
            console.log("err",err);
            console.log(decoded,"decoded");
            if (err)
                return res.status(401).json({ success: false, status: 401, message: 'Authentication Is Failed.' });
            else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }

}
module.exports = authentication;