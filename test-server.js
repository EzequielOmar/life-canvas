const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("./"));

app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`));
