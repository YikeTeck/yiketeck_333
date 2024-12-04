import Image from 'next/image'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function SmartSystems() {
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
                  Smart Systems
                </h1>
                <p className="text-xl text-[#374151] mb-8">
                  Soluzioni interattive autonome
                </p>
                <p className="text-lg text-[#374151]">
                  Gli smart systems come lockers e kiosk offrono servizi interattivi e accessibili h24, migliorando l'efficienza per utenti e amministrazioni con soluzioni pratiche e sicure. Innoviamo l'esperienza utente attraverso tecnologie avanzate che semplificano la quotidianità.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image 
                  src="/images/solutions/smart-systems.jpg"
                  alt="Smart Systems"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Smart Lockers Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-[#374151] mb-12">Smart Lockers</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <h3 className="text-2xl font-light text-[#374151] mb-4">Semplifica le consegne</h3>
                <p className="text-[#374151]">
                  Gli Smart Locker, chiamati anche Parcel Locker, sono armadietti intelligenti e automatizzati per il ritiro e la consegna di pacchi o documenti. Posizionati in spazi pubblici o privati, permettono ai clienti di ritirare o restituire pacchi e documenti in modo sicuro e indipendente, utilizzando un codice univoco inviato via messaggio o email.
                  <br /><br />
                  Il mondo della logistica ed e-commerce si sta adattando alle nuove esigenze tecnologiche e al cambiamento del comportamento sociale legato agli acquisti di prodotti o fruizione di servizi. Questi armadi intelligenti semplificano le consegne, riducendo i tempi di attesa e offrendo maggiore flessibilità ai clienti, che possono ritirare i pacchi 24/7 senza interazioni dirette con il personale.
                  <br /><br />
                  Anche in questo caso i nostri prodotti sono progettati interamente da noi, curando ogni dettaglio sia di design sia di usabilità.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="relative h-[250px]">
                  <Image 
                    src="/images/solutions/smart-lockers-1.jpg"
                    alt="Smart Locker 1"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[250px]">
                  <Image 
                    src="/images/solutions/smart-lockers-2.jpg"
                    alt="Smart Locker 2"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[250px]">
                  <Image 
                    src="/images/solutions/smart-lockers-3.jpg"
                    alt="Smart Locker 3"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[250px]">
                  <Image 
                    src="/images/solutions/smart-lockers-4.jpg"
                    alt="Smart Locker 4"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kiosk Interattivi Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-[#374151] mb-12">Kiosk Interattivi</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <h3 className="text-2xl font-light text-[#374151] mb-4">Esperienza utente intuitiva</h3>
                <p className="text-[#374151]">
                  I kiosk interattivi sono dispositivi digitali autonomi, dotati di display, lettore di codici QR, stampante e altre periferiche che facilitano l'interazione diretta con gli utenti.
                  <br /><br />
                  Utilizzati in ambienti come negozi, fast food, aeroporti e uffici pubblici, permettono di effettuare operazioni rapide come l'acquisto di biglietti, la consultazione di informazioni e l'acquisizione di ricevute o etichette stampate. Grazie alla loro versatilità, questi kiosk migliorano l'efficienza del servizio e offrono un'esperienza utente intuitiva e moderna.
                  <br /><br />
                  I nostri prodotti, progettati interamente da noi, utilizzano un display da 32 pollici ad alta luminosità, per adattarsi a tutti gli ambienti di installazione, compresi i luoghi molto illuminati.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="relative h-[250px]">
                  <Image 
                    src="/images/solutions/kiosks-1.jpg"
                    alt="Kiosk 1"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[250px]">
                  <Image 
                    src="/images/solutions/kiosks-2.jpg"
                    alt="Kiosk 2"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[250px]">
                  <Image 
                    src="/images/solutions/kiosks-3.jpg"
                    alt="Kiosk 3"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[250px]">
                  <Image 
                    src="/images/solutions/kiosks-4.jpg"
                    alt="Kiosk 4"
                    fill
                    style={{ objectFit: 'contain' }}
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