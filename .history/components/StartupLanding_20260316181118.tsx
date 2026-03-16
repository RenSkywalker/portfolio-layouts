"use client"

import { motion } from "framer-motion"
import { Layers, Users, CheckCircle } from "lucide-react"

export default function StartupLanding() {
  return (
    <main id="startup" className="min-h-screen bg-gradient-to-b from-indigo-900 to-black text-white">

      {/* HERO */}

      <section className="text-center py-32 px-6">

        <motion.h1
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="text-6xl font-bold mb-6"
        >
          Gerencie projetos com facilidade
        </motion.h1>

        <p className="text-gray-300 max-w-xl mx-auto mb-10">
          Uma plataforma completa para organizar tarefas,
          acompanhar progresso e gerenciar equipes.
        </p>

        <button className="bg-indigo-500 px-8 py-4 rounded-lg">
          Criar conta grátis
        </button>

      </section>

      {/* FEATURES */}

      <section className="grid md:grid-cols-3 gap-10 px-16 py-20">

        <motion.div whileHover={{ scale:1.05 }} className="bg-white/10 p-8 rounded-xl backdrop-blur">
          <Layers size={40} className="mb-4 text-indigo-400"/>
          <h3 className="text-xl font-semibold mb-3">Kanban</h3>
          <p className="text-gray-300">
            Organize tarefas visualmente com quadros intuitivos.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale:1.05 }} className="bg-white/10 p-8 rounded-xl backdrop-blur">
          <Users size={40} className="mb-4 text-indigo-400"/>
          <h3 className="text-xl font-semibold mb-3">Times</h3>
          <p className="text-gray-300">
            Gerencie equipes e colaboração em tempo real.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale:1.05 }} className="bg-white/10 p-8 rounded-xl backdrop-blur">
          <CheckCircle size={40} className="mb-4 text-indigo-400"/>
          <h3 className="text-xl font-semibold mb-3">Relatórios</h3>
          <p className="text-gray-300">
            Métricas completas para acompanhar produtividade.
          </p>
        </motion.div>

      </section>

    </main>
  )
}