import mongoose from "mongoose";

const ejercicioSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    especificaciones: { type: String},
    imagenUrl: { type: String },
    videoUrl: { type: String }
  },
);

export default mongoose.model ('Ejercicio', ejercicioSchema);