const express = require("express");
const app = express();
const path = require("path")
const port = 3000


app.use(express.static(path.join(__dirname,".","public")));
app.listen(port, () => console.log("Port 3000 running"))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, ".", "views", "index.html"))
});
app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, ".", "views", "home.html"))
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, ".", "views", "login.html"))
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, ".", "views", "register.html"))
});