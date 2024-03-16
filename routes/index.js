var express = require('express');
var router = express.Router();
const user= require("./users");
const user2=require("./users2")
router.use(express.urlencoded({extended: true}));
const data = user.name;

/* GET home page. */
router.post("/",async(req,res)=>{
  const userData = new user(req.body)
  await userData.save();
 
  res.redirect("/Cover")
 
})

router.post("/GalleryPost",async(req,res)=>{
  const userData = new user2(req.body)
  await userData.save();
 
  res.redirect("/Gallery")
 
})
router.get('/GalleryPost', function(req, res, next) {
  res.render('GalleryForm');
});





router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/Cover', function(req, res, next) {
  res.render('Cover');
});






 




router.get("/allusers",async function(req,res){
 

  try {
    // Fetch all users from the database
    const userss = await user.find();
    
    // Display users in HTML
    let html = '<h1>User List</h1><ul>';
    userss.forEach(user => {
     
     
      
      
      html += `<li>${user.name} - ${user.roll}</li>`;
    });
    html += '</ul>';

    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})


router.get("/places/:username",async function(req,res){
  const place = await user.findById('65c63b322cc98f16e687b375');
  const usersss = await user.find();
  const one =await user.findOne({name:`${req.params.username}`})
 
 
  res.render('new', { usersss,one});
 
})

router.get("/allusersdata",async function(req,res){
  const usersss = await user.find();
  
  res.render('user', { usersss });
  res.render('new', { usersss });
  res.render('product', { usersss });
 

})

router.get("/places",async function(req,res){
  const usersss = await user.find();
  
 
  res.render('product', { usersss });
  res.render('new', { usersss });
  console.log(usersss.name)
 

})

//Gallery post

router.get("/Gallery",async function(req,res){
  const usersss = await user2.find();
  res.render('Gallery', { usersss });
})

router.get('/Gallery', function(req, res, next) {
  res.render('Gallery');
});











module.exports = router;
