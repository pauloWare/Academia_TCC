import './../css/style.css';
import { useEffect, useState } from 'react';


export default function Link_Assinatura() {
  const imagensEspaco = ["1", "2" ,"3", "4"];
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndiceAtual(prev => (prev + 1) % imagensEspaco.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [imagensEspaco.length]);

  return (
    <div>
      <section className="hero2">
        <h1>Transforme seu corpo, mente e rotina!</h1>
        <p>Planos acessíveis e estrutura completa pra você treinar no seu ritmo.</p>
      </section>

      <div className="container">
  {/* Planos */}
  <div className="section plano">
    <h2>Plano Básico</h2>
    <p>
      O Plano Básico é perfeito para quem está começando a investir em saúde e bem-estar, oferecendo uma experiência acessível e eficiente. Com esse plano, você terá acesso completo às áreas comuns da academia, incluindo a sala de musculação, esteiras, bicicletas ergométricas e outros equipamentos essenciais para seu treino diário. Além disso, poderá participar de aulas em grupo selecionadas, ideais para quem quer se exercitar de forma coletiva e motivadora, com turmas de ritmos variados como alongamento, funcional e aeróbico. Nosso time de profissionais estará à disposição para orientar o uso correto dos equipamentos e garantir a segurança durante as atividades. Este plano é ideal para quem quer manter uma rotina saudável e consistente, com suporte básico e preços competitivos.
    </p>
    <button>Assinar agora</button>
  </div>

  <div className="section plano">
    <h2>Plano Intermediário</h2>
    <p>
      O Plano Intermediário é a escolha ideal para quem deseja ir além e alcançar resultados visíveis, com uma estrutura mais completa e suporte especializado. Ele inclui todos os benefícios do Plano Básico, mas amplia o acesso às aulas em grupo, liberando todas as modalidades, como spinning, pilates, HIIT, dança e treinamento funcional avançado. Além disso, os assinantes deste plano recebem avaliações físicas periódicas para acompanhar a evolução e ajustes personalizados no treino, garantindo que cada exercício esteja alinhado aos seus objetivos. Você contará com acompanhamento dedicado de nossos instrutores certificados, que auxiliam no desenvolvimento de técnicas e no aprimoramento do desempenho. Essa opção oferece equilíbrio entre custo e benefício, perfeita para quem busca um programa estruturado e motivador para transformar o corpo e a mente.
    </p>
    <button>Assinar agora</button>
  </div>

  <div className="section plano">
    <h2>Plano Premium</h2>
    <p>
      O Plano Premium foi criado para quem busca excelência total em performance, saúde e conforto, com serviços exclusivos e atendimento personalizado. Além de todos os benefícios do Plano Intermediário, você terá acesso ilimitado à academia 24 horas por dia, podendo treinar no horário que melhor se encaixa na sua rotina. O plano inclui treinamentos individualizados, elaborados por profissionais experientes que acompanham cada detalhe do seu progresso, ajustando exercícios e cargas para maximizar seus resultados. Contempla ainda consultoria nutricional para potencializar seus ganhos e garantir uma alimentação adequada ao seu estilo de vida. Para completar a experiência, oferecemos sessões de massagens terapêuticas e relaxantes, que ajudam na recuperação muscular e no bem-estar geral. O Plano Premium é a escolha definitiva para quem quer transformar sua vida com o máximo de suporte, qualidade e exclusividade.
    </p>
    <button>Assinar agora</button>
  </div>
</div>


      {/* --- CARROSSEL NOSSO ESPAÇO --- */}
 <section className="nosso-espaco">
  <h2>Nossas academias</h2>
  <div className="carrossel-container">
    {["/img/img1.jpg", "/img/img3.jpg","/img/img2.jpg", "/img/img3.jpg", "/img/img4.jpg",].map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`Imagem do espaço ${i + 1}`}
        className={i === indiceAtual ? "ativo" : ""}
      />
    ))}
  </div>
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
