import Ejercicio from "../models/ejercicios.model.mjs";

export const getEjercicios = async (req,res) => {
    const ejercicios = await Ejercicio.find({
        gym:req.gym.id
    });
    res.json(ejercicios);
};

export const getEjercicio = async (req,res) => {
    const ejercicio = await Ejercicio.findById(req.params.id);
    if(!ejercicio) return res.status(404).json({message:"Ejercicio no encontrado"});
    res.json(ejercicio);
};

export const createEjercicio = async (req,res) => {
    try {
        const {name,especificaciones,imagenUrl,videoUrl} = req.body;
        const newEjercicio = new Ejercicio({
            name,
            especificaciones,
            imagenUrl,
            videoUrl,
            gym: req.gym.id
        });
        const savedEjercicio = await newEjercicio.save();
        res.json(savedEjercicio);
    } catch (error) {
        console.log(error);
        res.json({message:"Ah ocurrido un error inesperado. Intentalo nuevamente. Si el error persiste, por favor reportalo con nosotros."})
    }
};

export const updateEjercicio = async (req,res) => {
    const ejercicio = await Ejercicio.findByIdAndUpdate(req.params.id, req.body, {new:true});
    if(!ejercicio) return res.status(404).json({message:"Ejercicio no encontrado"});
    res.json(ejercicio);
};

export const deleteEjercicio = async (req,res) => {
    const ejercicio = await Ejercicio.findByIdAndDelete(req.params.id);
    if(!ejercicio) return res.status(404).json({message:"Ejercicio no encontrado"});
    res.json(ejercicio);
};