import Image from 'next/image'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function AudioAcustica() {
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
                 Audio & Acustica
               </h1>
               <p className="text-xl text-[#374151] mb-8">
                 Innovazione nell'ingegneria audio
               </p>
               <p className="text-lg text-[#374151]">
                 Sviluppiamo soluzioni audio all'avanguardia, combinando tecnologia e design italiano per 
                 creare esperienze sonore uniche.
               </p>
             </div>
             <div className="relative h-[400px] rounded-lg overflow-hidden">
               <Image 
                 src="/images/solutions/audio-acustica.jpg"
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
             Le nostre soluzioni
           </h2>
           <div className="grid md:grid-cols-2 gap-8">
             {/* Colonna sinistra con il testo */}
             <div className="bg-[#F6F6F6] p-8 rounded-lg">
               <h3 className="text-2xl font-light text-[#374151] mb-4">
                 Sound Design
               </h3>
               <div className="text-[#374151] space-y-4">
                 <p>Il nostro profondo know-how nell'ingegneria audio ci spinge a esplorare soluzioni completamente innovative per la progettazione di apparecchi destinati a questo settore. I nostri prodotti sono progettati per garantire una grande usabilità, unita a un effetto 'WoW!', offrendo prestazioni che, a prima vista, sembrano impossibili date le dimensioni e le geometrie estremamente ridotte. Il tutto è arricchito dal design italiano.</p>
                 
                 <p>La prima generazione, visibile nelle foto qui accanto, è stata presentata con il brand "deeversa" sin dal 2019. Attualmente, con la seconda generazione, siamo riusciti a compattare ulteriormente le dimensioni, raggiungendo un livello di qualità audio superiore. Questa tecnologia innovativa, utilizzata nella seconda serie, è protetta da due brevetti.</p>
                 
                 <p>Con la seconda serie, presentiamo un diffusore acustico dalle dimensioni di 600x390x39 mm, che offre prestazioni straordinarie nonostante il suo spessore di soli 39 mm. La risposta in frequenza si estende fino a 46 Hz in basso e raggiunge i 21 kHz in alto. Grazie alle innovative soluzioni progettuali che ne hanno guidato la concezione e la costruzione, questo diffusore sembra quasi sfidare le leggi della fisica.</p>
                 
                 <p>I diffusori della seconda serie sono disponibili sia in versione attiva che passiva. La versione attiva è wireless, con connettività Wi-Fi e Bluetooth, e una potenza di 100W. L'intero progetto è stato sviluppato per offrire prestazioni sonore di alto livello, in grado di soddisfare anche gli audiofili più esigenti. Qui accanto potete vedere il rendering e uno dei prototipi realizzati, con la produzione di serie prevista a breve.</p>
               </div>
             </div>

             {/* Colonna destra con la griglia di immagini */}
             <div className="grid grid-cols-2 gap-8">
               <div className="relative h-[270px]">
                 <Image 
                   src="/images/solutions/audio-detail-1.jpg"
                   alt="Audio Detail 1"
                   fill
                   style={{ objectFit: 'cover' }}
                   className="rounded-lg"
                 />
               </div>
               <div className="relative h-[270px]">
                 <Image 
                   src="/images/solutions/audio-detail-2.jpg"
                   alt="Audio Detail 2"
                   fill
                   style={{ objectFit: 'cover' }}
                   className="rounded-lg"
                 />
               </div>
               <div className="relative h-[270px]">
                 <Image 
                   src="/images/solutions/audio-detail-3.jpg"
                   alt="Audio Detail 3"
                   fill
                   style={{ objectFit: 'contain' }}
                   className="rounded-lg"
                 />
               </div>
               <div className="relative h-[270px]">
                 <Image 
                   src="/images/solutions/audio-detail-super-f-4.jpg"
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