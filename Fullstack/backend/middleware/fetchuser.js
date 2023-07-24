const jwt = require('jsonwebtoken'); 

const JWT_SECRET = 'MusixOn8&VERIFYSIGNATURE';

const fetchuser = (req,res,next)=>{
    //Get the user from jwt toked and add id to req object
    const token = req.header('auth-token');
    if(!token){
        return res.status(401).send({error: "Please authenticate using a valid token"});
    }
    
    try {
        const data = jwt.verify(token,JWT_SECRET);
        req.user = data.user;
    } catch (error) {
        res.status(401).send({error: "Please authenticate using a valid token"});
    }
    //next() is used to pass controle to next middleware but in this case it will pass 
    //controle back to routes 
    next();
}

module.exports = fetchuser;