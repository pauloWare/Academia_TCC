import api from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./../Cadastrados/ListaAlunos.css"; // ⬅ importa o CSS certo aqui

export default function ListaAlunos() {
  const [alunos, setAlunos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    buscarAlunos();
  }, []);

  const buscarAlunos = async () => {
    try {
      const response = await api.get("http://localhost:3001/produto");
      setAlunos(response.data);
    } catch (error) {
      console.error("Erro ao buscar alunos:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`http://localhost:3001/produto/${id}`);
      buscarAlunos();
    } catch (error) {
      console.error("Erro ao deletar aluno:", error);
    }
  };

  return (
    <div className="consulta-container">
      <h2>Seu Cadastrado</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {alunos.map((aluno) => (
          <li key={aluno.id} className="aluno-item">
            <p><strong>Nome:</strong> {aluno.nome}</p>
            <p><strong>Endereço:</strong> {aluno.descricao}</p>
            <p><strong>Telefone:</strong> {aluno.precovenda}</p>
            <div className="botoes">
              <button>Editar</button>
              <button onClick={() => handleDelete(aluno.id)}>Deletar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
