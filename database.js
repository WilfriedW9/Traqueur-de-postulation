// Ce fichier sert a établir une connexion entre mySql et Node
import mysql from "mysql2"

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"DataBased_777!NeJxHw",
    database:"ctracker1",
    // Le port ici et le port de la base de données doivent correspondrent, sinon il y aura une erreur
    port: 3006
}).promise()

const result = await connection.query("SELECT * FROM ctracker1.candidature")
console.log(result[0])



// Interrompt la connexion
connection.end()
