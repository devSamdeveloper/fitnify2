import Rutina from "../models/rutins.model.mjs";

export const getRutines = async (req,res) => {
    const rutines = await Rutina.find({
        gym:req.gym.id
    });
    res.json(rutines);
};

export const getRutine = async (req,res) => {
    const rutine = await Rutina.findById(req.params.id);
    if(!rutine) return res.status(404).json({message:"Rutina no encontrada"});
    res.json(rutine);
};

export const createRutine = async (req,res) => {
    try {
        const {name,description,musculo,ejercicios} = req.body;
        const newRutine = new Rutina({
            name,
            description,
            musculo,
            ejercicios,
            gym: req.gym.id
        });
        const savedRutine = await newRutine.save();
        res.json(savedRutine);
    } catch (error) {
        console.log(error);
        res.json({message:"Ah ocurrido un error inesperado. Intentalo nuevamente. Si el error persiste, por favor reportalo con nosotros."})
    }
};

export const updateRutine = async (req,res) => {
    const rutine = await Rutina.findByIdAndUpdate(req.params.id, req.body, {new:true});
    if(!rutine) return res.status(404).json({message:"Rutina no encontrada"});
    res.json(rutine);
};

export const deleteRutine = async (req,res) => {
    const rutine = await Rutina.findByIdAndDelete(req.params.id);
    if(!rutine) return res.status(404).json({message:"Rutina no encontrada"});
    res.json(rutine);
};
