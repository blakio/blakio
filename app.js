const app = require("express")();
const {
  PORT
} = require("./config");

app.listen(PORT, console.log(`app listening on port ${PORT}`));
