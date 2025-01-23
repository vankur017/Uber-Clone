const userModel = require('../models/user.model')
const userService = require('../services/user.service')
const {validationResult} = require('express-validator')
const blackListTokenModel = require('../models/blackListToken.model')

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);

    const { fullname, email, password } = req.body;
    console.log(fullname, email, password)

    if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Validation error', errors: errors.array() });
    }

    const isUserAlreadyExists = await userModel.findOne({ email });

    if (isUserAlreadyExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname
        },
        email,
        password: hashPassword
    });
    console.log(user);
    

    const token = user.generateAuthToken();

    return res.status(201).json({ token, user });
};

module.exports.loginUser = async(req, res, next)=>{

    const errors = validationResult(req)
    console.log(errors);
    
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {email, password} = req.body
    const user = await userModel.findOne({email}).select('+password')

       console.log(user);
    
 
    if(!user){
        return res.status(401).json({message: 'Invalid Email or Password'})
    }

    const isMatch = await user.comparePassword(password)

    if(!isMatch){
        return res.status(401).json({message: 'Invalid Email or Password'})
    }

    const token = user.generateAuthToken()

    res.cookie('token', token)

    res.status(200).json({token, user})
}

module.exports.getUserProfile = async(req, res, next)=>{

        res.status(200).json(req.user)
}

module.exports.logoutUser = async(req, res, next)=>{

    res.clearCookie('token')
    
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    
    await blackListTokenModel.create({token})

    res.status(200).json({message: 'Logged out successfully'})
}