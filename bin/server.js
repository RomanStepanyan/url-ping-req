const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

const PORT = 3030;

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const urlRouter = require("../routes/api/urlApi");
const emailRouter = require("../routes/api/emaiApi");
const intervalRouter = require("../routes/api/intervalApi");
const logRouter = require("../routes/api/logApi");
const pingRouter = require("../routes/api/pingApi");

const { connectMongo } = require("../db/connections");

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/db-url_ping/url-list", pingRouter);
app.use("/api/db-url_ping/url-list", urlRouter);
app.use("/api/db-url_ping/email", emailRouter);
app.use("/api/db-url_ping/interval", intervalRouter);
app.use("/api/db-url_ping/log", logRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

const start = async () => {
  try {
    await connectMongo();
  } catch (error) {}
};
app.listen(PORT, (err) => {
  if (err) {
    console.error("Error at server launch:", err);
    process.exit(1);
  }
  console.log(`Database connection successful. Use our API on port: ${PORT}`);
});

start();
