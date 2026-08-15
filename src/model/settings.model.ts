import mongoose, { model, Schema } from "mongoose";

interface iSettings {
  ownerId: string;
  businessName: string;
  supportEmail: string;
  knowledge: string;
}

const settingSchema = new Schema<iSettings>(
  {
    ownerId: { type: String, required: true, unique: true },
    businessName: { type: String, required: true },
    supportEmail: { type: String, required: true },
    knowledge: { type: String, required: true },
  },
  { timestamps: true },
);

const Settings = mongoose.models.Settings || model("Settings", settingSchema);

export default Settings;
