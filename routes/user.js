const express = require("express")

const router = express.Router()

const {container} = require("../awilix")


const userfunction = container.resolve("userfunction")

router.post("/post",userfunction.user)

router.get("/get/:id",userfunction.getUser)

router.delete("/delete/:id",userfunction.deleteUser)

router.put("/update/:id",userfunction.updateUser)




module.exports = router