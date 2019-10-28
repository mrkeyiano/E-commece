const jwt = require('jsonwebtoken');

process.env.JWT_KEY = '111118765'
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);  
        req.userData = decoded;
        next(); 
    } catch (err) {
        return res.status(401).json({
            message: 'Not Allowed/ You are not autorized'
        });
    }
};