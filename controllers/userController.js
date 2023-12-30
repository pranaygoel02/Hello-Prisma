const prisma = require('../prisma/index')
const cookieToken = require('../utils/cookieToken')

// user signup

exports.signup = async (req, res, next) => {
    try{
        const {name, email, password} = req.body;
        if(!name || !email || !password) {
            throw new Error('Please fill all the fields');
        }
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        });
        cookieToken(user, res);
    }
    catch(err){
        throw new Error(err);
    }
}