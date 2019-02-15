const express = require("express");
const projectDb = require("./data/helpers/projectModel");
const projectRouter = express.Router();

projectRouter.get("/:id", async (req, res) => {
  const action = await projectDb.get(req.params.id);
  res.status(200).json({ success: true, action });
});
projectRouter.get("/:id/actions", async (req, res) => {
  const action = await projectDb.getProjectActions(req.params.id);
  res.status(200).json({ success: true, action });
});

projectRouter.post("/", async (req, res) => {
  const action = await projectDb.insert(req.body);
  res.status(200).json({ success: true, action });
});

projectRouter.put("/:id", async (req, res) => {
  const action = await projectDb.update(req.params.id, req.body);
  res.status(200).json({ success: true, action });
});

projectRouter.delete("/:id", async (req, res) => {
  const action = await projectDb.remove(req.params.id);
  res.status(200).json({ success: true, action });
});

module.exports = projectRouter;
