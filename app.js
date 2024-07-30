
const express = require("express");
const {blogrouter} = require('./router/bolg')
const PORT = 8090;
const app=express();
app.use(express.json());
app.use("/blog", blogrouter);
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
