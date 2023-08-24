import dotenv from 'dotenv'
dotenv.config()
import Gymnasio from "../models/gimnasios.model.mjs";
import bcrypt from 'bcryptjs';
import {createAccesToken} from "../libs/jwt.mjs"
import jwt from 'jsonwebtoken'



export const register = async (req, res) => {
    const { name , email ,password} = req.body;
    
    try {

        const gymFound = await Gymnasio.findOne({email});
        if (gymFound) return res.status(400).json(['El correo ingresado ya esta en uso'])

        const passwordHash = await bcrypt.hash (password, 10);
        const newGym = new Gymnasio({
            name,
            email,
            password: passwordHash,
        })
        const gymSaved = await newGym.save()

        const token = await createAccesToken({ id: gymSaved._id })
            res.cookie ('token', token)
            res.json( {
                id: gymSaved._id,
                name: gymSaved.name,
                email: gymSaved.email,
                cretedAt: gymSaved.createdAt,
                updatedAt: gymSaved.updatedAt,
            } )

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

export const login = async (req, res) => {
    const { email , password} = req.body;
    try {
        const gymFound = await Gymnasio.findOne({email});
        if(!gymFound) return res.status(400).json(["El usuario o la contraseña son incorrectos"]);


        const isMatch = await bcrypt.compare (password, gymFound.password);
        if(!isMatch) return res.status(400).json(["El usuario o la contraseña son incorrectos"])

        const token = await createAccesToken({ id: gymFound._id })
            res.cookie ('token', token, {
                sameSite: 'none',
                secure: true,
                httpOnly: false
            })
            res.json( {
                id: gymFound._id,
                name: gymFound.name,
                email: gymFound.email,
                cretedAt: gymFound.createdAt,
                updatedAt: gymFound.updatedAt,
            } )

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

export const logout = (req,res) => {
    res.cookie("token", "" , {expires: new Date(0)});
    return res.sendStatus(200);
}

export const dashboard = (req,res) => {
    res.send('Dashboard')
}

export const verifyToken = async (req, res) => {
    const { token } = req.cookies

    if (!token) return res.status(401).json({ message: 'No Autorizado' });

    let gymFound; // Declarar la variable gymFound fuera de la función de callback

    jwt.verify(token, process.env.TOKEN_SECRET, async (err, gym) => {
        if (err) return res.status(401).json({ message: 'No Autorizado' });
        console.log(err);
        gymFound = await Gymnasio.findById(gym.id); // Asignar un valor a gymFound dentro de la función de callback
        if (!gymFound) return res.status(401).json({ message: 'No Autorizado' });
        console.log(gymFound);

        return res.json({
            id: gymFound._id,
            name: gymFound.name,
            email: gymFound.email
        });
    });
}