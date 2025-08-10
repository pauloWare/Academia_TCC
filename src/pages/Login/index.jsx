import { useNavigate } from "react-router-dom";
import './../css/style.css';

function Link_login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home"); // redireciona para a home
  };

  const handleCadastro = () => {
    navigate("/produto");
  };

  return (
    <div className="login-container">
      <h1 className="main-content">Login da Academia</h1>
      

      <form className="form-login" onSubmit={e => e.preventDefault()}>
        <label htmlFor="nome">Nome:</label>
        <input id="nome" type="text" placeholder="Digite seu nome" required />

        <label htmlFor="senha">Senha:</label>
        <input id="senha" type="password" placeholder="Digite sua senha" required />

        <div className="bl">
          <button type="button" onClick={handleLogin}>Entrar</button>
          <button type="button" onClick={handleCadastro}>Cadastrar-se</button>
        </div>
 


        <p style={{ textAlign: 'center', marginTop: '15px', color: '#e0d7ff' }}>
          Ainda não tem um login? Use o botão "Cadastrar-se"
        </p>
      </form>
    </div>
  );
}

export default Link_login;
