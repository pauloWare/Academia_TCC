
import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

import Header from './pages/Header/header';
import Link_login from './pages/Login/index';
import Link_Home from './pages/Home/home';
import Link_Produto from './pages/Produto/produto';
import Link_Cadastrados from './pages/Cadastrados/cadastados';
import Link_Assinatura from './pages/Assinaturas/assinaturas';

export default function Layout() {
  const location = useLocation();
  const showHeader = location.pathname !== '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Link_login />} />
        <Route path="/home" element={<Link_Home />} />
        <Route path="/produto" element={<Link_Produto />} />
        <Route path="/cadastrados" element={<Link_Cadastrados />} />
        <Route path="/assinaturas" element={<Link_Assinatura />} />
      </Routes>
    </>
  );
}
