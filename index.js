const express = require('express')
const path = require('path')
const app = express()
var bodyParser = require('body-parser')
const {PrismaClient} = require('@prisma/client')
const client = new PrismaClient();
const multer = require('multer')
const { userInfo } = require('os')
const { name } = require('ejs')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const viewRouter = require('./router/viewRouter.js')
const userRouter = require('./router/userRouter.js')
const requireLogin = require('./middleware/checkout.js')
const login = require('./router/loginRouter.js')
const port = 3000


app.use('/', express.static(path.join(__dirname, 'profile')))

app.set('view engine', 'ejs')


app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({    
  extended: true
})); 
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));
app.use('/admin',requireLogin.requireLogin,viewRouter);
app.use('/', userRouter);
app.use('/', login)






















































//USER
// app.get('/userInfo', async(req, res) => {
//   const data = await client.$queryRaw`SELECT * FROM "user"`
//  return res.render('user', {data:data})
// })

//  app.get('/inuser/:ID', async (req,res) =>{
//     const genId = parseInt(req.params.ID);
//     const data = await client.$queryRaw`SELECT * FROM "user" WHERE id=${genId}`
//     console.log(data);
//     return res.render("userDetail", {userDetail: data[0]})
//   }) 
//  app.get('/userdele/:ID', async (req,res) =>{
//     const genId = parseInt(req.params.ID);
//     const data = await client.$queryRaw`DELETE FROM user WHERE id=${genId}`
//     res.redirect(`/admin`)
//   })
   
//     app.post('/uu/:ID',upload.fields([{name:'image'},{name:'icon'}]), async (req, res) => {
//       const genId = parseInt(req.params.ID);
//       const name = req.body.name;
//       const job = req.body.job;
//       const newpsth= "assets/uploads/" + req.files.image[0].filename
//       const newp= "assets/uploads/" + req.files.icon[0].filename
//       const info = req.body.information;
//       const updateedu = await client.$queryRaw`UPDATE "user" SET name=${name}, job=${job},image=${newpsth},icon=${newp},information=${info} WHERE id = ${genId} `
//       return res.redirect(`/admin`)
//     })


    /// PROFILE
    //   app.get('/profile', async(req, res) => {
    //   const data = await client.$queryRaw`SELECT * FROM "profile"`
    //   return res.render('pro', {data:data})
    // })
    // app.get('/create-pro', async(req, res) => {
    
    //   res.render('crepro')
    // })


    // app.post('/createpro', async(req,res) =>{
    //   const tt = req.body.title;
    //   const des = req.body.description;
    //   const create = await client.$queryRaw`INSERT INTO "profile" (title,description) VALUES ( ${tt},${des})`;
          
    //     res.redirect(`/profile`)
    //     })
    // app.get('/prouser/:ID', async (req,res) =>{
    //   const genId = parseInt(req.params.ID);
    //   const data = await client.$queryRaw`SELECT * FROM "profile" WHERE id=${genId}`
    //   console.log(data);
    //   return res.render("proDetail", {proDetail: data[0]})
    //   })  
    //  app.get('/prodele/:ID', async (req,res) =>{
    //   const genId = parseInt(req.params.ID);
    //   const data = await client.$queryRaw`DELETE FROM "profile" WHERE id=${genId}`
    //   res.redirect(`/profile`)
    // })  
        
        
    // app.post('/prof/:ID', async (req, res) => {
    //       const genId = parseInt(req.params.ID);
    //       const tt = req.body.title;
    //       const des = req.body.description;
    //       const update = await client.$queryRaw`UPDATE "profile" SET title=${tt}, description=${des} WHERE id = ${genId} `
    //       return res.redirect(`/profile`)
    //     })


// Experience
// app.get('/experience', async(req, res) => {
//   const data = await client.$queryRaw`SELECT * FROM "experience"`
//   return res.render('exp', {data:data})
// })

// app.get('/create-exp', async(req, res) => {
 
//    res.render('expcre')
// })


// app.post('/createex', async(req,res) =>{
//     const title = req.body.title;
//     const job = req.body.job;
//     const year = req.body.year;
//     const des = req.body.description;

