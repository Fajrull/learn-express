const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running in port : ${port}`);
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

// Routes
const HelloRoutes = require("./routes/hello-routes");
app.use("/hello", HelloRoutes);
