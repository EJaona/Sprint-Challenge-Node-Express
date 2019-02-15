const express = require("express");
const actionDb = require("./data/helpers/actionModel");
const actionRouter = express.Router();

actionRouter.get("/:id", async (req, res) => {
  const action = await actionDb.get(req.params.id);
  res.status(200).json({ success: true, action });
});

actionRouter.post("/", async (req, res) => {
  const action = await actionDb.insert(req.body);
  res.status(200).json({ success: true, action });
});

actionRouter.put("/:id", async (req, res) => {
  const action = await actionDb.update(req.params.id, req.body);
  res.status(200).json({ success: true, action });
});

actionRouter.delete("/:id", async (req, res) => {
  const action = await actionDb.remove(req.params.id);
  res.status(200).json({ success: true, action });
});

module.exports = actionRouter;
