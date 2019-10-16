var express=require('express'),
 router=express.Router(),
 StudentDataController = require('../Controllers/studentDataController'),

sdc = new StudentDataController();
// router.get("/",  sdc.getAll.bind(sdc));
router.post("/name",  function(){
    console.log("hellooo");
},sdc.create.bind(sdc));

// router.put("/:id", sdc.update.bind(sdc));
// router.delete("/:id", sdc.delete.bind(sdc));
module.exports = router;