//     const create = await client.$queryRaw`INSERT INTO "experience" (title,job,year, description) VALUES ( ${title},${job},${year},${des})`;
      
//      res.redirect(`/experience`)
//     })
//     app.get('/expuser/:ID', async (req,res) =>{
//       const genId = parseInt(req.params.ID);
//       const data = await client.$queryRaw`SELECT * FROM "experience" WHERE id=${genId}`
//       console.log(data);
//       return res.render("expDetail", {expDetail: data[0]})
//     })  
//     app.get('/expdele/:ID', async (req,res) =>{
//       const genId = parseInt(req.params.ID);
//       const data = await client.$queryRaw`DELETE FROM "experience" WHERE id=${genId}`
//       res.redirect(`/experience`)
//     })  
    
    
//     app.post('/exper/:ID', async (req, res) => {
//       const genId = parseInt(req.params.ID);
//       const title = req.body.title;
//       const job = req.body.job;
//       const year = req.body.year;
//       const des = req.body.description;
    
     
//       const updateedu = await client.$queryRaw`UPDATE "experience" SET title=${title}, job=${job},year=${year},description=${des} WHERE id = ${genId} `
//       return res.redirect(`/experience`)
//     })
  
 // EDUCATION
//  app.get('/education', async(req, res) => {
//   const data = await client.$queryRaw`SELECT * FROM "education"`
//   return res.render('edu', {data:data})
// })

// app.get('/create-edu', async(req, res) => {
 
//    res.render('educre')
// })


// app.post('/createedu', async(req,res) =>{
//     const name = req.body.name;
//     const job = req.body.job;
//     const year = req.body.year;
//     const des = req.body.description;

//     const create = await client.$queryRaw`INSERT INTO "education" (name,job,year, description) VALUES ( ${name},${job},${year},${des})`;
      
//      res.redirect(`/education`)
//     })
//     app.get('/eduuser/:ID', async (req,res) =>{
//       const genId = parseInt(req.params.ID);
//       const data = await client.$queryRaw`SELECT * FROM "education" WHERE id=${genId}`
//       return res.render("eduDetail", {eduDetail: data[0]})
//     })  
//     app.get('/edudele/:ID', async (req,res) =>{
//       const genId = parseInt(req.params.ID);
//       const data = await client.$queryRaw`DELETE FROM "education" WHERE id=${genId}`
//       res.redirect(`/education`)
//     })  
    
    
//     app.post('/edu/:ID', async (req, res) => {
//       const genId = parseInt(req.params.ID);
//       const name = req.body.name;
//       const job = req.body.job;
//       const year = req.body.year;
//       const des = req.body.description;
    
     
//       const updateedu = await client.$queryRaw`UPDATE "experience" SET name=${name}, job=${job},year=${year},description=${des} WHERE id = ${genId} `
//       return res.redirect(`/education`)
//     })   

// SKILLS
  // app.get('/skills', async(req, res) => {
  //   const data = await client.$queryRaw`SELECT * FROM "skill"`
  // return res.render('skill', {data:data})
  // })
  // app.get('/create-skill', async(req, res) => {
  
  //   res.render('skillcre')
  // })

  // app.post('/createskill', async(req,res) =>{
  //     const number = parseInt(req.body.number);
  //     const name = req.body.name;
  //     const percent = parseInt(req.body.percent);

  //     const createskill = await client.$queryRaw`INSERT INTO "skill" (number,name, percent) VALUES (${number}, ${name},${percent})`;
        
  //     return res.redirect(`/skills`)
  //     })

  // app.get('/skill/:ID', async (req,res) =>{
  //   const genId = parseInt(req.params.ID);
  //   const data = await client.$queryRaw`SELECT * FROM skill WHERE id=${genId}`
  //   console.log(data);
  //   return res.render("skillDetail", {skillDetail: data[0]})
  // })  
  //   app.get('/delet/:ID', async (req,res) =>{
  //     const genId = parseInt(req.params.ID);
  //     const data = await client.$queryRaw`DELETE FROM skill WHERE id=${genId}`
  //     res.redirect(`/skills`)
  //   })  


  //   app.post('/ski/:ID', async (req, res) => {
  //     const genId = parseInt(req.params.ID);
  //     const number = parseInt(req.body.number);
  //     const percent = parseInt(req.body.percent);
  //     const name = req.body.name;
        

    
  //     const updateskill = await client.$queryRaw`UPDATE skills SET number=${number},name=${name},percent=${percent} WHERE id = ${genId} `
  //     return res.redirect(`/skills`)
  //   })

