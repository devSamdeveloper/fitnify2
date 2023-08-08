import mongoose from "mongoose";

const gymnasioSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    subscription: { type: Boolean, default: false },
    clients: [{ type: Array }],
    clases: [{ type: Array }],
    address: { type: String },
    phone: { type: String },
    subscriptionEndTime: { type: Date },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model ('Gymnasio', gymnasioSchema);