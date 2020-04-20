require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

module.exports = {

verifyToken( req,res,next ){

const authHeader = req.headers.authorization;

if(authHeader){
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.SECRET, (err, user) => {
        if(err){
            return res.status(403).send({ auth: false, message: 'Falha na Autenticação' });
        }
        req.user = user;
        next();
    });
} else {
    res.status(401).send({ auth: false, message: 'Token não localizado !' });
    }
}

};
