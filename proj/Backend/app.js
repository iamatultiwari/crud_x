import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("hello world");
});

// Task routes
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
