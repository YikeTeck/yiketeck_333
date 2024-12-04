import Image from 'next/image'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function industrialSolutions() {
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
                 Industrial Solutions
               </h1>
               <p className="text-xl text-[#374151] mb-8">
                 Soluzioni industriali personalizzate
               </p>
               <p className="text-lg text-[#374151]">
                 Offriamo soluzioni embedded personalizzate e parti meccaniche su misura, tra cui custodie in metallo e dissipatori di calore, combinando funzionalità, protezione e design esclusivo.
               </p>
             </div>
             <div className="relative h-[400px] rounded-lg overflow-hidden">
               <Image 
                 src="/images/solutions/industrial-solutions.jpg"
                 alt="Industrial Solutions"
                 fill
                 style={{ objectFit: 'cover' }}
                 priority
               />
             </div>
           </div>
         </div>
       </section>

       {/* Sistemi Embedded Section */}
       <section className="bg-white py-20">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl font-light text-[#374151] mb-12">Sistemi Embedded</h2>
           <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-[#F6F6F6] p-8 rounded-lg">
               <div className="text-[#374151] space-y-4">
                 <p>I <strong>sistemi embedded</strong> sono dispositivi elettronici progettati per svolgere funzioni specifiche all'interno di un sistema più ampio, generalmente con requisiti di prestazioni, dimensioni e consumi energetici molto precisi. Questi prodotti sono fondamentali in numerosi settori, dalla tecnologia industriale alla medicina, all'automotive, e molti altri.</p>
                 
                 <p>Offriamo una vasta gamma di <strong>prodotti embedded</strong> che comprendono:</p>
                 
                 <p><strong>· Display</strong>: schermi TFT, OLED, bistable (e-paper) e altre soluzioni visive, ideali per il controllo e l'interfaccia utente.</p>
                 
                 <p><strong>· Boards</strong>: schede elettroniche, incluse schede di sviluppo, di controllo o di interfacciamento, progettate per garantire prestazioni elevate e affidabili.</p>
                 
                 <p><strong>· Moduli e Sensori</strong>: moduli di comunicazione (Wi-Fi, Bluetooth, LTE, ecc.), sensori per rilevamento di temperatura, umidità, movimento, ecc.</p>
                 
                 <p><strong>· Unità di alimentazione e conversione</strong>: moduli di alimentazione, adattatori e sistemi di gestione dell'energia.</p>
                 
                 <p>Inoltre, grazie al nostro <strong>team R&D</strong>, siamo in grado di assistere i nostri clienti nella progettazione di <strong>prodotti su misura</strong>, offrendo soluzioni personalizzate in base alle esigenze specifiche di ciascun progetto. Il nostro reparto ricerca e sviluppo, forte di un'esperienza consolidata nel settore, lavora fianco a fianco con il cliente per progettare <strong>prodotti esclusivi</strong>, ottimizzati per le richieste tecniche, funzionali ed estetiche del cliente.</p>
               </div>
             </div>
             <div className="grid grid-cols-2 gap-8">
               <div className="relative h-[270px]">
                 <Image 
                   src="/images/solutions/embedded-detail-1.jpg
                   
                   
                "
                   alt="Embedded Detail 1"
                   fill
                   style={{ objectFit: 'cover' }}
                   className="rounded-lg"
                 />
               </div>
               <div className="relative h-[270px]">
                 <Image 
                   src="/images/solutions/embedded-detail-n-2.jpg"
                   alt="Embedded Detail 2"
                   fill
                   style={{ objectFit: 'cover' }}
                   className="rounded-lg"
                 />
               </div>
               <div className="relative h-[270px]">
                 <Image 
                   src="/images/solutions/embedded-detail-3.jpg"
                   alt="Embedded Detail 3"
                   fill
                   style={{ objectFit: 'cover' }}
                   className="rounded-lg"
                 />
               </div>
               <div className="relative h-[270px]">
                 <Image 
                   src="/images/solutions/embedded-detail-4.jpg"
                   alt="Embedded Detail 4"
                   fill
                   style={{ objectFit: 'cover' }}
                   className="rounded-lg"
                 />
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Parti Meccaniche Section */}
       <section className="bg-white py-20">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl font-light text-[#374151] mb-12">Parti Meccaniche</h2>
           <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-[#F6F6F6] p-8 rounded-lg">
               <div className="text-[#374151] space-y-4">
                 <p>Nel campo delle <strong>parti meccaniche</strong> per applicazioni industriali tecnologiche, offriamo una vasta gamma di soluzioni in materiali robusti e duraturi, ideali per proteggere e supportare i componenti elettronici. Le nostre soluzioni non solo garantiscono la protezione dei dispositivi, ma contribuiscono anche a conferire un <strong>design esclusivo</strong> e raffinato.</p>
                 
                 <p>Le <strong>custodie in alluminio e metallo</strong> (come acciaio e ferro) sono progettate per rispondere alle esigenze estetiche e funzionali dei clienti. Offriamo soluzioni su misura, supportando la progettazione sia nella fase iniziale che nell'ottimizzazione del design. Siamo in grado di realizzare <strong>disegni personalizzati</strong> che rispecchiano le richieste specifiche, creando prodotti che uniscono <strong>protezione, estetica e funzionalità</strong>. In questo modo, possiamo offrire un prodotto finale che non solo è resistente, ma che ha anche un aspetto elegante e distintivo.</p>
                 
                 <p>Per i <strong>dissipatori di calore</strong>, sappiamo che in molti dispositivi avanzati il dissipatore diventa parte integrante del <strong>design del case</strong> e deve essere progettato in modo impeccabile, sia in termini di performance che di estetica. Offriamo dissipatori di calore <strong>estrusi</strong>, <strong>die-cast</strong> e <strong>skive sinks</strong> che non solo ottimizzano la dissipazione termica, ma si integrano perfettamente nel design del prodotto. Ogni dissipatore è progettato per garantire alte prestazioni termiche senza compromettere l'aspetto finale del dispositivo, creando soluzioni <strong>eleganti e funzionali</strong>.</p>
               </div>
             </div>
             <div className="grid grid-cols-2 gap-8">
               <div className="relative h-[180px]">
                 <Image 
                   src="/images/solutions/industrial-detail-1.jpg"
                   alt="Industrial Detail 1"
                   fill
                   style={{ objectFit: 'cover' }}
                   className="rounded-lg"
                 />
               </div>
               <div className="relative h-[180px]">
                 <Image 
                   src="/images/solutions/industrial-detail-2.jpg"
                   alt="Industrial Detail 2"
                   fill
                   style={{ objectFit: 'cover' }}
                   className="rounded-lg"
                 />
               </div>
               <div className="relative h-[180px]">
                 <Image 
                   src="/images/solutions/industrial-detail-3.jpg"
                   alt="Industrial Detail 3"
                   fill
                   style={{ objectFit: 'cover' }}
                   className="rounded-lg"
                 />
               </div>
               <div className="relative h-[180px]">
                 <Image 
                   src="/images/solutions/industrial-detail-n-4.jpg"
                   alt="Industrial Detail 4"
                   fill
                   style={{ objectFit: 'cover' }}
                   className="rounded-lg"
                 />
               </div>
               <div className="relative h-[180px]">
                 <Image 
                   src="/images/solutions/industrial-detail-5.jpg"
                   alt="Industrial Detail 5"
                   fill
                   style={{ objectFit: 'cover' }}
                   className="rounded-lg"
                 />
               </div>
               <div className="relative h-[180px]">
                 <Image 
                   src="/images/solutions/industrial-detail-6.jpg"
                   alt="Industrial Detail 6"
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