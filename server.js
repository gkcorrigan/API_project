import express from "express"
import config from "./config";
import router from "./routes";

const newServer = express();

newServer.use(express.json());
newServer.use("/results", router);


newServer.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

newServer.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});