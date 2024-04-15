// Ce fichier sert a établir une connexion entre mySql et Node
import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config()

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    // Le port ici et le port de la base de données doivent correspondrent, sinon il y aura une erreur
    port: process.env.MYSQL_PORT
}).promise()


async function getCandidatures(){
    const [rows] = await connection.query("SELECT * FROM ctracker1.candidature")
    return rows
}

async function getCandidature(id){
    const [rows] = await connection.query(`
    SELECT * 
    FROM ctracker1.candidature
    WHERE CandidatureID = ?
    `, [id])
    return rows
}

const candidatures =  await getCandidature(1)

console.log(candidatures)



// Interrompt la connexion
connection.end()
