import Navbar from "../../components/Navbar"
import { Layers, Users, CheckCircle } from "lucide-react"

export default function Page(){

return(

<main className="min-h-screen bg-gradient-to-b from-indigo-900 to-black text-white">

<Navbar/>

<section className="text-center py-32 px-6">

<h1 className="text-6xl font-bold mb-6">
Plataforma para gestão de projetos
</h1>

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