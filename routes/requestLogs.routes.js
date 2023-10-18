import express from "express";
import ResultsController from "../controllers/results.controller.js";


const requestLogsRouter = express.Router();

requestLogsRouter.get('/', async (req, res) => {
  try {
    const requestLogs = await ResultsController.getRequestLogs();
    res.json(requestLogs);
  } catch (error) {
    console.error('Internal Error fetching request logs:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default requestLogsRouter;
