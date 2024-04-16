const mysql = require("mysql")
const chalk = require("chalk");
const Database = new mysql.createConnection({
    host: "IP",
    user: "USER",
    password: "MDP",
    database: "NOM DE LA DB"
})

Database.connect(function(err) {

    if(err) throw err;

    console.log(chalk.bgGreen("La base de données a été connectée avec succès !"))
})

module.exports = Database;
