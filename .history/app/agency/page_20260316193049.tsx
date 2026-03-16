import Navbar from "../../components/Navbar"
import { Palette, Code, Globe } from "lucide-react"

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

{/* HERO */}

<section className="text-center py-36 px-10">

<h1 className="text-7xl font-bold mb-10">
Agência Digital Criativa
</h1>

<p className="text-2xl text-gray-500 max-w-3xl mx-auto mb-10">
Criamos experiências digitais modernas para empresas que desejam
se destacar no mercado digital.
</p>

<p className="text-xl text-gray-400 max-w-2xl mx-auto">
Combinamos design estratégico, tecnologia moderna e inovação
para desenvolver soluções digitais impactantes.
</p>

</section>

{/* SERVIÇOS */}

<section className="grid md:grid-cols-3 gap-16 px-20 py-28 text-center">

<div>
<Palette size={60} className="mx-auto mb-6 text-purple-500"/>
<h3 className="text-3xl font-semibold mb-4">
Design e Branding
</h3>
<p className="text-gray-500 text-lg">
Criamos identidades visuais modernas que fortalecem
a presença digital das marcas.
</p>
</div>

<div>
<Code size={60} className="mx-auto mb-6 text-blue-500"/>
<h3 className="text-3xl font-semibold mb-4">
Desenvolvimento Web
</h3>
<p className="text-gray-500 text-lg">
Desenvolvemos sites e aplicações web modernas,
rápidas e responsivas.
</p>
</div>

<div>
<Globe size={60} className="mx-auto mb-6 text-green-500"/>
<h3 className="text-3xl font-semibold mb-4">
Experiência Digital
</h3>
<p className="text-gray-500 text-lg">
Criamos interfaces intuitivas que melhoram
a experiência do usuário.
</p>
</div>

</section>

{/* SOBRE */}

<section className="text-center py-28 px-20">

<h2 className="text-5xl font-bold mb-10">
Nosso processo de criação
</h2>

<p className="text-xl text-gray-500 max-w-3xl mx-auto">
Cada projeto é desenvolvido com foco em estratégia,
design e tecnologia. Nosso objetivo é transformar
ideias em experiências digitais de alto impacto.
</p>

</section>


{/* PORTFÓLIO */}

<section className="px-16 py-24">

<h2 className="text-4xl font-bold mb-12">
Projetos recentes
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

{/* CTA */}

<section className="text-center py-32 bg-gray-100">

<h2 className="text-4xl font-bold mb-6">
Vamos criar algo incrível juntos
</h2>

<p className="text-gray-500 mb-8">
Entre em contato para desenvolver seu próximo projeto.
</p>

<button className="bg-black text-white px-8 py-4 rounded-lg">
Solicitar orçamento
</button>

</section>

</main>

)
}