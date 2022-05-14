const express = require("express")
const router = express.Router()

const PharmacyController = require("../controllers/PharmacyController")
const TabletsController = require("../controllers/TabletsController")

router
    .get("/", PharmacyController.PHARMACY_GET)
    .get("/pharmacyAdd", PharmacyController.PHARMACY_ADD)
    .post("/add", PharmacyController.PHARMACY_POST)
    .post("/tabletsAdd", TabletsController.TABLETS_ADD)
    .post("/change", PharmacyController.PHARMACY_CHANGE)
    .post("/changeTablets", TabletsController.TABLETS_CHANGE)
    .post("/category/:id", TabletsController.TABLETS_CATEGORY)
    .delete("/delete/:id", PharmacyController.PHARMACY_DELETE)
    .delete("/remove/:id", TabletsController.TABLETS_DELETE)
    .get("/tabletsAdd", TabletsController.TABLETS_RENDER)

module.exports = router