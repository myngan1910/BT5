const express = require('express')
const app = express()
const userModel = require('../model/viewModel.js')

module.exports = {
  
    getStyle: async(req,res) => {
        res.render('styles')
    },
    getUser: async(req,res) => {
        const user = await userModel. getViews();
        const profile = await userModel.getPro();
        const exp = await userModel.getExp();
        const education = await userModel.getEdu();
        const skill = await userModel.getSkill();
        const works = await userModel.getWork();
        const ctc = await userModel.getCtc();
        const social = await userModel.getSocial();
        res.render('index',{userInfo:user[0],pro:profile, exp:exp,education:education, skill:skill,  work:works, contact:ctc,social:social })
    }
}