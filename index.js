//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));

//check password middleware
function password(req, res, next) {
    const password = req.body.password;
    if (password === "ILoveProgramming") {
        next();
    } else {
        res.status(401).send("<h1>Unauthorized</h1><p>Incorrect password</p>");
    }
  };


//post request to /submit
app.post("/check", password, (req, res) => {
    res.sendFile(__dirname + "/public/secret.html");
  });

//get request to /
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

//listening on port 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });