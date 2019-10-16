var express=require('express'),
 router=express.Router(),
RegisterController = require('../Controllers/RegisterController'),
authentication=require('../utils/authentication');
rc = new RegisterController();
router.get("/",  rc.getAll.bind(rc));
router.post("/", rc.create.bind(rc));
router.post("/authenticate", rc.loginCheck.bind(rc));
router.get("/dashboard",authentication,  rc.dashboard.bind(rc));
router.put("/:id", rc.update.bind(rc));
router.delete("/:id", rc.delete.bind(rc));
module.exports = router;