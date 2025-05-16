import Sidebar from "../componentes/Sidebar";
import { Lightbulb, Droplet, CircleHelp, UserMinus, House, CircleDashed } from 'lucide-react';
import Fotos from '../componentes/FotosProblemas';
import { Link } from 'react-router-dom';

function Problemas() {
  return (
    <div className="flex h-screen">
      {/* Sidebar na esquerda */}
      <Sidebar />

      {/* Conteúdo principal */}
      <div className="flex-1 overflow-auto p-1">
        <form className="bg-white p-6 rounded-md shadow-md max-w-2xl mx-auto mt-6 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Reportar Novo Problema</h2>
            <p className="text-gray-600 text-sm">Informe o problema que você identificou na cidade</p>
          </div>

          {/* Campo Título */}
          <div>
            <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">
              Título <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              placeholder="Ex: Buraco na Rua Dom Pedro"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Campo Descrição */}
          <div>
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">
              Descrição <span className="text-red-600">*</span>
            </label>
            <textarea
              id="descricao"
              name="descricao"
              rows={4}
              placeholder="Descreva o problema com o máximo de detalhes possível..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Tipos de Problemas */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Tipos de Problemas <span className="text-red-600">*</span>
            </h3>

            <div className="grid grid-cols-2 gap-3 ">
              {[
                { icon: <Droplet />, label: 'Alagamento' },
                { icon: <CircleDashed />, label: 'Buraco na via' },
                { icon: <UserMinus />, label: 'Assalto/Roubo' },
                { icon: <House />, label: 'Desabamento' },
                { icon: <Lightbulb />, label: 'Iluminação' },
                { icon: <CircleHelp />, label: 'Outro' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 border border-gray-300 rounded-md hover:bg-blue-100 hover:cursor-pointer transition-colors"
                >
                  {item.icon}
                  <span className="font-medium text-sm text-gray-800">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </form>
              <div className="pt-3">
                <Fotos />
                </div>
       
      </div>
    </div>
  );
}

export default Problemas;
