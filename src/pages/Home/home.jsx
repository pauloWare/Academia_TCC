import React from "react";
import { useNavigate } from "react-router-dom";

export default function Link_Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/assinaturas");
  }

  return (
    <div>
      <main className="center">
        <img className="acd" src="/img/acd.jpg" alt="logo da academia" />
      </main>

      <section className="hero">
        <h1>Transforme seu corpo, mente e rotina!</h1>
        <p>Planos acessíveis e estrutura completa pra você treinar no seu ritmo.</p>
        <button type="button" onClick={handleClick}>
          Conheça nossos planos
        </button>
      </section>

      <section className="contact">
        <h2>Venha nos visitar!</h2>
        <p>📍 Rua Exemplo, 123 - Centro - Barueri/SP</p>
        <p>🕐 Segunda a sábado, das 6h às 22h</p>

        <a
  href="https://web.whatsapp.com/send?phone=5511950708232&text=Olá!%20Quero%20saber%20mais."
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="botaoWhatsapp">
    <span className="spa">Chamar no WhatsApp</span>
  </button>
</a>

      </section>
    </div>
  );
}
