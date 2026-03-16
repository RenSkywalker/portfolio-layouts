import Navbar from "../../components/Navbar"
import { Cloud, BarChart, Zap, ShieldCheck, Users, Layers } from "lucide-react"

export default function Page() {

return(

<main className="min-h-screen bg-gray-950 text-white">

<Navbar/>

{/* HERO */}

<section className="text-center py-32 px-6">

<h1 className="text-6xl font-bold mb-6">
Plataforma SaaS para empresas modernas
</h1>

<p className="text-gray-400 max-w-xl mx-auto mb-10">
Automatize processos, monitore métricas e gerencie equipes
com uma solução completa baseada em cloud.
</p>

<button className="bg-blue-600 px-8 py-4 rounded-lg">
Começar agora
</button>

</section>

{/* CLIENTES */}

<section className="py-20 text-center">

<p className="text-gray-400 mb-8">
Empresas que utilizam nossa plataforma
</p>

<div className="flex justify-center gap-12 text-gray-500">

<span>TechCorp</span>
<span>FutureLabs</span>
<span>NovaDigital</span>
<span>CloudWare</span>

</div>

</section>

{/* FEATURES */}

<section className="grid md:grid-cols-3 gap-10 px-16 py-24">

<div className="bg-gray-900 p-8 rounded-xl">
<Cloud size={40} className="mb-4 text-blue-400"/>
<h3 className="text-xl font-semibold mb-2">Infraestrutura Cloud</h3>
<p className="text-gray-400">
Sistema escalável hospedado em infraestrutura moderna.
</p>
</div>

<div className="bg-gray-900 p-8 rounded-xl">
<BarChart size={40} className="mb-4 text-purple-400"/>
<h3 className="text-xl font-semibold mb-2">Analytics</h3>
<p className="text-gray-400">
Dashboards inteligentes com dados em tempo real.
</p>
</div>

<div className="bg-gray-900 p-8 rounded-xl">
<Zap size={40} className="mb-4 text-yellow-400"/>
<h3 className="text-xl font-semibold mb-2">Automação</h3>
<p className="text-gray-400">
Automatize tarefas repetitivas e aumente produtividade.
</p>
</div>

</section>

{/* BENEFÍCIOS */}

<section className="grid md:grid-cols-3 gap-10 px-16 py-24">

<div>
<ShieldCheck size={40} className="mb-4 text-green-400"/>
<h3 className="text-xl font-semibold mb-2">Segurança</h3>
<p className="text-gray-400">
Proteção de dados com padrões modernos.
</p>
</div>

<div>
<Users size={40} className="mb-4 text-blue-400"/>
<h3 className="text-xl font-semibold mb-2">Colaboração</h3>
<p className="text-gray-400">
Trabalho em equipe com sincronização em tempo real.
</p>
</div>

<div>
<Layers size={40} className="mb-4 text-purple-400"/>
<h3 className="text-xl font-semibold mb-2">Integrações</h3>
<p className="text-gray-400">
Conecte sua plataforma com APIs externas.
</p>
</div>

</section>

{/* CTA */}

<section className="text-center py-32">

<h2 className="text-4xl font-bold mb-6">
Pronto para transformar seu negócio?
</h2>

<button className="bg-blue-600 px-10 py-4 rounded-lg">
Solicitar demonstração
</button>

</section>

</main>

)
}