import { Plus, Droplet, CircleDashed, Lightbulb } from 'lucide-react';
import ReportCard from './ReportCard';
import Sidebar from './Sidebar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Report() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar fixa na lateral */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Conteúdo ao lado da sidebar */}
      <main
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? 'ml-48' : ''
        } `}
      >
        <div className=" max-w-3xl mx-auto">
          {/* Header */}
            <div className="flex justify-end items-center border-b pb-3 mb-5 bg-white px-4 py-1 rounded-md shadow-sm">
            <Link
            to="/reportar"
            className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 px-2 py-1.5 rounded-md text-white font-semibold"
          >
            <Plus size={14} className='animate-spin' />
            Reportar
          </Link>
          </div>

          {/* Cards */}
          <ReportCard
            image="alagamento.jfif"
            status="Reportado"
            statusColor="red"
            icon={<Droplet size={12} className="text-blue-400 " />}
            category="Alagamento"
            title="Alagamento na rua Quinze de Novembro"
            address="Rua Quinze de Novembro, 123, Centro, Pelotas"
            time="Há mais de um ano"
            likes={8}
            comments={1}
          />

          <ReportCard
            image="buraco.jfif"
            status="Em análise"
            statusColor="yellow"
            icon={<CircleDashed size={12} className="text-yellow-500 " />}
            category="Buraco"
            title="Buraco na Avenida Bento Gonçalves"
            address="Avenida Bento Gonçalves, 2000, Pelotas"
            time="Há mais de um ano"
            likes={34}
            comments={1}
          />

          <ReportCard
            image="poste.webp"
            status="Reportado"
            statusColor="red"
            icon={<Lightbulb size={12} className="text-yellow-600 " />}
            category="Iluminação"
            title="Poste de luz quebrado"
            address="Rua Almirante Barros, 456, Laranjal, Pelotas"
            time="Há mais de um ano"
            likes={12}
            comments={1}
          />
        </div>
      </main>
    </div>
  );
}

export default Report;
