"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Cloud, BarChart, Zap } from "lucide-react"

export default function SaasLanding() {
  return (
    <main id="saas" className="min-h-screen bg-gray-950 text-white">

      {/* HERO */}

      <section className="text-center py-32 px-6">

        <motion.h1
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="text-6xl font-bold mb-6"
        >
          Plataforma inteligente para sua empresa
        </motion.h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
          Automatize processos, gerencie equipes e acompanhe métricas
          em tempo real com uma plataforma SaaS moderna e escalável.
        </p>

        <Button className="text-lg px-8 py-6">
          Começar agora
        </Button>

      </section>

      {/* FEATURES */}

      <section className="grid md:grid-cols-3 gap-10 px-12 py-20">

        <motion.div
          whileHover={{ scale:1.05 }}
          className="bg-gray-900 p-8 rounded-xl"
        >
          <Cloud size={40} className="mb-4 text-blue-500"/>
          <h3 className="text-xl font-semibold mb-4">Automação</h3>
          <p className="text-gray-400">
            Automatize tarefas repetitivas e economize tempo em processos operacionais.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale:1.05 }}
          className="bg-gray-900 p-8 rounded-xl"
        >
          <BarChart size={40} className="mb-4 text-purple-500"/>
          <h3 className="text-xl font-semibold mb-4">Analytics</h3>
          <p className="text-gray-400">
            Métricas avançadas e dashboards inteligentes para decisões estratégicas.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale:1.05 }}
          className="bg-gray-900 p-8 rounded-xl"
        >
          <Zap size={40} className="mb-4 text-yellow-500"/>
          <h3 className="text-xl font-semibold mb-4">Integrações</h3>
          <p className="text-gray-400">
            Conecte com APIs, CRM, ERP e ferramentas do seu ecossistema digital.
          </p>
        </motion.div>

      </section>

      {/* CTA */}

      <section className="text-center py-24">
        <h2 className="text-4xl font-bold mb-6">
          Pronto para escalar seu negócio?
        </h2>

        <p className="text-gray-400 mb-8">
          Nossa plataforma foi desenvolvida para startups, empresas
          e equipes que precisam crescer com tecnologia.
        </p>

        <Button className="text-lg px-8 py-6">
          Solicitar demonstração
        </Button>
      </section>

    </main>
  )
}