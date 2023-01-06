// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// This is a demo route to demonstrate DB connectivity. Create your own routes following this scheme.

import connectDB from "../_db/connect-db";
import {Meeting} from "../_db/models/Meeting";

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const meetings = await Meeting.find({});
        res.status(200).json(meetings);
      } catch (error) {
        console.log(error);
        // You can inspect the error and return more meaningful error messages...
        res.status(500).json({error: "something went wrong"});
      }
      break;
    case "POST":
      try {
        const newMeeting = new Meeting({
          meeting: req.body.meeting,
          description: req.body.description,
          date: req.body.date,
          time: req.body.time,
        });
        await newMeeting.save();
        res.status(200).json(newMeeting);
      } catch (error) {
        res.status(500).json({error: error.message});
      }
      break;

    case "DELETE":
      try {
        const ID = JSON.parse(req.body);
        console.log(ID);
        const deletedMeeting = await Meeting.findByIdAndDelete(ID.id);
        return res
          .status(200)
          .json({message: `Meeting ${deletedMeeting.meeting} deleted`});
      } catch (error) {
        return res.status(500).json({error: error.message});
      }

    case "PUT":
    case "PATCH":
  }
}

export default connectDB(handler);
