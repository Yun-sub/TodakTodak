const express = require("express");
const OracleDB = require("oracledb");
const dbapp = express();

const server = dbapp.listen(3000, () =>
  console.log("server start, port: 3000")
);

const oracledb = require("oracledb");
OracleDB.outFormat = oracledb.OUT_FORMAT_OBJECT;

dbapp.get("/select", (request, response) => getSelect(request, response));

async function getSelect(request, response) {
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: "username",
      password: "password",
      connectString: "SID",
    });
    const result = await connection.execute("SELECT * FROM customers", [1]);
    console.log(result);
    response.send(result.rows);
  } catch (error) {
    console.log;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
}

var dbConfig = require("./config/dbConfig");
