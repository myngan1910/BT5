const express = require('express')
const router = express.Router();
const viewController = require('../controller/viewController.js')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './profile/assets/uploads')
    },
    filename: function (req, file, cb) {
      const suffix = file.mimetype.split('/');
      cb(null, `${file.fieldname}-${Date.now()}.${suffix[1]}`);
    }
  })

  const upload = multer({ storage: storage })


// router.get('/',viewController.getAdmin);


//user

router.get('/userInfo',viewController.getView);
router.get('/inuser/:ID',viewController.getViewUser );
router.get('/userdele/:ID',viewController.deleViewUser );
router.post('/uu/:ID', upload.fields([{name:'image'},{name:'icon'}]),viewController.upViewUser );

//PROFILE
router.get('/profile',viewController.getPro);
router.get('/create-pro',viewController.createPro);
router.post('/createpro', viewController.postPro);
router.get('/prouser/:ID',viewController.detailPro);
router.get('/prodele/:ID',viewController.delePro);
router.post('/prof/:ID',viewController.viewPro);

//EXPERIENCE
router.get('/experience',viewController.getExp);
router.get('/create-exp',viewController.createExp);
router.post('/createex', viewController.postExp);
router.get('/expuser/:ID',viewController.detailExp);
router.get('/expdele/:ID',viewController.deleExp);
router.post('/exper/:ID', viewController.viewExp);

// EDUCATION
router.get('/education',viewController.getEdu);
router.get('/create-edu',viewController.createEdu);
router.post('/createedu', viewController.postEdu);
router.get('/eduuser/:ID',viewController.detailEdu);
router.get('/edudele/:ID',viewController.deleEdu);
router.post('/edu/:ID', viewController.viewEdu);


//SKILLS
router.get('/skills',viewController.getSkill);
router.get('/create-skill',viewController.createskill);
router.post('/createskill', viewController.postskill);
router.get('/skill/:ID',viewController.detailskill);
router.get('/delet/:ID',viewController.deleskill);
router.post('/ski/:ID', viewController.viewskill);


//WORKS
router.get('/works',viewController.getWork);
router.get('/create-work',viewController.createWork);
router.post('/creatework',upload.single('image'), viewController.postWork);
router.get('/workuser/:ID',viewController.detailWork);
router.get('/workdele/:ID',viewController.deleWork);
router.post('/workk/:ID',upload.single('image'),viewController.viewWork);

// CONTACT
router.get('/contact',viewController.getCtc);
router.get('/create-ctc',viewController.createCtc);
router.post('/createctc', viewController.postCtc);
router.get('/cont/:ID',viewController.detailCtc);
router.get('/ctdele/:ID',viewController.deleCtc);
router.post('/ctc/:ID', viewController.viewCtc);

router.get('/social', viewController.getSocial)
router.get('/create-social',  viewController.createSocial)
router.post('/createsocial',upload.single('icon'), viewController.postSocial);
router.get('/so/:ID',viewController.detailSocial);
router.get('/socialdele/:ID',viewController.deleSocial);
router.post('/ss/:ID',upload.single('icon'), viewController.viewSocial);
module.exports = router;