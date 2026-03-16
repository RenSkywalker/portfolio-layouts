"use client"

import { motion } from "framer-motion"

const projects = [
  { name:"Genio Digital", url:"https://renskywalker.github.io/genio-digital/" },
  { name:"Infinitx", url:"https://renancursi79.wixsite.com/infinitx" },
  { name:"Elias Gualberto", url:"https://www.eliasgualbertocustodio.com.br/" },
  { name:"Prism School", url:"https://renskywalker.github.io/prism-school/" },
  { name:"3MPT", url:"https://3mpt.com.br" },
  { name:"Prex Robot", url:"https://prexrobot-production.up.railway.app/" }
]

export default function AgencyLanding() {
  return (
    <main id="agency" className="min-h-screen bg-white text-gray-900">

      {/* HERO */}

      <section className="text-center py-32 px-6">

        <motion.h1
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="text-6xl font-bold mb-6"
        >
          Agência digital criativa
        </motion.h1>

        <p className="text-gray-500 max-w-xl mx-auto mb-10">
          Criamos experiências digitais modernas para marcas inovadoras,
          combinando design, tecnologia e estratégia.
        </p>

        <button className="bg-black text-white px-8 py-4 rounded-lg">
          Ver projetos
        </button>

      </section>

      {/* SERVIÇOS */}

      <section className="grid md:grid-cols-3 gap-10 px-16 py-20">

        <motion.div whileHover={{ scale:1.05 }} className="border p-8 rounded-xl">
          <h3 className="font-semibold text-xl mb-4">Web Design</h3>
          <p className="text-gray-500">
            Sites modernos focados em conversão e experiência do usuário.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale:1.05 }} className="border p-8 rounded-xl">
          <h3 className="font-semibold text-xl mb-4">Branding</h3>
          <p className="text-gray-500">
            Construção de identidade visual e posicionamento de marca.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale:1.05 }} className="border p-8 rounded-xl">
          <h3 className="font-semibold text-xl mb-4">UX/UI</h3>
          <p className="text-gray-500">
            Interfaces intuitivas focadas na melhor experiência digital.
          </p>
        </motion.div>

      </section>

      {/* PROJETOS */}

      <section className="px-16 py-20">

        <h2 className="text-4xl font-bold mb-12">
          Projetos recentes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              whileHover={{ scale:1.05 }}
              className="bg-gray-100 h-60 rounded-xl flex items-center justify-center text-lg font-semibold"
            >
              {project.name}
            </motion.a>
          ))}

        </div>

      </section>

    </main>
  )
}