// //WORKS
// app.get('/works', async(req, res) => {
//   const data = await client.$queryRaw`SELECT * FROM "works"`
//  return res.render('work', {data:data})
// })
// app.get('/create-work', async(req, res) => {
  
//   res.render('workcre')
// })

// app.post('/creatework',upload.single('image'), async(req,res) =>{
//     const title = req.body.title;
//     const project = req.body.project;
//     const image =  "assets/uploads/" + req.file.filename ;
//     const des = req.body.description;
//     const link = req.body.link;
//     const job = req.body.job;
//     const name = req.body.name;

    

//     const create = await client.$queryRaw`INSERT INTO "works" (title,project,image,description,link,job,name) VALUES (${title}, ${project},${image},${des},${link},${job},${name})`;
      
//     return res.redirect(`/works`)
//     })

//  app.get('/workuser/:ID', async (req,res) =>{
//     const genId = parseInt(req.params.ID);
//     const data = await client.$queryRaw`SELECT * FROM "works" WHERE id=${genId}`
//     console.log(data);
//     return res.render("workDetail", {workDetail: data[0]})
//   }) 
//  app.get('/workdele/:ID', async (req,res) =>{
//     const genId = parseInt(req.params.ID);
//     const data = await client.$queryRaw`DELETE FROM works WHERE id=${genId}`
//     res.redirect(`/works`)
//   })
   
//     app.post('/workk/:ID',upload.single('image'), async (req, res) => {
//       const title = req.body.title;
//     const project = req.body.project;
//     const image =  "assets/uploads/" + req.file.filename ;
//     const des = req.body.description;
//     const link = req.body.link;
//     const job = req.body.job;
//     const name = req.body.name;
//       const updateedu = await client.$queryRaw`UPDATE "works" SET title=${title}, project=${project},image=${image},description=${des},link=${link},job=${job},name=${name} WHERE id = ${genId} `
//       return res.redirect(`/works`)
//     })

// //CONTACT
// app.get('/contact', async(req, res) => {
//   const data = await client.$queryRaw`SELECT * FROM "contact"`
// return res.render('ctc', {data:data})
// })
// app.get('/create-ctc', async(req, res) => {

//   res.render('ctccre')
// })

// app.post('/createctc', async(req,res) =>{
//     const name = req.body.name;
//     const title = req.body.title;
//     const des = req.body.description;
//     const mail = req.body.mail;
//     const phone = parseInt(req.body.phone);

//     const createctc = await client.$queryRaw`INSERT INTO "contact" (name,title,description,mail,phone) VALUES ( ${name},${title},${des},${mail},${phone})`;
      
//     return res.redirect(`/contact`)
//     })

// app.get('/cont/:ID', async (req,res) =>{
//   const genId = parseInt(req.params.ID);
//   const data = await client.$queryRaw`SELECT * FROM contact WHERE id=${genId}`
//   console.log(data);
//   return res.render("ctcDetail", {ctcDetail: data[0]})
// })  
//   app.get('/ctdele/:ID', async (req,res) =>{
//     const genId = parseInt(req.params.ID);
//     const data = await client.$queryRaw`DELETE FROM contact WHERE id=${genId}`
//     res.redirect(`/contact`)
//   })  


//   app.post('/ctc/:ID', async (req, res) => {
//     const genId = parseInt(req.params.ID);
//     const name = req.body.name;
//     const title = req.body.title;
//     const des = req.body.description;
//     const mail = req.body.mail;
//     const phone = parseInt(req.body.phone);
      

  
//     const updateskill = await client.$queryRaw`UPDATE skills SET name=${name}, title=${title}, description=${des},mail=${mail}, phone=${phone} WHERE id = ${genId} `
//     return res.redirect(`/contact`)
//   })












app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })