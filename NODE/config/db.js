
const { Pool } = require("pg");

const db = new Pool({
    host: "localhost",
    user: "postgres",
    password: "", 
    database: "olombelona",
    port: 5432,
});

module.exports = db;
