const router = require("express").Router();
const User = require("../models/User");

//REGISTER
router.get("/register", async (req,res)=>{
    const user = await new User({
        username: "user0",
        email: "user0@gmail.com",
        password: "12345"
    })

    await user.save();
    res.send("ok")
});

module.exports = router;