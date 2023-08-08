import Gymnasio from "../models/gimnasios.model.mjs";
import bcrypt from 'bcryptjs';
import {createAccesToken} from "../libs/jwt.mjs"


export const register = async (req, res) => {
    const { name , email ,password} = req.body;
    try {
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
        if(!gymFound) return res.status(400).json({message: "El usuario o la contraseña son incorrectos"});


        const isMatch = await bcrypt.compare (password, gymFound.password);
        if(!isMatch) return res.status(400).json({message: "El usuario o la contraseña son incorrectos"})

        const token = await createAccesToken({ id: gymFound._id })
            res.cookie ('token', token)
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