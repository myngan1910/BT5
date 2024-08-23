const {PrismaClient, Prisma} = require('@prisma/client');
const { getView, deleViewUser, viewEdu, getWork, postWork, detailWork, deleWork, viewWork, deleSocial } = require('../controller/viewController');
const client = new PrismaClient();

module.exports = {
    getViews: async() => {
        const data = await client.$queryRaw`SELECT * FROM "user"`
        return data;
     },
     getViewUser: async(genId) => {
        const dtUser = await client.$queryRaw`SELECT * FROM "user" WHERE id=${genId}`
        return dtUser;
   },
    deleViewUser: async(genId) => {
        const deleUser = await client.$queryRaw`DELETE FROM user WHERE id=${genId}`
        return deleUser;
},
    upViewUser: async(genId,name,job,newpsth,newp,title,info) => {
        const updateedu = await client.$queryRaw`UPDATE "user" SET name=${name}, job=${job},image=${newpsth},icon=${newp},title=${title},information=${info} WHERE id = ${genId} `
        return updateedu;
    },

    //PROFILE
    getPro: async() => {
        const data = await client.$queryRaw`SELECT * FROM "profile"`
       return data;
   },
   postPro : async(tt,des) => {
    const create = await client.$queryRaw`INSERT INTO "profile" (title,description) VALUES ( ${tt},${des})`;
    return create;
   },
   detailPro: async(genId) => {
       const data = await client.$queryRaw`SELECT * FROM "profile" WHERE id=${genId}`
        return data;
   },
   delePro: async(genId) => {
       const data = await client.$queryRaw`DELETE FROM "profile" WHERE id=${genId}`
       return data;

   },
   viewPro: async(genId,tt,des) => {
    const update = await client.$queryRaw`UPDATE "profile" SET title=${tt}, description=${des} WHERE id = ${genId} `
    return update;

   },

///experience
   getExp: async() => {
    const data = await client.$queryRaw`SELECT * FROM "experience"`
    return data;
    },
    postExp : async(title,job,year,des) => {
        const create = await client.$queryRaw`INSERT INTO "experience" (title,job,year, description) VALUES ( ${title},${job},${year},${des})`;
        return create;
    },
    detailExp: async(genId) => {
        const data = await client.$queryRaw`SELECT * FROM "experience" WHERE id=${genId}`
        return data;
    },
    deleExp: async(genId) => {
        const data = await client.$queryRaw`DELETE FROM "experience" WHERE id=${genId}`
        return data;

    },
    viewExp: async(genId,title,job,year,des) => {
        const updateedu = await client.$queryRaw`UPDATE "experience" SET title=${title}, job=${job},year=${year},description=${des} WHERE id = ${genId} `
        return updateedu;

    },

    // EDUCATION
    getEdu: async() => {
        const data = await client.$queryRaw`SELECT * FROM "education"`
        return data;
   },
   postEdu : async(name,job,year,des) => {
    const create = await client.$queryRaw`INSERT INTO "education" (uname,job,year, description) VALUES ( ${name},${job},${year},${des})`;
       return create;
   },
   detailEdu: async(genId) => {
       const data = await client.$queryRaw`SELECT * FROM education WHERE id=${genId}`
       return data;
   },
   deleEdu: async(genId) => {
       const data = await client.$queryRaw`DELETE FROM education WHERE id=${genId}`
       return data;
   },
   viewEdu: async(genId,name,job,year,des) => {
    const updateedu = await client.$queryRaw`UPDATE "experience" SET uname=${name}, job=${job},year=${year},description=${des} WHERE id = ${genId} `
    return updateedu;
   },

    //SKILLS
    getSkill: async() => {
        const data = await client.$queryRaw`SELECT * FROM "skill"`
        return data;
   },
   postskill : async(number,name,percent) => {
    const createskill = await client.$queryRaw`INSERT INTO "skill" (number,name, percent) VALUES (${number}, ${name},${percent})`;
    return createskill;
   },
   detailskill: async(genId) => {
        const data = await client.$queryRaw`SELECT * FROM skill WHERE id=${genId}`
        return data;
   },
   deleskill: async(genId) => {
       const data = await client.$queryRaw`DELETE FROM skill WHERE id=${genId}`
       return data;

   },
   deleskill: async(genId,number,name,percent) => {
    const updateskill = await client.$queryRaw`UPDATE skill SET number=${number},name=${name},percent=${percent} WHERE id = ${genId} `
    return updateskill;

   },

//WORKS
   getWork: async() => {
    const data = await client.$queryRaw`SELECT * FROM "works"`
    return data;
},
    postWork : async(title,project,image,des,link,job,name) => {
        const create = await client.$queryRaw`INSERT INTO "works" (title,project,image,description,link,job,name) VALUES (${title}, ${project},${image},${des},${link},${job},${name})`;
        return create;
    },
    detailWork: async(genId) => {
        const data = await client.$queryRaw`SELECT * FROM "works" WHERE id=${genId}`
        return data;
    },
    deleWork: async(genId) => {
        const data = await client.$queryRaw`DELETE FROM works WHERE id=${genId}`
        return data;

    },
    viewWork: async(genId,title,project,image,des,link,job,name) => {
        const updateedu = await client.$queryRaw`UPDATE "works" SET title=${title}, project=${project},image=${image},description=${des},link=${link},job=${job},name=${name} WHERE id = ${genId} `
        return updateedu;

    },
    //CONTACT

    getCtc: async() => {
        const data = await client.$queryRaw`SELECT * FROM "contact"`
        return data;
    },
    postCtc : async(name,title,des,mail,phone) => {
        const createctc = await client.$queryRaw`INSERT INTO "contact" (name,title,description,mail,phone) VALUES ( ${name},${title},${des},${mail},${phone})`;
        return createctc;
    },
    detailCtc: async(genId) => {
     const data = await client.$queryRaw`SELECT * FROM "contact" WHERE id=${genId}`
     return data;
     },
     deleCtc: async(genId) => {
         const data = await client.$queryRaw`DELETE FROM "contact" WHERE id=${genId}` 
         return data;
 
     },
     viewCtc: async(genId,name,title,des,mail,phone) => {
        const updateskill = await client.$queryRaw`UPDATE contact SET name=${name}, title=${title}, description=${des},mail=${mail}, phone=${phone} WHERE id = ${genId} `
        return updateskill;
 
     },
     //SOCIAL

     getSocial: async() => {
        const data = await client.$queryRaw`SELECT * FROM "social"`
        return data;
    },
    postSocial : async(name,newp,link) => {
        const create = await client.$queryRaw`INSERT INTO "social" (name,icon,link) VALUES ( ${name},${newp},${link})`;
        return create;
    },
    detailSocial: async(genId) => {
        const data = await client.$queryRaw`SELECT * FROM "social" WHERE id=${genId}`
        return data;
        },
        deleSocial: async(genId) => {
            const data = await client.$queryRaw`DELETE FROM "social" WHERE id=${genId}` 
            return data;
    
        },
        viewSocial: async(genId,name,newp,link) => {
           const updateskill = await client.$queryRaw`UPDATE social SET name=${name}, icon=${newp},link=${link} WHERE id = ${genId} `
           return updateskill;
    
        },

}