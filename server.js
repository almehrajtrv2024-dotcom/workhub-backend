const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

// Routes
const plumberRoutes = require("./routes/plumber");
const electricianRoutes = require("./routes/electrician");

app.use("/api/plumber", plumberRoutes);
app.use("/api/electrician", electricianRoutes);

app.get("/", (req, res) => {
  res.send("WorkHub Backend is running!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
