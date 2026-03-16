import Link from "next/link"
import Navbar from "../components/Navbar"

export default function Page() {

  return (

    <main className="min-h-screen bg-gray-950 text-white">

      <Navbar/>

      <section className="text-center py-32 px-6">

        <h1 className="text-6xl font-bold mb-6">
          Exemplos de Layout
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          Escolha um dos layouts abaixo para visualizar exemplos
          de landing pages modernas desenvolvidas com Next.js,
          TypeScript e Tailwind.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

          <Link
            href="/saas"
            className="bg-gray-900 p-10 rounded-xl hover:scale-105 transition"
          >
            <h3 className="text-2xl font-semibold mb-3">
              Layout SaaS
            </h3>

            <p className="text-gray-400">
              Plataforma empresarial moderna.
            </p>
          </Link>

          <Link
            href="/agency"
            className="bg-gray-900 p-10 rounded-xl hover:scale-105 transition"
          >
            <h3 className="text-2xl font-semibold mb-3">
              Layout Agência
            </h3>

            <p className="text-gray-400">
              Website para agência criativa.
            </p>
          </Link>

          <Link
            href="/startup"
            className="bg-gray-900 p-10 rounded-xl hover:scale-105 transition"
          >
            <h3 className="text-2xl font-semibold mb-3">
              Layout Startup
            </h3>

            <p className="text-gray-400">
              Landing page para produto digital.
            </p>
          </Link>

        </div>

      </section>

    </main>
  )
}