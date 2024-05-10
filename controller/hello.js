const router = require("express").Router();
const Todo = require("./models/todo");

router.get("/read", (req, res) => {
  res.status(200).json("It works");
});
router.post("/create", async (req, res) => {
  const todo = await Todo.create(req.body);
  return res.status(200).json(todo);
});
router.patch("/update", (req, res) => {
  res.status(200).json("It works");
});

router.delete("/delete", (req, res) => {
  res.status(200).json("It works");
});

module.exports = router;
