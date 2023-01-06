import mongoose from "mongoose";

// This is a demo model! Create your own model files in this directory to model your data.

const MeetingSchema = new mongoose.Schema({
  meeting: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

// This is important in serverless environments: Check if the model exists and otherwise create a new one.
// The model name is the first parameter you pass to mongoose.model()

export const Meeting =
  mongoose.models.Meeting ||
  mongoose.model("Meeting", MeetingSchema, "meetings");
