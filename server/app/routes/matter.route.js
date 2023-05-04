const express = require("express");
const matter = require("../controllers/matter.controller")

const router = express.Router();

router.route("/")
    .get(matter.findAll)
    .post(matter.create);

router.route("/:id")
    .get(matter.findById)
    .patch(matter.update)
    .delete(matter.delete);

router.route("/setStatus/:id")
    .patch(matter.setStatus);

router.route("/setStatus-tt/:id")
    .patch(matter.setStatus_TT);
    
router.route("/findByStatus/:id")
    .get(matter.findByStatus);
    

router.route("/findByIdAccess")
    .post(matter.findByIdAccess);
module.exports = router;