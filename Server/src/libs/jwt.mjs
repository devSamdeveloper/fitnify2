import dotenv from 'dotenv';
dotenv.config()
import jwt from 'jsonwebtoken'

export function createAccesToken (payload) {

    return new Promise((resolve,reject)=>{
        jwt.sign(
            payload, 
            process.env.TOKEN_SECRET, 
            {
                expiresIn: "8760h"
            }, 
            
            (err,token) => {
                if(err) reject(err)
                resolve(token)
            } 
        );
    })

}

