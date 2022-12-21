import mongoose from "mongoose";

// This is a demo model! Create your own model files in this directory to model your data.

const ProjectSchema = new mongoose.Schema({
  projectname: {
    type: String,
    required: true,
  },
  columns: {
    type: Object,
    required: true,
  },
});

// This is important in serverless environments: Check if the model exists and otherwise create a new one.
// The model name is the first parameter you pass to mongoose.model()

export const Project =
  mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema, "projects");
