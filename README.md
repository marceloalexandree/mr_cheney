# Sistema de Desconto por Indicação
Este projeto é um sistema de acúmulo de desconto por indicação, onde os clientes podem se cadastrar e acumular descontos com base em indicações. O sistema é composto por um frontend em React e um backend em Node.js com MySQL.

## Pré-requisitos
- **MySQL**: [Baixe e instale o MySQL](https://dev.mysql.com/downloads/installer/).
- **Node**: [Baixe e instale o Node](https://nodejs.org/en/download).

## Passo a Passo
1. **Clone o Repositório**
    ```bash
        git clone https://github.com/seu-usuario/sistema-descontos.git
        cd mr_cheney
    ```
2. **Execute o Banco de Dados**
    - Execute o arquivo *main.sql* da pasta *data* no MySQL Workbench

3. **Configure e execute o Backend:**
    ```bash
        cd server
        npm i
        npm install mysql2 cors express nodemon
        npm run dev
    ```
    - Atualize as informações de conexão com o MySQL no arquivo *index.js*:
    ```javascript
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root", // Substitua pelo seu usuário do MySQL
            password: "root", // Substitua pela sua senha do MySQL
            database: "sistema_descontos",
        });
    ```
4. **Configure e execute o Frontend:**
    ```bash
        cd client
        npm install
        npm run dev
    ```
5. **Acesse o projeto:**
    - O frontend estará disponível em: http://localhost:5173.
    - O backend estará disponível em: http://localhost:5000.

## Funcionalidades
- **Cadastro de Clientes:**
    - Os clientes podem se cadastrar fornecendo nome, CPF e CPF de quem os indicou (opcional).
    - Se houver uma indicação, o cliente que indicou recebe um acréscimo de % de desconto.
- **Login de Clientes:**
    - Os clientes podem fazer login usando nome e CPF.
    - Após o login, o cliente é redirecionado para uma página de cupom que exibe suas informações.
- **Página de cupom:**
    - Exibe o nome do cliente, CPF e o desconto acumulado.

## Tecnologias Utilizadas
- **Frontend**
    - React (com Vite)
    - Styled Components (para estilização)
- **Backend**
    - Node.js (com Express)
    - MySQL (para armazenar os dados)