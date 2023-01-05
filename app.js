const express = require("express");
const app = express();
const path = require("path")
const port = 3000


app.use(express.static(path.join(__dirname,".","public")));
app.listen(port, () => console.log("Port 3000 running"))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, ".", "views", "index.html"))
});
app.get('/header', (req, res) => {
    res.sendFile(path.resolve(__dirname, ".", "views", "header.html"))
});