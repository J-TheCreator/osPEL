import {
  MapPin,
  ChartColumn,
  MessageSquare,
  UsersRound,
  Settings,
  CircleHelp,
  TriangleAlert,
  Map,
  House,
  Icon,

} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar({ isSidebarOpen, toggleSidebar }) {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setActiveItem(item);

    // Redirecionar de acordo com o item
    switch (item) {
      case 'Home':
        navigate('/'); // Por enquanto Home
        break;
      case 'Chat da Comunidade':
        navigate('/chat');
        break;
      case 'Mapa de Problemas':
        navigate('/mapa');
        break;
      case 'Reportar Problema':
        navigate('/reportar');
        break;
      case 'Problemas Reportados':
        navigate('/Report')
        break
        case 'Usuarios':
          navigate('\Usuarios')
          break
      default:
        break;
    }
  };

  return (
    <div
      className={`${
        isSidebarOpen ? 'w-64' : 'w-20'
      } bg-gray-100 text-black p-6 space-y-6 transition-all duration-300 h-screen flex flex-col`}
    >
      {/* Título e toggle da sidebar */}
      <div
        className="flex items-center space-x-2 mb-8 cursor-pointer"
        onClick={toggleSidebar}
      >
        <MapPin className="text-2xl bg-blue-600 fill-white text-blue-900 rounded-md" />
        {isSidebarOpen && <h1 className="text-2xl font-bold">OPS PEL</h1>}
      </div>

      {/* Itens de navegação */}
      <div className="space-y-2 border-b pb-4">
        {[
          { label: 'Home', icon: <House className='' /> },
          { label: 'Chat da Comunidade', icon: <MessageSquare /> },
          { label: 'Mapa de Problemas', icon: <Map/> },
          {label: 'Problemas Reportados', icon: <TriangleAlert/> },
          { label: 'Reportar Problema', icon: <MapPin /> },
          {label: 'Usuarios', icon: <UsersRound/>}
        ].map((item) => (
          <div
            key={item.label}
            className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer ${
              activeItem === item.label ? 'bg-blue-600 text-white' : ''
            }`}
            onClick={() => handleItemClick(item.label)}
          >
            {item.icon}
            {isSidebarOpen && <h2 className="text-lg hover:text-blue-500 hover:cursor-pointer ">{item.label}</h2>}
          </div>
        ))}
      </div>

      {/* Rodapé */}
      <div className="mt-auto space-y-4 border-t pt-4">
        <div className="flex items-center space-x-2 cursor-pointer">
          <Settings />
          {isSidebarOpen && <h2 className="text-lg">Configurações</h2>}
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <CircleHelp />
          {isSidebarOpen && <h2 className="text-lg">Ajuda</h2>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
