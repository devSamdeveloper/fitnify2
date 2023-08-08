import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, trim: true},
    isMonthPay: { type: Boolean, default: false },
    rutine: [{ type: Array }],
    address: { type: String },
    phone: { type: String },
    subscriptionEndTime: { type: Date },
    gym: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Gymnasio',
      required: true
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model ('Cliente', clientSchema);