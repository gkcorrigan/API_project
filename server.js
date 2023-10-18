import express from "express"
import config from "./config";
import router from "./routes";
import query from "./config/db.query";
import requestLogsRouter from "./routes/requestLogs.routes";

const newServer = express();

newServer.use(express.json());

const logRequest = async (req, res, next) => {
  try {
    const method = req.method;
    const endpoint = req.originalUrl;

    await query('INSERT INTO request_logs (method, endpoint) VALUES (?,?)', [method, endpoint]);
    next();
  } catch (error) {
    next(error);
  }
};

newServer.use(logRequest);


newServer.use("/api", router);

newServer.use("/api/request-logs", requestLogsRouter);


newServer.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });

  if (err.name == "NotFoundError") {
    res.status(404).send('No Error Found')
  } else {
    res.status(500).send('Internal Server Error')
  }
});

newServer.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});