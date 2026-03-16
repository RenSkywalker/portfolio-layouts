import SaasLanding from "@/components/SaasLanding"
import AgencyLanding from "@/components/AgencyLanding"
import StartupLanding from "@/components/StartupLanding"

export default function Page() {
  return (
    <main>

      {/* HERO */}

      <section className="h-screen flex flex-col items-center justify-center text-center bg-black text-white">

        <h1 className="text-6xl font-bold mb-10">
          Exemplos de Layout
        </h1>

        <div className="flex gap-6">

          <a
            href="#saas"
            className="bg-blue-600 px-6 py-3 rounded-lg"
          >
            Ver SaaS
          </a>

          <a
            href="#agency"
            className="bg-purple-600 px-6 py-3 rounded-lg"
          >
            Ver Agência
          </a>

          <a
            href="#startup"
            className="bg-indigo-600 px-6 py-3 rounded-lg"
          >
            Ver Startup
          </a>

        </div>

      </section>

      <SaasLanding />

      <AgencyLanding />

      <StartupLanding />

    </main>
  )
}