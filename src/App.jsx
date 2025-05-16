import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Chat from "./paginas/Chat";
import Mapa from "./paginas/MapaProblemas";
import Report from "./componentes/Reportados";
import ReportarProblemas from "./paginas/ReportarProblemas";
import ChatBot from "./paginas/ChatBot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/reportar" element={<ReportarProblemas />} />
        <Route path="/Chatbot" element={<ChatBot />} />
      </Routes>
    </Router>
  );
}

export default App;
