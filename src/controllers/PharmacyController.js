const { read, write } = require("../utils/FS")

const PHARMACY_GET = (req, res) => {
    const pharmacy = read("pharmacy.json")
    const tablets = read("tablets.json")
    res.render('index', { pharmacy, tablets })
}

const PHARMACY_DELETE = (req, res) => {
    const { id } = req.params

    const pharmacy = read("pharmacy.json")

    const deletePharmacy = pharmacy.findIndex(e => e.id == id)

    pharmacy.splice(deletePharmacy, 1)

    write("pharmacy.json", pharmacy)
    res.send({ ok: true })
}

const PHARMACY_ADD = (req, res) => {
    const pharmacy = read("pharmacy.json")
    res.render("pharmacyAdd", { pharmacy })
}

const PHARMACY_POST = (req, res) => {
    const pharmacy = read("pharmacy.json")
    const { name, address, img } = req.body

    const newPharmacy = {
        id: pharmacy[pharmacy.length - 1]?.id + 1 || 1 ,
        name,
        address,
        img
    }

    pharmacy.push(newPharmacy)
    write("pharmacy.json", pharmacy)
    res.redirect("pharmacyAdd")
}

const PHARMACY_CHANGE = (req, res) => {
    const pharmacy = read("pharmacy.json")
    const { id, name, address, img } = req.body
    const foundPharmacy = pharmacy.find(e => e.id == id)
    console.log(id);
    console.log(foundPharmacy);
    foundPharmacy.name = name ?  name : foundPharmacy.name
    foundPharmacy.address = address ?  address : foundPharmacy.address
    foundPharmacy.img = img ?  img : foundPharmacy.img
    write("pharmacy.json", pharmacy)
    res.redirect("/")
}

module.exports = {
    PHARMACY_GET,
    PHARMACY_DELETE,
    PHARMACY_ADD,
    PHARMACY_POST,
    PHARMACY_CHANGE
}