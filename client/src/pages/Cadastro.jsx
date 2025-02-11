import { useState } from "react";
import { GlobalStyle } from "../styles/global";
import { TelaCadastro } from "../styles/Cadastro.styles";
import { Link, useNavigate } from "react-router-dom";
import Logo from "/Logo2.png"

export default function Cadastro() {

  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [cpfCliente, setCpfCliente] = useState("");
  const [cpfIndicacao, setCpfIndicacao] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const dadosCadastro = {
      nome: nome,
      cpf_cliente: cpfCliente,
      cpf_indicacao: cpfIndicacao || null,
    };
    console.log(dadosCadastro);
    
    try{
      const response = await fetch("http://localhost:5000/clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosCadastro),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Cliente cadastrado com sucesso!");
        navigate("/login");
      } else {
        alert(`Erro: ${data.error || "Falha ao cadastrar cliente"}`);
      }
      
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
      alert("Erro ao conectar com o servidor.(Cadastro)");
    }
  }

  return (
    <TelaCadastro>
      <section>
        <img src={Logo} alt="Mr. Cheney" />
        <form onSubmit={handleSubmit}>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} name="nome" placeholder="Digite seu nome completo" required/>
          <input type="number" value={cpfCliente} onChange={(e) => setCpfCliente(e.target.value)} name="cpf_cliente" placeholder="Digite seu CPF" required/>
          <input type="number" value={cpfIndicacao} onChange={(e) => setCpfIndicacao(e.target.value)} name="cpf_indicacao" placeholder="Digite o CPF de quem te indicou"/>
          <Link to="/login">Já tem uma conta? Faça login.</Link>
          <button type="submit">Cadastrar</button>
        </form>
      </section>
      <GlobalStyle/>
    </TelaCadastro>
  )
}
