var express = require("express");
var router = express.Router();
let userSchema = require("../Schema/Schema");

/* GET users listing. */

router.get("/display", async (req, res) => {
  try {
    const result = await userSchema.find();
    res.json({
      Message: "display all data",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
});

// router.post("/register", async (req, res) => {
//   try {
//     const result = await userschema.findOne()({ email: req.body.email });
//     if (user) {
//       res.send("user already exist");
//     } else {
//       await userschema.create(req.body);
//       res.send("account created ");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

router.post('/register', async function(req, res){
  try{
  const user = await userSchema.findOne({email:req.body.email})
  if(user)
  {
    res.send('user already exists')
  }
  else{
    const encodePwd = await encryptPwd(req.body.password)
    req.body.password = encodePwd
    await userSchema.create(req.body)
    res.send('Account created')
  }
  }
  catch (err) {
    console.log(err)
  }
})
module.exports = router;
