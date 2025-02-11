const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // Substitua pelo seu usuário do MySQL
  password: "root", // Substitua pela sua senha do MySQL
  database: "sistema_descontos",
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
    return;
  }
  console.log("Conectado ao MySQL!");
});

app.post("/clientes", (req, res) => {
  const { nome, cpf_cliente, cpf_indicacao } = req.body;

  connection.query(
    "INSERT INTO clientes (nome, cpf_cliente, cpf_indicacao) VALUES (?, ?, ?)",
    [nome, cpf_cliente, cpf_indicacao || null],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      if (cpf_indicacao) {
        connection.query(
          "UPDATE clientes SET desconto = LEAST(desconto + 2, 50) WHERE cpf_cliente = ?",
          [cpf_indicacao],
          (err, results) => {
            if (err) {
              return res.status(500).json({ error: err.message });
            }
            res.json({ message: "Cliente cadastrado e desconto atualizado com sucesso!" });
          }
        );
      } else {
        res.json({ message: "Cliente cadastrado com sucesso!" });
      }
    }
  );
});


app.post("/login", (req, res) => {
  const { nome, cpf_cliente } = req.body;

  connection.query(
    "SELECT * FROM clientes WHERE nome = ? AND cpf_cliente = ?",
    [nome, cpf_cliente],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.status(404).json({ message: "Cliente não encontrado" });
      }
    }
  );
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});