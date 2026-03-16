export default function AgencyLanding() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}

      <section className="text-center py-32 px-6">
        <h1 className="text-6xl font-bold mb-6">
          Agência digital criativa
        </h1>

        <p className="text-gray-500 max-w-xl mx-auto mb-10">
          Criamos experiências digitais modernas para marcas inovadoras.
        </p>

        <button className="bg-black text-white px-8 py-4 rounded-lg">
          Ver projetos
        </button>
      </section>

      {/* SERVIÇOS */}

      <section className="grid md:grid-cols-3 gap-10 px-16 py-20">

        <div className="border p-8 rounded-xl">
          <h3 className="font-semibold text-xl mb-4">Web Design</h3>
          <p className="text-gray-500">
            Sites modernos focados em conversão.
          </p>
        </div>

        <div className="border p-8 rounded-xl">
          <h3 className="font-semibold text-xl mb-4">Branding</h3>
          <p className="text-gray-500">
            Identidade visual forte e memorável.
          </p>
        </div>

        <div className="border p-8 rounded-xl">
          <h3 className="font-semibold text-xl mb-4">UX/UI</h3>
          <p className="text-gray-500">
            Interfaces intuitivas e agradáveis.
          </p>
        </div>

      </section>

      {/* PROJETOS */}

      <section className="px-16 py-20">

        <h2 className="text-4xl font-bold mb-12">
          Projetos recentes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-100 h-60 rounded-xl"></div>
          <div className="bg-gray-100 h-60 rounded-xl"></div>
          <div className="bg-gray-100 h-60 rounded-xl"></div>

        </div>

      </section>

    </main>
  )
}