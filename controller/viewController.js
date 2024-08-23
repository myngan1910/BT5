const { getUser } = require('../../BT3/controller/userController.js')
const ViewModel = require('../model/viewModel.js')

module.exports = {
//     getAdmin: async(req,res) => {
//         res.render('user')
// },

getView: async(req,res) => {
    const listView = await ViewModel.getViews();
    return res.render('user', {data:listView})
},
getViewUser: async(req,res) => {
    const genId = parseInt(req.params.ID);
    const getlist = await ViewModel.getViewUser(genId);
    return res.render("userDetail", {userDetail: getlist[0]})

},
deleViewUser: async(req,res) => {
    const genId = parseInt(req.params.ID);
    const delelist = await ViewModel.deleViewUser(genId);
    res.redirect(`/admin/userInfo`)
},
upViewUser: async(req,res) => {
    const genId = parseInt(req.params.ID);
    const name = req.body.name;
    const job = req.body.job;
    const newpsth= "assets/uploads/" + req.files.image[0].filename
    const newp= "assets/uploads/" + req.files.icon[0].filename
    const title = req.body.title;
    const info = req.body.information;
  const upUser = await ViewModel.upViewUser(genId,name,job,newpsth,newp,title,info);
  return res.redirect(`/admin/userInfo`)

},
//PROFILE
getPro: async(req,res) =>{
    const dtPro = await ViewModel.getPro();
    return res.render('pro', {data:dtPro})
},
createPro: async(req,res) => {
    res.render('procre')
},
postPro:  async(req,res) => {
    const tt = req.body.title;
    const des = req.body.description;
    
    const createPro =  await ViewModel.postPro(tt,des);
    res.redirect(`/admin/profile`)
  

},
detailPro: async(req,res) => {
   
    const genId = parseInt(req.params.ID);
    const detailPro=  await ViewModel.detailPro(genId)
    return res.render("proDetail", {proDetail: detailPro[0]})
  
  
    
  
  
   
},
delePro: async(req,res) => {
    const genId = parseInt(req.params.ID);
 
    const delePro =  await ViewModel.delePro(genId)
    res.redirect(`/admin/profile`)
    
},
viewPro: async(req,res) => {
    const genId = parseInt(req.params.ID);
    const tt = req.body.title;
    const des = req.body.description;
    
    
    

    const viewPro =  await ViewModel.viewPro(genId,tt,des)
    return res.redirect(`/admin/profile`)
},


///experience
getExp: async(req,res) =>{
    const dtExp = await ViewModel.getExp();
    
    return res.render('exp', {data:dtExp})
},
createExp: async(req,res) => {
    res.render('expcre')
},
postExp:  async(req,res) => {
    const title = req.body.title;
    const job = req.body.job;
    const year = req.body.year;
    const des = req.body.description;
    const createExp =  await ViewModel.postExp(title,job,year,des);

  
 res.redirect(`/admin/experience`)
},
detailExp: async(req,res) => {
    const genId = parseInt(req.params.ID);
    const detailExp=  await ViewModel.detailExp(genId)
    return res.render("expDetail", {expDetail: detailExp[0]})
  
  
   
},
deleExp: async(req,res) => {
    const genId = parseInt(req.params.ID);
    const deleExp =  await ViewModel.deleExp(genId)
    res.redirect(`/admin/experience`)
    
},
viewExp: async(req,res) => {
    const genId = parseInt(req.params.ID);
    const title = req.body.title;
    const job = req.body.job;
    const year = req.body.year;
    const des = req.body.description;
    const viewExp =  await ViewModel.viewExp(genId,title,job,year,d)
  return res.redirect(`/admin/experience`)
},

// EDUCATION
getEdu: async(req,res) => {
    const data = await ViewModel.getEdu();
    return res.render('edu', {data:data})
},
createEdu: async(req,res) => {
    res.render('educre')
},
postEdu:  async(req,res) => {
    const name = req.body.uname;
    const job = req.body.job;
    const year = req.body.year;
    const des = req.body.description;
    const createEdu =  await ViewModel.postEdu(name,job,year,des);
    return res.redirect(`/admin/education`)
},
detailEdu: async(req,res) => {
    const genId = parseInt(req.params.ID);
    const detailEdu =  await ViewModel.detailEdu(genId)
    return res.render("eduDetail", {eduDetail: detailEdu[0]})
},
deleEdu: async(req,res) => {
    const genId = parseInt(req.params.ID);
    const deleEdu =  await ViewModel.deleEdu(genId)

   res.redirect(`/admin/education`)
},
viewEdu: async(req,res) => {
    const genId = parseInt(req.params.ID);
    const name = req.body.uname;
    const job = req.body.job;
    const year = req.body.year;
    const des = req.body.description;
    const createEdu =  await ViewModel.viewEdu(genId,name,job,year,des);
    return res.redirect(`/admin/education`)


},
// SKILLS
getSkill: async(req,res) => {
    const data = await ViewModel.getSkill();
    return res.render('skill', {data:data})
},
createskill: async(req,res) => {
    res.render('skillcre')
},
postskill:  async(req,res) => {
    const number = parseInt(req.body.number);
    const name = req.body.name;
    const percent = parseInt(req.body.percent);
    const createskill =  await ViewModel.postskill(number,name,percent);
    
    return res.redirect(`/admin/skills`)
},
detailskill: async(req,res) => {
   
    const genId = parseInt(req.params.ID);
    const detailskill=  await ViewModel.detailskill(genId)
    return res.render("skillDetail", {skillDetail: detailskill[0]})
  
   
},
deleskill: async(req,res) => {
    const genId = parseInt(req.params.ID);
    const deleskill =  await ViewModel.deleskill(genId)
    
    res.redirect(`/admin/skills`)
},
viewskill: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const number = parseInt(req.body.number);
        const name = req.body.name;
        const percent = parseInt(req.body.percent);
        const viewkill =  await ViewModel.viewskill(genId,number,name,percent)

  
    return res.redirect(`/admin/skills`)
},

