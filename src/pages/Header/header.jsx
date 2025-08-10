import { Link } from "react-router-dom";
/* npx json-server --watch db.json --port 3001 */

function Header() {
  return (
    <header>
      <div>
        
      </div>
      <nav>
        <Link to="/home" className="abas">Home</Link>
        <span className="separador">|</span>
        <Link to="/cadastrados" className="abas">Cadastro</Link>
        
        
      </nav>
    </header>
  );
}

export default Header;
