import Navbar from "@/components/Navbar"

const projects = [

{ name:"Genio Digital", url:"https://renskywalker.github.io/genio-digital/" },

{ name:"Infinitx", url:"https://renancursi79.wixsite.com/infinitx" },

{ name:"Elias Gualberto", url:"https://www.eliasgualbertocustodio.com.br/" },

{ name:"Prism School", url:"https://renskywalker.github.io/prism-school/" },

{ name:"3MPT", url:"https://3mpt.com.br" },

{ name:"Prex Robot", url:"https://prexrobot-production.up.railway.app/" }

]

export default function Page(){

return(

<main className="min-h-screen bg-white text-gray-900">

<Navbar/>

<section className="text-center py-32">

<h1 className="text-6xl font-bold mb-6">
Agência Digital
</h1>

<p className="text-gray-500 max-w-xl mx-auto">
Criamos experiências digitais modernas para empresas e startups.
</p>

</section>

<section className="px-16 py-20">

<h2 className="text-4xl font-bold mb-12">
Projetos Recentes
</h2>

<div className="grid md:grid-cols-3 gap-8">

{projects.map((p)=>(
<a
key={p.name}
href={p.url}
target="_blank"
className="bg-gray-100 h-56 rounded-xl flex items-center justify-center font-semibold hover:scale-105 transition"
>
{p.name}
</a>
))}

</div>

</section>

</main>

)
}