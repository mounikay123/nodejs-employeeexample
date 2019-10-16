var express=require('express'),
 router=express.Router(),
studentController = require('../Controllers/stuController'),
sc = new studentController();
router.get("/",  sc.getAll.bind(sc));
router.post("/", sc.create.bind(sc));
router.put("/:id", sc.update.bind(sc));
router.delete("/:id", sc.delete.bind(sc));
module.exports = router;




