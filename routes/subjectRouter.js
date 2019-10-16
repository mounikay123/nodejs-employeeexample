var express=require('express'),
 router=express.Router(),
subjectController = require('../Controllers/subjectController'),
sc = new subjectController();
router.get("/",  sc.getAll.bind(sc));
router.post("/", sc.create.bind(sc));
// router.put("/:id", sc.update.bind(sc));
// router.delete("/:id", sc.delete.bind(sc));
module.exports = router;