const express = require("express")
const path = require("path")
const app = express()
const PORT = 9000
const router = require("./router/routes")

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.use("/assets", express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(PORT, ()=> {
    console.log(PORT);
})