import express from "express";

import resultsRouter from "./results.route";


const router = express.Router();


router.use("/results", resultsRouter);

router.get("/test", (req, res) => {
  res.send("working");
});



export default router;
