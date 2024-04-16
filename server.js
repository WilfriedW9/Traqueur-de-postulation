import express from "express";
import fs from "fs"
import path from "path"
import database from "./database.js"
const app = express();

// Affiche la page HTML indiquée en argument de readFile(), avec ses métadonnées
app.get("/", (req, res) => {
  fs.readFile("./index.html", "utf8", (err,html) => {
    if(err){
        response.status(500).send("Y'a une erreur")
    }

    res.send(html);
  })
});
app.use(express.static(path.join("./")))

app.listen(3007, () => {
  console.log("App available on http://localhost:3007");
});