// WORKS
getWork: async(req,res) =>{
    const data = await ViewModel.getWork();
    return res.render('work', {data:data})
},
createWork: async(req,res) => {
    res.render('workcre')
},
postWork:  async(req,res) => {
    const title = req.body.title;
    const project = req.body.project;
    const image =  "assets/uploads/" + req.file.filename ;
    const des = req.body.description;
    const link = req.body.link;
    const job = req.body.job;
    const name = req.body.name;
     
    const createPort =  await ViewModel.postWork(title,project,image,des,link,job,name);
    res.redirect(`/admin/works`)
},
detailWork: async(req,res) => {
    const genId = parseInt(req.params.ID);
   
    const detailport=  await ViewModel.detailWork(genId)
    return res.render("workDetail", {workDetail: data[0]})
   
},
deleWork: async(req,res) => {
    const genId = parseInt(req.params.ID);
    const delePro =  await ViewModel.deleWork(genId)
    res.redirect(`/admin/work`)
},
viewWork: async(req,res) => {
    const genId = parseInt(req.params.ID);
    const title = req.body.title;
    const project = req.body.project;
    const image =  "assets/uploads/" + req.file.filename ;
    const des = req.body.description;
    const link = req.body.link;
    const job = req.body.job;
    const name = req.body.name;
   
    const viewPro =  await ViewModel.viewPort(genId,title,project,image,des,link,job,name)
    return res.redirect(`/admin/works`)
},

//CONTACT
getCtc: async(req,res) =>{
    const data = await ViewModel.getCtc();
    return res.render('ctc', {data:data})
},
createCtc: async(req,res) => {
    res.render('ctccre')
},
postCtc:  async(req,res) => {
    const name = req.body.name;
    const title = req.body.title;
    const des = req.body.description;
    const mail = req.body.mail;
    const phone = parseInt(req.body.phone);
    const createCtc =  await ViewModel.postCtc(name,title,des,mail,phone);
      
     res.redirect(`/admin/contact`)
    
   
   
  

},
detailCtc: async(req,res) => {
    const genId = parseInt(req.params.ID);
    const detailCtc =  await ViewModel.detailCtc(genId)
    return res.render("ctcDetail", {ctcDetail: detailCtc[0]})
},
deleCtc: async(req,res) => {
    const genId = parseInt(req.params.ID);
    const deleCtc =  await ViewModel.deleCtc(genId)
    res.redirect(`/admin/contact`)
    
},
viewCtc: async(req,res) => {
    const genId = parseInt(req.params.ID);
    const name = req.body.name;
    const title = req.body.title;
    const des = req.body.description;
    const mail = req.body.mail;
    const phone = parseInt(req.body.phone);
   
    const viewCt =  await ViewModel.viewCtc(genId,name,title,des,mail,phone)
    return res.redirect(`/admin/contact`)
},
// SOCIAL
getSocial: async(req,res) =>{
    const data = await ViewModel.getSocial();
    return res.render('social', {data:data})
},
createSocial: async(req,res) => {
    res.render('socialcre')
},
postSocial:  async(req,res) => {
    const name = req.body.name;
    const newp= "assets/uploads/" + req.file.filename ;
    const link = req.body.link;
    
    const createCtc =  await ViewModel.postSocial(name,newp,link);
      
     res.redirect(`/admin/social`)
},
detailSocial: async(req,res) => {
    const genId = parseInt(req.params.ID);
    const detailCtc =  await ViewModel.detailSocial(genId)
    return res.render("socialDetail", {socialDetail: detailCtc[0]})
},
deleSocial: async(req,res) => {
    const genId = parseInt(req.params.ID);
    const deleCtc =  await ViewModel.deleSocial(genId)
    res.redirect(`/admin/social`)
    
},
viewSocial: async(req,res) => {
    const genId = parseInt(req.params.ID);
    const name = req.body.name;
    const newp= "assets/uploads/" + req.file.filename ;
    const link = req.body.link;
    const viewCt =  await ViewModel.viewSocial(genId,name,newp,link)
    return res.redirect(`/admin/social`)
},
}