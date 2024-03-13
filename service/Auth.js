const jwt = require("jsonwebtoken")

const secretKey = 'Suhana123456';

function generateToken(user)
{
    const payload = {
        id: user._id,
        email: user.email
    };

    const token = jwt.sign(payload, secretKey);
    return token;
    
}

function verifyToken(token){

    const user = jwt.verify(token, secretKey, (err, decoded) => { if (err) {
        console.error('JWT verification failed:', err.message);
    } else {
        console.log('Decoded JWT payload:', decoded);
        return decoded;
    }
    });
}

function decodedToken(token){
    const decoded = jwt.decode(token);
    return decoded;
}


module.exports = {generateToken,verifyToken,decodedToken}