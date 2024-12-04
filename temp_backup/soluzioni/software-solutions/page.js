import Image from 'next/image'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function Softwaresolution() {
 return (
   <>
     <Header />
     <div className="pt-32">
       {/* Hero Section */}
       <section className="bg-[#F6F6F6] py-20">
         <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h1 className="text-4xl font-light text-[#374151] mb-6">
                 Software solutions
               </h1>
               <p className="text-xl text-[#374151] mb-8">
                 Aumenta il tuo potenziale 
               </p>
               <p className="text-lg text-[#374151]">
                 Progettiamo e sviluppiamo soluzioni software con il fine di aumentare le performace degli utenti , combinando conoscienze tecnologiche e conoscienze sul funzionamento dell'apparato cognitivo. 
               </p>
             </div>
             <div className="relative h-[400px] rounded-lg overflow-hidden">
               <Image 
                 src="/images/solutions/software.jpg"
                 alt="Audio & Acustica"
                 fill
                 style={{ objectFit: 'cover' }}
                 priority
               />
             </div>
           </div>
         </div>
       </section>

       {/* Le nostre soluzioni Section */}
       <section className="py-20">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl font-light text-[#374151] mb-12">
             Applicazioni Flomindy
           </h2>
           <div className="grid md:grid-cols-2 gap-8">
             {/* Colonna sinistra con il testo */}
             <div className="bg-[#F6F6F6] p-8 rounded-lg">
               <h3 className="text-2xl font-light text-[#374151] mb-4">
                 Software Design
               </h3>
               <div className="text-[#374151] space-y-4">
                 <p>Lo studio degli apparati percettivi dell'uomo e le caratteristiche di funzionamento del nostro cervello ci ha permesso di progettare software innovativi in grado di elevare i prodotti di uso comune come smartphone, tablet e computer, affinché il loro utilizzo sia più efficace e possa incrementare e mantenere costanti le capacità cognitive dell'utente.</p>
                 
                 <p>Questo è il caso degli applicativi forniti dal nostro brand Flomindy.</p>
                 
                 <p></p>
                 
                 <p></p>
               </div>
             </div>

             {/* Colonna destra con la griglia di immagini */}
             <div className="grid grid-cols-2 gap-8">
               <div className="relative h-[230px]">
                 <Image 
                   src="/images/solutions/software-solution-0.jpg"
                   alt="Audio Detail 1"
                   fill
                   style={{ objectFit: 'contain' }}
                   className="rounded-lg"
                 />
               </div>
               <div className="relative h-[230px]">
                 <Image 
                   src="/images/solutions/software-solution-1.jpg"
                   alt="Audio Detail 2"
                   fill
                   style={{ objectFit: 'cover' }}
                   className="rounded-lg"
                 />
               </div>
               <div className="relative h-[230px]">
                 <Image 
                   src="/images/solutions/software-solution-2.jpg"
                   alt="Audio Detail 3"
                   fill
                   style={{ objectFit: 'cover' }}
                   className="rounded-lg"
                 />
               </div>
               <div className="relative h-[230px]">
                 <Image 
                   src="/images/solutions/software-solution-3.jpg"
                   alt="Audio Detail 4"
                   fill
                   style={{ objectFit: 'cover' }}
                   className="rounded-lg"
                 />
               </div>
             </div>
           </div>
         </div>
       </section>
     </div>
     <Footer />
   </>
 )
}