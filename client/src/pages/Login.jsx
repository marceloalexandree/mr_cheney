import { useState } from "react";
import { GlobalStyle } from "../styles/global";
import { TelaLogin } from "../styles/Login.styles";
import { Link, useNavigate } from "react-router-dom";
import { IMaskInput } from "react-imask";
import Logo from "/Logo2.png";

export default function Login() {
  
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [cpfCliente, setCpfCliente] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dadosLogin = {
      nome: nome,
      cpf_cliente: cpfCliente,
    };
    console.log(dadosLogin);
    
    try{
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosLogin),
      });

      const data = await response.json();
      const cliente = {
        nome: nome,
        cpf_cliente: cpfCliente,
        desconto: data.desconto,
      };

      if (response.ok) {
        alert("Login realizado com sucesso!");
        navigate("/cupom", { state: { cliente } });
      } else{
        setErro(data.message || "Erro ao fazer login. Verifique seus dados.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setErro("Erro ao conectar com o servidor.(Login)");
    }
  } 

  return (
    <TelaLogin>
      <section>
        <img src={Logo} alt="Mr. Cheney" />
        <form onSubmit={handleSubmit}>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} name="nome" placeholder="Digite seu nome completo" required/>
          <IMaskInput mask="000.000.000-00" type="text" value={cpfCliente} onChange={(e) => setCpfCliente(e.target.value)} name="cpf_cliente" placeholder="Digite seu CPF" required/>
          <Link to="/">Ainda não tem uma conta? Cadastre-se!</Link>
          {erro && <p>{erro}</p>}
          <button type="submit">Entrar</button>
        </form>
      </section>
      <GlobalStyle/>
    </TelaLogin>
  )
}
