import Navbar from "../../components/Navbar"
import { Rocket, Users, Layers } from "lucide-react"

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

</main>

)
}