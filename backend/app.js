const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dataRoutes = require("./routes/dataRoutes");

const app = express();
const port = 5000;

const corsOptions = {
  origin: ["http://localhost:5000"],
};

app.use(cors());
app.use(bodyParser.json());

// Use the data routes
app.use("/api/data", dataRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
