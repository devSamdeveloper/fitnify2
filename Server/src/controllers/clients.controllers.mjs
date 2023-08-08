import Cliente from "../models/clients.model.mjs";

export const getClients = async (req,res) => {
    const clients = await Cliente.find({
        gym:req.gym.id
    });
    res.json(clients);
};

export const getClient = async (req,res) => {
    const client = await Cliente.findById(req.params.id);
    if(!client) return res.status(404).json({message:"Cliente no encontrado"});
    res.json(client);
};

export const createClient = async (req,res) => {
    try {
        const {name,age,isMonthPay,rutine,address,phone,subscriptionEndTime} = req.body;
        const newClient = new Cliente({
            name,
            age,
            isMonthPay,
            rutine,
            address,
            phone,
            subscriptionEndTime,
            gym: req.gym.id
        });
        const savedClient = await newClient.save();
        res.json(savedClient);
    } catch (error) {
        console.log(error);
        res.json({message:"Ah ocurrido un error inesperado. Intentalo nuevamente. Si el error persiste, por favor reportalo con nosotros."})
    }
};

export const updateClient = async (req,res) => {
    const client = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new:true});
    if(!client) return res.status(404).json({message:"Cliente no encontrado"});
    res.json(client);
};

export const deleteClient = async (req,res) => {
    const client = await Cliente.findByIdAndDelete(req.params.id);
    if(!client) return res.status(404).json({message:"Cliente no encontrado"});
    res.json(client);
};

