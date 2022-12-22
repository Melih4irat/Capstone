import connectDB from "../_db/connect-db";
import {Project} from "../_db/models/Project";

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const project = await Project.findById(req.query.projectid);
        if (project) {
          return res.status(200).json(project);
        } else {
          return res.status(404).json({error: "product not found"});
        }
      } catch (error) {
        return res.status(500).json({error: error.message});
      }

    case "DELETE":
      try {
        const deletedProject = await Project.findByIdAndDelete(
          req.query.projectid
        );
        return res
          .status(200)
          .json({message: `Product ${deletedProject.name} deleted`});
      } catch (error) {
        return res.status(500).json({error: error.message});
      }
    default:
      return res.status(400).json({error: "method not supported"});
  }
}

export default connectDB(handler);
