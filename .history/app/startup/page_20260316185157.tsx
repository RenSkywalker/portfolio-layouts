import Navbar from "../../components/Navbar"
import { Rocket, Users, Layers, CheckCircle } from "lucide-react"

export default function Page(){

return(

<main className="min-h-screen bg-gradient-to-b from-indigo-900 to-black text-white">

<Navbar/>

<section className="text-center py-36 px-10">

<h1 className="text-7xl font-bold mb-10">
Plataforma moderna para gestão de projetos
</h1>

<p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
Organize tarefas, acompanhe progresso e gerencie equipes
com uma plataforma desenvolvida para produtividade.
</p>

<p className="text-xl text-gray-400 max-w-2xl mx-auto">
Nossa solução ajuda equipes a trabalharem de forma
mais organizada e eficiente.
</p>

</section>

<section className="grid md:grid-cols-3 gap-16 px-20 py-28 text-center">

<div>
<Rocket size={60} className="mx-auto mb-6 text-indigo-400"/>
<h3 className="text-3xl font-semibold mb-4">
Produtividade
</h3>
<p className="text-gray-300 text-lg">
Ferramentas para melhorar o desempenho da equipe.
</p>
</div>

<div>
<Users size={60} className="mx-auto mb-6 text-indigo-400"/>
<h3 className="text-3xl font-semibold mb-4">
Colaboração
</h3>
<p className="text-gray-300 text-lg">
Trabalho em equipe em tempo real.
</p>
</div>

<div>
<Layers size={60} className="mx-auto mb-6 text-indigo-400"/>
<h3 className="text-3xl font-semibold mb-4">
Organização
</h3>
<p className="text-gray-300 text-lg">
Gerencie tarefas com quadros visuais intuitivos.
</p>
</div>

</section>


<section className="text-center py-32 px-6">

<p className="text-gray-300 max-w-xl mx-auto mb-10">
Ferramenta completa para equipes organizarem tarefas
e acompanhar progresso de projetos.
</p>

<button className="bg-indigo-500 px-8 py-4 rounded-lg">
Criar conta
</button>

</section>

<section className="grid md:grid-cols-3 gap-10 px-16 py-24">

<div className="bg-white/10 p-8 rounded-xl">
<Layers size={40} className="mb-4 text-indigo-400"/>
<h3 className="text-xl font-semibold">Kanban</h3>
<p className="text-gray-300">
Organização visual de tarefas.
</p>
</div>

<div className="bg-white/10 p-8 rounded-xl">
<Users size={40} className="mb-4 text-indigo-400"/>
<h3 className="text-xl font-semibold">Times</h3>
<p className="text-gray-300">
Colaboração em tempo real.
</p>
</div>

<div className="bg-white/10 p-8 rounded-xl">
<CheckCircle size={40} className="mb-4 text-indigo-400"/>
<h3 className="text-xl font-semibold">Produtividade</h3>
<p className="text-gray-300">
Métricas de desempenho da equipe.
</p>
</div>

</section>

<section className="px-16 py-24">

<h2 className="text-4xl font-bold mb-8">
Por que escolher nossa plataforma
</h2>

<p className="text-gray-400 max-w-2xl mb-12">
Nossa solução foi criada para equipes modernas
que precisam trabalhar de forma organizada,
colaborativa e eficiente.
</p>

<div className="grid md:grid-cols-2 gap-10">

<div className="bg-white/10 p-8 rounded-xl">
<h3 className="text-xl font-semibold mb-3">
Interface simples
</h3>
<p className="text-gray-300">
Fácil de usar desde o primeiro acesso.
</p>
</div>

<div className="bg-white/10 p-8 rounded-xl">
<h3 className="text-xl font-semibold mb-3">
Escalabilidade
</h3>
<p className="text-gray-300">
Cresça sem limitações.
</p>
</div>

</div>

</section>

<section className="text-center py-32">

<h2 className="text-4xl font-bold mb-6">
Comece gratuitamente
</h2>

<p className="text-gray-400 mb-8">
Experimente nossa plataforma por 14 dias.
</p>

<button className="bg-indigo-500 px-10 py-4 rounded-lg">
Criar conta grátis
</button>

</section>

</main>

)
}