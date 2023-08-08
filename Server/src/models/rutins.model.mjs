import mongoose from "mongoose";

const rutineSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String},
    musculo: { type: String },
    ejercicios: [{ type: Array }],
    gym: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Gymnasio',
      required: true
    }
  },
);

export default mongoose.model ('Rutina', rutineSchema);