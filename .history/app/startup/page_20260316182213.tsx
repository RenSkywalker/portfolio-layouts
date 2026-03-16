import Navbar from "@/components/Navbar"
import { Layers, Users, CheckCircle } from "lucide-react"

export default function Page(){

return(

<main className="min-h-screen bg-gradient-to-b from-indigo-900 to-black text-white">

<Navbar/>

<section className="text-center py-32 px-6">

<h1 className="text-6xl font-bold mb-6">
Gestão moderna de projetos
</h1>

<p className="text-gray-300 max-w-xl mx-auto mb-10">
Plataforma criada para equipes que precisam organizar tarefas,
monitorar progresso e trabalhar com eficiência.
</p>

<button className="bg-indigo-500 px-8 py-4 rounded-lg">
Criar conta
</button>

</section>

<section className="grid md:grid-cols-3 gap-10 px-16 py-20">

<div className="bg-white/10 p-8 rounded-xl">
<Layers size={40} className="mb-4 text-indigo-400"/>
<h3 className="text-xl font-semibold">Kanban</h3>
<p className="text-gray-300">
Organize tarefas visualmente.
</p>
</div>

<div className="bg-white/10 p-8 rounded-xl">
<Users size={40} className="mb-4 text-indigo-400"/>
<h3 className="text-xl font-semibold">Times</h3>
<p className="text-gray-300">
Gerencie equipes e colaboração.
</p>
</div>

<div className="bg-white/10 p-8 rounded-xl">
<CheckCircle size={40} className="mb-4 text-indigo-400"/>
<h3 className="text-xl font-semibold">Produtividade</h3>
<p className="text-gray-300">
Relatórios completos de desempenho.
</p>
</div>

</section>

</main>

)
}