const userModel = require('../models/user.model.js')



module.exports.createUser = async({
    fullname, email, password
})=>{

        console.log(fullname, email, password);  
        
    if(!fullname || !email || !password){
        throw new Error('All fields are requried')
    }
    const {firstname, lastname} = fullname
    const user = userModel.create({
        email,
        fullname:{
            firstname,
            lastname
        },
        password
    })

    console.log(user);
    

    return user
}