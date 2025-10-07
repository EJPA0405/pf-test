const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DB_CONECTION_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(cors());

app.listen(3000, async () => {
  console.log("Server is running on http://localhost:3000");
  try {
    const res = await pool.query("SELECT NOW()");
    console.log(
      "Base de datos ocnectada y funcionando con fecha: " +
        JSON.stringify(res.rows[0])
    );
  } catch (error) {
    ("Error de conexión con la BDD");
  }
});

app.get("/", (req, res) => {
  res.send("Servidor Funcionando!");
});

app.get("/hora", async (req, res) => {
  const response = await pool.query("SELECT NOW()");
  const hora = response.rows[0].now;
  res.json(hora);
});
