export default function StartupLanding() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-900 to-black text-white">

      {/* HERO */}

      <section className="text-center py-32 px-6">

        <h1 className="text-6xl font-bold mb-6">
          Gerencie projetos com facilidade
        </h1>

        <p className="text-gray-300 max-w-xl mx-auto mb-10">
          Uma plataforma completa para organizar tarefas e equipes.
        </p>

        <button className="bg-indigo-500 px-8 py-4 rounded-lg">
          Criar conta grátis
        </button>

      </section>

      {/* FEATURES */}

      <section className="grid md:grid-cols-3 gap-10 px-16 py-20">

        <div className="bg-white/10 p-8 rounded-xl backdrop-blur">
          <h3 className="text-xl font-semibold mb-3">Kanban</h3>
          <p className="text-gray-300">
            Organize tarefas visualmente.
          </p>
        </div>

        <div className="bg-white/10 p-8 rounded-xl backdrop-blur">
          <h3 className="text-xl font-semibold mb-3">Times</h3>
          <p className="text-gray-300">
            Gerencie equipes de forma eficiente.
          </p>
        </div>

        <div className="bg-white/10 p-8 rounded-xl backdrop-blur">
          <h3 className="text-xl font-semibold mb-3">Relatórios</h3>
          <p className="text-gray-300">
            Métricas completas de produtividade.
          </p>
        </div>

      </section>

    </main>
  )
}