import { useEffect } from "react";
import { GlobalStyle } from "../styles/global";
import { TelaCupom } from "../styles/Cupom.styles";
import { useLocation } from "react-router-dom";
import Logo from "/Logo2.png";

export default function Cupom() {
  const { state } = useLocation();
  const cliente = state?.cliente;

  if (!cliente) {
    return <p>Cliente não encontrado.</p>;
  }

  useEffect(() => {
    const lockOrientation = async () => {
      if (screen.orientation && screen.orientation.lock) {
        try {
          await screen.orientation.lock("landscape");
        } catch (error) {
          console.error("Erro ao alterar a orientação da tela:", error);
        }
      }
    };

    lockOrientation();

    return () => {
      if (screen.orientation && screen.orientation.unlock) {
        screen.orientation.unlock();
      }
    };
  }, []);

  return (
    <TelaCupom>
      <img src={Logo} id="Logo" alt="Mr. Cheney" />
      <section>
        <div className="esquerda">
          <h1>Parabéns,</h1>
          <p>{cliente.nome}</p>
          <p id="sublinhado">{cliente.cpf_cliente}</p>
          <h2>Você obteve um desconto de:</h2>
        </div>
        <div className="direita">
          <p>{cliente.desconto}%</p>
        </div>
      </section>
      <GlobalStyle/>
    </TelaCupom>
  )
}
