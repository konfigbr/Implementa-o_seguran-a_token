

module.exports = {
    create (req, res, next){
        const gatos = ['angora','vira-lata']
       return res.status(200).send(gatos);
    }

};