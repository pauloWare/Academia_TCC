import api from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function CadastroAluno() {
  const [vnome, setNome] = useState('');
  const [vdesc, setDesc] = useState('');
  const [vpreco, setPreco] = useState('');
  const [vdataNasc, setDataNasc] = useState('');
  const [vativo, setAtivo] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // MUITO IMPORTANTE para evitar recarregar a página

    if (!vnome.trim()) {
      alert("Nome do aluno é obrigatório!");
      return;
    }

    try {
      await api.post("http://localhost:3001/produto", {
        nome: vnome,
        descricao: vdesc,
        precovenda: vpreco,
        dataNascimento: vdataNasc,
        ativo: vativo,
      });

      // Limpa campos
      setNome('');
      setDesc('');
      setPreco('');
      setDataNasc('');
      setAtivo(true);

      console.log("Cadastro feito com sucesso! Redirecionando...");
      navigate('/home'); // redireciona só após a requisição completar
    } catch (error) {
      console.error("Erro ao cadastrar aluno:", error);
      alert("Erro no cadastro, veja o console.");
    }
  };

  const handleDataChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 8) value = value.slice(0, 8);

    if (value.length > 4) {
      value = value.replace(/(\d{2})(\d{2})(\d{1,4})/, "$1/$2/$3");
    } else if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{1,2})/, "$1/$2");
    }

    setDataNasc(value);

    const handleSubmit = async (e) => {
  e.preventDefault();

  if (!vnome.trim()) {
    alert("Nome do aluno é obrigatório!");
    return;
  }

  try {
    const response = await api.post("http://localhost:3001/produto", {
      nome: vnome,
      descricao: vdesc,
      preco: vpreco,
      data_nascimento: vdataNasc,
      ativo: vativo,
    });

    console.log("Cadastro realizado:", response.data);

    // Limpa os campos
    setNome('');
    setDesc('');
    setPreco('');
    setDataNasc('');
    setAtivo(true);

    // ✅ Só redireciona se der certo
    navigate('/home');
  } catch (error) {
    console.error("Erro ao cadastrar aluno:", error);
    alert("Erro ao cadastrar aluno. Verifique o backend ou CORS.");
  }
};

  };

  return (
    <div className="app-container">
      <h2>Cadastro do aluno</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome do aluno</label>
          <input
            type="text"
            placeholder="Seu nome aqui"
            value={vnome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Endereço:</label>
          <input
            type="text"
            placeholder="Seu endereço aqui"
            value={vdesc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Telefone</label>
          <input
            type="text"
            placeholder="Seu telefone aqui"
            value={vpreco}
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Sua data de nascimento:</label>
          <input
            type="text"
            placeholder="dd/mm/aaaa"
            maxLength={10}
            value={vdataNasc}
            onChange={handleDataChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Como conheceu a academia?</label>
          <input type="checkbox" id="checkbox1" name="checkbox" /> Indicação <br />
          <input type="checkbox" id="checkbox2" name="checkbox" /> Passando na frente <br />
          <input type="checkbox" id="checkbox3" name="checkbox" /> Outra <br />
        </div>

        <button type="submit">
          Clique aqui para se cadastrar e ir para a home
        </button>
      </form>
    </div>
  );
}
