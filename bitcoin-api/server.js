const express = require("express");
const rpcMethods = require("./routes/api");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", rpcMethods);

const port = process.env.PORT || 4445;

server = app.listen(port, () => console.log(`Server running on port ${port}`));
