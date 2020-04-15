const connection = require('../database/connection');
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

module.exports = {

    async create ( req,res,next ) {
        
        const { username, pass } = req.body;          
        
        /*verifico se o usuário está cadastrado no banco 
        com base nos parametros passados na requisição*/
        const user = await connection.select('*')
                                     .from('users')
                                     .where('name',username)
                                     .andWhere('password',pass)
                                     .first();

        /*Se o usuário não for localizado, retorno mensagem de erro, 
        caso contrário válido usuário e senha e atribuo um token*/
        if(!user){
            return res.status(500).send({error: 'Login Inválido !',auth: false, token: null })
        } else {           
            if (username === user.name && pass === user.password){
                const acessToken = jwt.sign({ user }, process.env.SECRET,{expiresIn: 6000});
                return res.status(200).send({ auth: true, token: acessToken});
            }
               return res.status(500).send({ auth: false, token: null });      
        }       
    },
    
    logout ( req, res, next ) {
       return  res.status(200).send({ auth: false, token: null });
    },
};      