import Sidebar from '../componentes/Sidebar';

function ChatComunidade() {
  const mensagens = [
    { nome: 'João cabeça', texto: 'trouxe a planta?.', hora: '13:30' },
    { nome: 'Felipe cabeça master', texto: 'Sim, vamos na praça e dps o cara coda a tarde toda', hora: '13:31' },
    {nome: 'Arthur', texto: 'Para cara isso é coisa do diabo', hora: '13:32'},
    {nome: 'Cassio', texto: 'Bah paeeeeeeee', hora: '13:33'},
    {nome: "João cabeça", texto: "no drugs, Amen", hora: "13:40"}
    
    // ...
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar fixa à esquerda */}
      <Sidebar />

      {/* Área principal do chat */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="w-full max-w-md bg-white shadow-md rounded-md p-1 mx-auto">
          <h2 className="text-lg font-semibold mb-2">Chat da Comunidade</h2>

          <div className="text-sm bg-blue-100 text-blue-900 p-2 rounded mb-3">
            Este é um espaço para discutir problemas da cidade. Mantenha o respeito e foque em soluções.
          </div>

          <div className="h-[440px] overflow-y-auto space-y-2 mb-2">
            {mensagens.map((msg, i) => (
              <div key={i} className="bg-gray-100 p-2 rounded">
                <strong>{msg.nome}</strong>{' '}
                <span className="text-xs text-gray-500">{msg.hora}</span>
                <p>{msg.texto}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              className="flex-1 border rounded p-2"
              placeholder="Digite sua mensagem..."
            />
            <button className="bg-blue-500 text-white p-2 rounded">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatComunidade;
