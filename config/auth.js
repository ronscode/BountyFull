module.exports = {
    authUser: (req, res, next) => {
        if(req.isAuthenticated()){
            return next();
        }
        res.status(400).send({msg: 'Must be logged in!'});
    }
}