const {PrismaClient, Prisma} = require('@prisma/client');
const client = new PrismaClient();

module.exports = {
    getViews: async() => {
        const data = await client.user.findMany();
        return data;
     },
     getViewUser: async(genId) => {
        const dtUser = await client.user.findUnique({where: {id:genId}})
        return dtUser;
   },
    deleViewUser: async(genId) => {
        const deleUser = await client.user.deleteMany({where: {id:genId}})
        return deleUser;
},
    upViewUser: async(genId,name,job,newpsth,newp,title,info) => {
        const updateedu = await client.user.update.update({
            where: {id:genId},
            data: {
                name: name,
                job: job,
                image: newpsth,
                icon: newp,
                title: title,
                information: info
            }
        })
        return updateedu;
    },

    //PROFILE
    getPro: async() => {
        const data = await client.profile.findMany()
       return data;
   },
   postPro : async(tt,des) => {
    const create = await client.profile.create({
        data: {
            title: tt,
            description: des
        }
    })
    return create;
   },
   detailPro: async(genId) => {
       const data = await client.profile.findUnique ({ where: {id:genId}})
        return data;
   },
   delePro: async(genId) => {
       const data = await client.profile.deleteMany({where: {genId}})
       return data;

   },
   viewPro: async(genId,tt,des) => {
    const update = await client.profile.update({
        where: {id:genId},
        data: {
            title: tt,
            description: des
        }
    })
    return update;

   },

///experience
   getExp: async() => {
    const data = await client.experience.findMany()
    return data;
    },
    postExp : async(title,job,year,des) => {
        const create = await client.experience.create({
            data: {
                title: title,
                job: job,
                year: year,
                description: des
            }
        })
        return create;
    },
    detailExp: async(genId) => {
        const data = await client.experience.findUnique({where: {id:genId}})
        return data;
    },
    deleExp: async(genId) => {
        const data = await client.experience.deleteMany({where:{id:genId}})
        return data;

    },
    viewExp: async(genId,title,job,year,des) => {
        const updateedu = await client.experience.update({
            where: {id:genId},
            data: {
                title: title,
                job: job,
                year: year,
                description: des
            }
        })
        return updateedu;

    },

    // EDUCATION
    getEdu: async() => {
        const data = await client.education.findMany()
        return data;
   },
   postEdu : async(name,job,year,des) => {
    const create = await client.education.create({
        data: {
            uname: name,
            job: job,
            year: year,
            description: des
        }
    })
       return create;
   },
   detailEdu: async(genId) => {
       const data = await client.education.findUnique({
        where: {id:genId}
       })
       return data;
   },
   deleEdu: async(genId) => {
       const data = await client.education.deleteMany({where: {id:genId}})
       return data;
   },
   viewEdu: async(genId,name,job,year,des) => {
    const updateedu = await client.education.update({
        where: {id:genId},
        data: {
            uname: name,
            job: job,
            year: year,
            description: des
        }
    })
    return updateedu;
   },

    //SKILLS
    getSkill: async() => {
        const data = await client.skill.findMany()
        return data;
   },
   postskill : async(number,name,percent) => {
    const createskill = await client.skill.create({
        data: {
            number: number,
            name: name,
            percent: percent
        }
    })
    return createskill;
   },
   detailskill: async(genId) => {
        const data = await client.skill.findUnique({where:{id:genId}})
        return data;
   },
   deleskill: async(genId) => {
       const data = await client.skill.deleteMany({where:{id:genId}})
       return data;

   },
   deleskill: async(genId,number,name,percent) => {
    const updateskill = await client.skill.update({where:{id:genId},
    data: {
        name: name,
        number: number,
        percent: percent
    }})
    return updateskill;

   },

//WORKS
   getWork: async() => {
    const data = await client.works.findMany()
    return data;
},
    postWork : async(title,project,image,des,link,job,name) => {
        const create = await client.works.create({
            data: {
                title:title,
                project: project,
                image: image,
                description: des,
                link: link,
                job: job,
                name: name
            }
        })
        return create;
    },
    detailWork: async(genId) => {
        const data = await client.works.findUnique({where:{id:genId}})
        return data;
    },
    deleWork: async(genId) => {
        const data = await client.works.deleteMany({where:{id:genId}})
        return data;

    },
    viewWork: async(genId,title,project,image,des,link,job,name) => {
        const updateedu = await client.works.update({where:{id:genId},
        data: {
                title:title,
                project: project,
                image: image,
                description: des,
                link: link,
                job: job,
                name: name

        }})
        return updateedu;

    },
    //CONTACT

    getCtc: async() => {
        const data = await client.contact.findMany()
        return data;
    },
    postCtc : async(name,title,des,mail,phone) => {
        const createctc = await client.contact.create({
            data: {
                name:name,
                title: title,
                description: des,
                mail: mail,
                phone: phone
            }
        })
        return createctc;
    },
    detailCtc: async(genId) => {
     const data = await client.contact.findUnique({where:{id:genId}})
     return data;
     },
     deleCtc: async(genId) => {
         const data = await client.contact.deleteMany({where:{id:genId}})
         return data;
 
     },
     viewCtc: async(genId,name,title,des,mail,phone) => {
        const update = await client.contact.update({where:{id:genId},
        data: {
                name:name,
                title: title,
                description: des,
                mail: mail,
                phone: phone
        }})
        return update;
 
     },
     //SOCIAL

     getSocial: async() => {
        const data = await client.social.findMany()
        return data;
    },
    postSocial : async(name,newp,link) => {
        const create = await client.social.create({
            data: {
                name: name,
                icon: newp,
                link: link
            }
        })
        return create;
    },
    detailSocial: async(genId) => {
        const data = await client.social.findUnique({where:{id:genId}})
        return data;
        },
        deleSocial: async(genId) => {
            const data = await client.social.deleteMany({where:{id:genId}})
            return data;
    
        },
        viewSocial: async(genId,name,newp,link) => {
           const updateskill = await client.social.update({where:{id:genId},
        data: {
                name: name,
                icon: newp,
                link: link
        }})
           return updateskill;
    
        },

}