CREATE DATABASE IF NOT EXISTS sistema_descontos;
USE sistema_descontos;

CREATE TABLE IF NOT EXISTS clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    cpf_cliente VARCHAR(14) UNIQUE NOT NULL,
    cpf_indicacao VARCHAR(14),
    desconto INT DEFAULT 0 CHECK (desconto >= 0 AND desconto <= 100),
    FOREIGN KEY (cpf_indicacao) REFERENCES clientes(cpf_cliente) ON DELETE SET NULL
);