import { Button } from "@/components/ui/button"

export default function SaasLanding() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* HERO */}

      <section className="text-center py-32 px-6">
        <h1 className="text-6xl font-bold mb-6">
          Plataforma inteligente para sua empresa
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
          Automatize processos, gerencie equipes e acompanhe métricas
          em tempo real.
        </p>

        <Button className="text-lg px-8 py-6">
          Começar agora
        </Button>
      </section>

      {/* FEATURES */}

      <section className="grid md:grid-cols-3 gap-10 px-12 py-20">

        <div className="bg-gray-900 p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Automação</h3>
          <p className="text-gray-400">
            Automatize tarefas repetitivas e economize tempo.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Analytics</h3>
          <p className="text-gray-400">
            Métricas avançadas para tomada de decisão.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Integrações</h3>
          <p className="text-gray-400">
            Conecte com suas ferramentas favoritas.
          </p>
        </div>

      </section>

      {/* CTA */}

      <section className="text-center py-24">
        <h2 className="text-4xl font-bold mb-6">
          Pronto para escalar seu negócio?
        </h2>

        <Button className="text-lg px-8 py-6">
          Solicitar demo
        </Button>
      </section>

    </main>
  )
}