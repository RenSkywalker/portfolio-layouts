import Navbar from "../../components/Navbar"
import { Cloud, BarChart, Zap, ShieldCheck, Users, Layers } from "lucide-react"

export default function Page(){

return(

<main className="min-h-screen bg-gray-950 text-white">

<Navbar/>

{/* HERO */}

<section className="text-center py-24 md:py-36 px-6">

<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10">
A nova geração de plataformas SaaS
</h1>

<p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
Automatize processos, gerencie equipes e acompanhe métricas
estratégicas com uma plataforma moderna baseada em cloud.
</p>

<p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
Nossa solução foi criada para empresas digitais que precisam
crescer rapidamente, mantendo controle total de dados,
operações e performance.
</p>

<button className="bg-blue-600 px-8 md:px-12 py-4 md:py-5 rounded-lg text-lg md:text-xl">
Começar gratuitamente
</button>

</section>

{/* CLIENTES */}

<section className="py-20 md:py-28 text-center">

<h3 className="text-xl md:text-3xl text-gray-300 mb-12 md:mb-16">
Empresas que utilizam nossa tecnologia
</h3>

<div className="flex flex-wrap justify-center gap-10 md:gap-20 text-lg md:text-xl">

<div className="flex items-center gap-4 text-blue-400">
<Layers size={40}/>
<span className="text-xl md:text-2xl font-semibold">TechCorp</span>
</div>

<div className="flex items-center gap-4 text-purple-400">
<Cloud size={40}/>
<span className="text-xl md:text-2xl font-semibold">FutureLabs</span>
</div>

<div className="flex items-center gap-4 text-green-400">
<Users size={40}/>
<span className="text-xl md:text-2xl font-semibold">NovaDigital</span>
</div>

<div className="flex items-center gap-4 text-yellow-400">
<ShieldCheck size={40}/>
<span className="text-xl md:text-2xl font-semibold">CloudWare</span>
</div>

</div>

</section>

{/* DASHBOARD */}

<section className="py-20 md:py-28 px-6 md:px-16 text-center">

<h2 className="text-3xl md:text-5xl font-bold mb-10">
Dashboard completo para gestão empresarial
</h2>

<p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto mb-16">
Visualize dados estratégicos da sua empresa em tempo real
com dashboards inteligentes que facilitam a tomada de decisões.
</p>

<div className="bg-gray-900 rounded-xl p-8 md:p-16 max-w-5xl mx-auto">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">

<div className="bg-gray-800 p-6 md:p-8 rounded">
<p className="text-gray-400 text-lg">Usuários ativos</p>
<h3 className="text-3xl md:text-4xl font-bold">12k</h3>
</div>

<div className="bg-gray-800 p-6 md:p-8 rounded">
<p className="text-gray-400 text-lg">Conversão</p>
<h3 className="text-3xl md:text-4xl font-bold">34%</h3>
</div>

<div className="bg-gray-800 p-6 md:p-8 rounded">
<p className="text-gray-400 text-lg">Receita mensal</p>
<h3 className="text-3xl md:text-4xl font-bold">$82k</h3>
</div>

</div>

</div>

</section>

{/* FEATURES */}

<section className="grid md:grid-cols-3 gap-8 md:gap-12 px-6 md:px-20 py-20 md:py-28 text-center">

<div className="bg-gray-900 p-6 md:p-10 rounded-xl">
<Cloud size={50} className="mx-auto mb-6 text-blue-400"/>
<h3 className="text-xl md:text-2xl font-semibold mb-4">Infraestrutura Cloud</h3>
<p className="text-gray-400 text-base md:text-lg">
Sistema escalável hospedado em infraestrutura cloud moderna.
</p>
</div>

<div className="bg-gray-900 p-6 md:p-10 rounded-xl">
<BarChart size={50} className="mx-auto mb-6 text-purple-400"/>
<h3 className="text-xl md:text-2xl font-semibold mb-4">Analytics Inteligente</h3>
<p className="text-gray-400 text-base md:text-lg">
Dashboards avançados com métricas em tempo real.
</p>
</div>

<div className="bg-gray-900 p-6 md:p-10 rounded-xl">
<Zap size={50} className="mx-auto mb-6 text-yellow-400"/>
<h3 className="text-xl md:text-2xl font-semibold mb-4">Automação</h3>
<p className="text-gray-400 text-base md:text-lg">
Automatize processos e aumente produtividade da equipe.
</p>
</div>

</section>

{/* CTA */}

<section className="text-center py-24 md:py-32">

<h2 className="text-3xl md:text-4xl font-bold mb-6">
Pronto para transformar seu negócio?
</h2>

<button className="bg-blue-600 px-8 md:px-10 py-4 rounded-lg">
Solicitar demonstração
</button>

</section>

</main>

)
}