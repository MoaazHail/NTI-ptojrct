const User = require('../Models/user.Model');
const hashing = require('../Utiliy/hashing');
const auth = require('../Utiliy/auth');



exports.addNewUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const hashedPassword = await hashing.hashPassword(password);

        const user = await User.create({ email, password: hashedPassword });
        res.status(201).json(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
};


exports.logIn = async (req,res)=>{
    try
    {
        const {email,password}= req.body;
        const user = await User.findOne({email});
        if(!user){
            res.status(400).send('wrong email');
        }
        const isMatch = await hashing.isMatch(password,user.password);
        
        if(isMatch === true){
            const token = auth.createToken({id:user.id,name:user.name});
            res.status(200).json(token);
        }
        else{
            res.status(400).send('wrong email or password')
        } 
    } 
    catch(err){
        res.status(500).send(err.message);
    }
}

exports.getUsers = async (req,res)=>{
    try
    {
    const users = await User.find();
    res.status(200).json(users);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}