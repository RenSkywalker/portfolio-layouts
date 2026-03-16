import Navbar from "@/components/Navbar"
import { Cloud, BarChart, Zap } from "lucide-react"

export default function Page(){

return(

<main className="min-h-screen bg-gray-950 text-white">

<Navbar/>

<section className="text-center py-28 px-6">

<h1 className="text-6xl font-bold mb-6">
Plataforma SaaS Inteligente
</h1>

<p className="text-gray-400 max-w-xl mx-auto mb-10">
Sistema completo para empresas que precisam automatizar processos,
gerenciar dados e crescer com tecnologia.
</p>

<button className="bg-blue-600 px-8 py-4 rounded-lg">
Começar agora
</button>

</section>

<section className="grid md:grid-cols-3 gap-10 px-16 py-20">

<div className="bg-gray-900 p-8 rounded-xl">
<Cloud size={40} className="mb-4 text-blue-400"/>
<h3 className="text-xl font-semibold mb-2">Infraestrutura Cloud</h3>
<p className="text-gray-400">
Arquitetura escalável hospedada em nuvem moderna.
</p>
</div>

<div className="bg-gray-900 p-8 rounded-xl">
<BarChart size={40} className="mb-4 text-purple-400"/>
<h3 className="text-xl font-semibold mb-2">Analytics Avançado</h3>
<p className="text-gray-400">
Dashboard inteligente com métricas em tempo real.
</p>
</div>

<div className="bg-gray-900 p-8 rounded-xl">
<Zap size={40} className="mb-4 text-yellow-400"/>
<h3 className="text-xl font-semibold mb-2">Automação</h3>
<p className="text-gray-400">
Automatize processos e aumente produtividade.
</p>
</div>

</section>

</main>

)
}