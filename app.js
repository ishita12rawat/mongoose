const express = require("express");
const {blogrouter} = require('./router/bolg.route');
const { MONGO_URI } = require("./env");
const {default:mongoose} = require('mongoose')

const PORT = 8010;
const app=express();
app.use(express.json());
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));

app.use("/blog", blogrouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
  mongoose.connect(MONGO_URI);
});
