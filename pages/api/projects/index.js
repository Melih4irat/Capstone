// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// This is a demo route to demonstrate DB connectivity. Create your own routes following this scheme.

import connectDB from "../_db/connect-db";
import {Project} from "../_db/models/Project";

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const projects = await Project.find({});
        res.status(200).json(projects);
      } catch (error) {
        console.log(error);
        // You can inspect the error and return more meaningful error messages...
        res.status(500).json({error: "something went wrong"});
      }
      break;
    case "POST":
      try {
        const newProject = new Project({
          projectname: req.body.projectname,
          toDo: [],
          WiP: [],
          Done: [],
        });
        await newProject.save();
        res.status(200).json(newProject);
      } catch (error) {
        res.status(500).json({error: error.message});
      }
      break;

    case "DELETE":
      try {
        const ID = JSON.parse(req.body);
        console.log(ID);
        const deletedProject = await Project.findByIdAndDelete(ID.id);
        return res
          .status(200)
          .json({message: `Project ${deletedProject.projectname} deleted`});
      } catch (error) {
        return res.status(500).json({error: error.message});
      }

    case "PUT":
    case "PATCH":
      try {
        console.log(req.body);
        const updatedProject = await Project.updateOne(
          {projectname: req.body.projectname},
          {columns: req.body.columns}
        );
        return res
          .status(200)
          .json({message: `Project ${updatedProject.projectname} updated`});
      } catch (error) {
        return res.status(500).json({error: error.message});
      }
    default:
      res.status(405).json({error: "method not allowed"});
  }
}

export default connectDB(handler);
