const { read, write } = require("../utils/FS")
const TABLETS_DELETE = (req, res) => {
    const { id } = req.params

    const tablets = read("tablets.json")

    const deleteTablets = tablets.findIndex(e => e.id == id)

    tablets.splice(deleteTablets, 1)

    write("tablets.json", tablets)
    res.send({ ok: true })
}

const TABLETS_RENDER = (req, res) => {
    const tablets = read("tablets.json")
    const pharmacy = read("pharmacy.json")
    res.render("tablets", { tablets, pharmacy })
}

const TABLETS_ADD = (req, res) => {
    const tablets = read("tablets.json")
    const { name, price, desc, pharmacyId } = req.body
    console.log(name, price, desc, pharmacyId);
    const newTablets = {
        id: tablets[tablets.length - 1]?.id + 1 || 1 ,
        name,
        price,
        desc,
        pharmacyId
    }

    tablets.push(newTablets)
    write("tablets.json", tablets)
    res.redirect("tabletsAdd")
}

const TABLETS_CHANGE = (req, res) => {
    const tablets = read("tablets.json")
    const { id, name, price, desc  } = req.body
    const foundTablets = tablets.find(e => e.id == id)
    foundTablets.name = name ?  name : foundTablets.name
    foundTablets.price = price ?  price : foundTablets.price
    foundTablets.desc = desc ?  desc : foundTablets.desc
    write("tablets.json", tablets)
    res.redirect("/")
}

const TABLETS_CATEGORY = (req, res) => {
    const tablets = read("tablets.json")
    const { id  } = req.params

    const foundTablets = tablets.filter(e => e.pharmacyId == id)
    res.send(foundTablets)
}

module.exports = {
    TABLETS_DELETE,
    TABLETS_RENDER,
    TABLETS_ADD,
    TABLETS_CHANGE,
    TABLETS_CATEGORY
}