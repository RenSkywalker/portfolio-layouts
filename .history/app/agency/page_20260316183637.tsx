import Navbar from "../../components/Navbar"

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

<section className="text-center py-32">

<h1 className="text-6xl font-bold mb-6">
Agência Digital Criativa
</h1>

<p className="text-gray-500 max-w-xl mx-auto">
Desenvolvemos experiências digitais modernas para
empresas, startups e marcas inovadoras.
</p>

</section>

<section className="px-16 py-24">

<h2 className="text-4xl font-bold mb-8">
Como trabalhamos
</h2>

<p className="text-gray-500 max-w-3xl mb-12">
Nosso processo combina design estratégico,
tecnologia moderna e metodologias ágeis para
entregar soluções digitais eficientes.
</p>

<div className="grid md:grid-cols-3 gap-10">

<div>
<h3 className="text-xl font-semibold mb-2">
Pesquisa
</h3>
<p className="text-gray-500">
Analisamos o mercado e as necessidades
do cliente.
</p>
</div>

<div>
<h3 className="text-xl font-semibold mb-2">
Design
</h3>
<p className="text-gray-500">
Criamos interfaces modernas e intuitivas.
</p>
</div>

<div>
<h3 className="text-xl font-semibold mb-2">
Desenvolvimento
</h3>
<p className="text-gray-500">
Construímos soluções digitais robustas.
</p>
</div>

</div>

</section>

{/* SERVIÇOS */}

<section className="grid md:grid-cols-3 gap-10 px-16 py-24">

<div className="border p-8 rounded-xl">
<h3 className="text-xl font-semibold mb-3">Web Design</h3>
<p className="text-gray-500">
Criação de sites modernos focados em conversão.
</p>
</div>

<div className="border p-8 rounded-xl">
<h3 className="text-xl font-semibold mb-3">Desenvolvimento</h3>
<p className="text-gray-500">
Aplicações web modernas usando tecnologias atuais.
</p>
</div>

<div className="border p-8 rounded-xl">
<h3 className="text-xl font-semibold mb-3">Branding</h3>
<p className="text-gray-500">
Construção de identidade visual e estratégia digital.
</p>
</div>

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