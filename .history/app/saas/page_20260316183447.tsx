import Navbar from "../../components/Navbar"
import { Cloud, BarChart, Zap, ShieldCheck, Users, Layers } from "lucide-react"

export default function Page(){

return(

<main className="min-h-screen bg-gray-950 text-white">

<Navbar/>

{/* HERO */}

<section className="text-center py-32 px-6">

<h1 className="text-6xl font-bold mb-6">
A nova geração de plataformas SaaS
</h1>

<p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
Nossa plataforma foi desenvolvida para empresas que precisam
automatizar processos, acompanhar métricas estratégicas e
escalar suas operações utilizando tecnologia moderna baseada
em cloud computing.
</p>

<p className="text-gray-500 max-w-xl mx-auto mb-10">
Empresas digitais precisam de ferramentas inteligentes para
crescer rapidamente. Nossa solução oferece dashboards
analíticos, automações poderosas e integrações com os
principais serviços do mercado.
</p>

<button className="bg-blue-600 px-10 py-4 rounded-lg text-lg">
Começar gratuitamente
</button>

</section>

{/* CLIENTES */}

<section className="py-24 text-center">

<h3 className="text-xl text-gray-400 mb-10">
Empresas que confiam em nossa tecnologia
</h3>

<div className="flex flex-wrap justify-center gap-16 text-gray-500 text-lg">

<div className="flex items-center gap-3">
<Layers size={32}/>
<span>TechCorp</span>
</div>

<div className="flex items-center gap-3">
<Cloud size={32}/>
<span>FutureLabs</span>
</div>

<div className="flex items-center gap-3">
<Users size={32}/>
<span>NovaDigital</span>
</div>

<div className="flex items-center gap-3">
<ShieldCheck size={32}/>
<span>CloudWare</span>
</div>

</div>

</section>

{/* MOCKUP */}

<section className="py-24 px-16 text-center">

<h2 className="text-4xl font-bold mb-8">
Dashboard poderoso e intuitivo
</h2>

<p className="text-gray-400 max-w-2xl mx-auto mb-16">
Visualize dados importantes da sua empresa em tempo real.
Nossa interface foi desenvolvida para facilitar a análise
de métricas e a tomada de decisões estratégicas.
</p>

<div className="bg-gray-900 rounded-xl p-12 max-w-4xl mx-auto">

<div className="grid grid-cols-3 gap-6">

<div className="bg-gray-800 p-6 rounded">
<p className="text-gray-400 text-sm">Usuários</p>
<h3 className="text-3xl font-bold">12k</h3>
</div>

<div className="bg-gray-800 p-6 rounded">
<p className="text-gray-400 text-sm">Conversão</p>
<h3 className="text-3xl font-bold">34%</h3>
</div>

<div className="bg-gray-800 p-6 rounded">
<p className="text-gray-400 text-sm">Receita</p>
<h3 className="text-3xl font-bold">$82k</h3>
</div>

</div>

</div>

</section>

{/* FEATURES */}

<section className="grid md:grid-cols-3 gap-10 px-16 py-24">

<div className="bg-gray-900 p-8 rounded-xl">
<Cloud size={40} className="mb-4 text-blue-400"/>
<h3 className="text-xl font-semibold mb-3">Infraestrutura Cloud</h3>
<p className="text-gray-400">
Arquitetura altamente escalável hospedada em
infraestrutura cloud moderna.
</p>
</div>

<div className="bg-gray-900 p-8 rounded-xl">
<BarChart size={40} className="mb-4 text-purple-400"/>
<h3 className="text-xl font-semibold mb-3">Analytics Inteligente</h3>
<p className="text-gray-400">
Métricas estratégicas em tempo real para
decisões baseadas em dados.
</p>
</div>

<div className="bg-gray-900 p-8 rounded-xl">
<Zap size={40} className="mb-4 text-yellow-400"/>
<h3 className="text-xl font-semibold mb-3">Automação</h3>
<p className="text-gray-400">
Automatize tarefas repetitivas e aumente
a eficiência operacional da sua equipe.
</p>
</div>

</section>

{/* PRICING */}

<section className="text-center py-32">

<h2 className="text-4xl font-bold mb-12">
Planos para todos os tamanhos de empresa
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

<div className="bg-gray-900 p-10 rounded-xl">
<h3 className="text-2xl font-bold mb-4">Starter</h3>
<p className="text-gray-400 mb-6">
Ideal para pequenas equipes.
</p>
<p className="text-4xl font-bold mb-6">$19</p>
<button className="bg-blue-600 px-6 py-3 rounded">
Começar
</button>
</div>

<div className="bg-blue-600 p-10 rounded-xl">
<h3 className="text-2xl font-bold mb-4">Pro</h3>
<p className="mb-6">
Para empresas em crescimento.
</p>
<p className="text-4xl font-bold mb-6">$49</p>
<button className="bg-black px-6 py-3 rounded">
Escolher plano
</button>
</div>

<div className="bg-gray-900 p-10 rounded-xl">
<h3 className="text-2xl font-bold mb-4">Enterprise</h3>
<p className="text-gray-400 mb-6">
Para grandes organizações.
</p>
<p className="text-4xl font-bold mb-6">$99</p>
<button className="bg-blue-600 px-6 py-3 rounded">
Falar com vendas
</button>
</div>

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