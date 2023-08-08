import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'

export const authRequired = (req,res,next) => {
    const {token} = req.cookies

    if(!token) 
    return res.status(401).json({message: 'Debes loguearte para ingresar'})

    jwt.verify(token, process.env.TOKEN_SECRET, (err,gym) => {
        if (err) return res.status(403).json({message: 'Credenciales incorrectas'});
        req.gym = gym;
        next();
    })
}