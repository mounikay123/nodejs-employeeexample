var express=require('express');

router=express.Router();
router.use("/student" , require('./stuRoute'));
router.use("/Register" , require('./registerRoutes'));
router.use("/StudentData" , require('./studentDataRoute'));
module.exports=router;
