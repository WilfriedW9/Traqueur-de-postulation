// Ce fichier sert a établir une connexion entre mySql et Node
import mysql from "mysql2"
import dotenv from "dotenv"

app.listen(3006, ()=> {
    console.log("server is running on port 3006")
})


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
    return rows[0]
}

async function createCandidature(nomEntreprise,Stack,SiteInternet,Date,Poste, Interet,PosteDesc){
    const result = await connection.query(`
    INSERT INTO ctracker1.candidature (nomEntreprise,Stack,SiteInternet,Date,Poste, Interet,PosteDesc)
    VALUES (?,?,?,?,?,?,?)
    `,[nomEntreprise,Stack,SiteInternet,Date,Poste, Interet,PosteDesc])
    return result.insertId
}

async function deleteCandidature(id){
    const [rows] = await connection.query(`
    DELETE  
    FROM ctracker1.candidature
    WHERE CandidatureID = ?
    `, [id])
    return rows[0] + "has been deleted from the database"
}

const candidatures =  await getCandidatures()
const candidature =  await getCandidature(1)
// const result = await deleteCandidature(3)
// console.log(result)

console.log(candidatures)






// Interrompt la connexion
connection.end()
