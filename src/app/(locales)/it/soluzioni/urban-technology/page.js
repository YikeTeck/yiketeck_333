import Image from 'next/image'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function UrbanTechnology() {
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
                  Urban Technology
                </h1>
                <p className="text-xl text-[#374151] mb-8">
                  Innovazione per le città intelligenti
                </p>
                <p className="text-lg text-[#374151]">
                  Sviluppiamo soluzioni urbane intelligenti, integrando IoT e tecnologie avanzate per creare città più efficienti, sostenibili e vivibili.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image 
                  src="/images/solutions/urban-tech.jpg"
                  alt="Urban Technology"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Smart Lighting Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-[#374151] mb-12">
              Le nostre soluzioni
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Colonna sinistra con il testo */}
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <h3 className="text-2xl font-light text-[#374151] mb-4">
                  Illuminazione Pubblica Intelligente IoT
                </h3>
                <div className="text-[#374151] space-y-4">
                  <p>L'illuminazione stradale basata su IoT rappresenta una soluzione innovativa che integra sensori, reti di comunicazione e software di gestione per monitorare e regolare i lampioni stradali in tempo reale. Grazie a questa tecnologia, i lampioni diventano "smart", adattando automaticamente la luminosità in base alle condizioni ambientali, alla presenza di veicoli o pedoni e alla luce naturale, ottimizzando così la sicurezza e l'efficienza energetica. In caso di malfunzionamenti, il sistema rileva i guasti, consentendo interventi di manutenzione tempestivi e riducendo i tempi di inattività.</p>
                  
                  <p>Un aspetto distintivo è la capacità di questi sistemi di funzionare in modalità ibrida, sfruttando uno <strong>storage di energia</strong>: il lampione utilizza l'energia immagazzinata nelle batterie prima di passare all'alimentazione dalla rete elettrica. Questo approccio è valido in qualsiasi contesto urbano, indipendentemente dall'accessibilità alla rete, e permette di ottenere un notevole risparmio, riducendo di oltre il 40% l'energia prelevata dalla rete per gli enti pubblici che scelgono di adottare questa tecnologia.</p>
                  
                  <p>La gestione centralizzata consente inoltre di raccogliere dati per analisi predittive, migliorando l'efficienza complessiva e integrandosi con altre infrastrutture urbane, come i sistemi per il monitoraggio della qualità dell'aria. Dotati di sensori di movimento e controllo della luminosità, i lampioni possono regolare l'illuminazione in linea con le normative locali, ottimizzando ulteriormente il consumo energetico. Le diverse opzioni di montaggio e l'angolo di inclinazione regolabile ne facilitano l'adattamento a vari contesti urbani.</p>
                  
                  <p>Questa combinazione di tecnologie rappresenta un'innovazione significativa nell'illuminazione pubblica, fornendo soluzioni sostenibili e ad alte prestazioni per la gestione della luce e il miglioramento della qualità della vita nelle città.</p>
                </div>
              </div>

              {/* Colonna destra con la griglia di immagini */}
              <div className="grid grid-cols-2 gap-8">
                <div className="relative h-[270px]">
                  <Image 
                    src="/images/solutions/urban-detail-n-1.jpg"
                    alt="Urban Detail 1"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[270px]">
                  <Image 
                    src="/images/solutions/urban-detail-2.jpg"
                    alt="Urban Detail 2"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[270px]">
                  <Image 
                    src="/images/solutions/urban-detail-3.jpg"
                    alt="Urban Detail 3"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[270px]">
                  <Image 
                    src="/images/solutions/urban-detail-4.jpg"
                    alt="Urban Detail 4"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="mt-12 overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 border text-left">Reference</th>
                    <th className="px-4 py-3 border text-left">Power (W)</th>
                    <th className="px-4 py-3 border text-left">Battery capacity</th>
                    <th className="px-4 py-3 border text-left">Color temp.(xx00K)</th>
                    <th className="px-4 py-3 border text-left">PCB LED number</th>
                    <th className="px-4 py-3 border text-left">Luminous flux (lm)</th>
                    <th className="px-4 py-3 border text-left">Working temperature</th>
                    <th className="px-4 py-3 border text-left">Dimensions AxBxC (mm)</th>
                    <th className="px-4 py-3 border text-left">Weight (Kg)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border">Solar street lamp IOTSOL030</td>
                    <td className="px-4 py-3 border">30W</td>
                    <td className="px-4 py-3 border">230.4Wh-18Ah</td>
                    <td className="px-4 py-3 border">30-40-50</td>
                    <td className="px-4 py-3 border">108</td>
                    <td className="px-4 py-3 border">6000</td>
                    <td className="px-4 py-3 border">0 to 50°C</td>
                    <td className="px-4 py-3 border">703x301x250</td>
                    <td className="px-4 py-3 border">7.3±0.3</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border">Solar street lamp IOTSOL040</td>
                    <td className="px-4 py-3 border">40W</td>
                    <td className="px-4 py-3 border">307.2Wh-24Ah</td>
                    <td className="px-4 py-3 border">30-40-50</td>
                    <td className="px-4 py-3 border">216</td>
                    <td className="px-4 py-3 border">8000</td>
                    <td className="px-4 py-3 border">0 to 50°C</td>
                    <td className="px-4 py-3 border">910x429x291</td>
                    <td className="px-4 py-3 border">13.9±0.3</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border">Solar street lamp IOTSOL050</td>
                    <td className="px-4 py-3 border">50W</td>
                    <td className="px-4 py-3 border">384W-30Ah</td>
                    <td className="px-4 py-3 border">30-40-50</td>
                    <td className="px-4 py-3 border">216</td>
                    <td className="px-4 py-3 border">10000</td>
                    <td className="px-4 py-3 border">0 to 50°C</td>
                    <td className="px-4 py-3 border">910x429x291</td>
                    <td className="px-4 py-3 border">14.4±0.3</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border">Solar street lamp IOTSOL060</td>
                    <td className="px-4 py-3 border">60W</td>
                    <td className="px-4 py-3 border">460.8Wh-36Ah</td>
                    <td className="px-4 py-3 border">30-40-50</td>
                    <td className="px-4 py-3 border">216</td>
                    <td className="px-4 py-3 border">12000</td>
                    <td className="px-4 py-3 border">0 to 50°C</td>
                    <td className="px-4 py-3 border">910x429x291</td>
                    <td className="px-4 py-3 border">15.0±0.3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Smart Trash Bins Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Colonna sinistra con il testo */}
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <h3 className="text-2xl font-light text-[#374151] mb-4">
                  Smart Trash Bins
                </h3>
                <div className="text-[#374151] space-y-4">
                  <p>Gli smart trash bins, sono contenitori per rifiuti dotati di tecnologia IoT in grado di monitorare in tempo reale il livello di riempimento e la tipologia dei rifiuti raccolti. Grazie a sensori integrati e alla possibilità di comunicare con sistemi centrali, questi dispositivi permettono di ottimizzare i percorsi di raccolta, riducendo i costi e l'impatto ambientale, oltre a migliorare l'igiene urbana evitando l'accumulo eccessivo di rifiuti. Utili sia per le utenze private sia per le amministrazioni pubbliche, i cestini intelligenti contribuiscono a mantenere più puliti e ordinati gli spazi pubblici, aumentando la qualità della vita urbana.</p>
                  
                  <p>Il nostro team di Ricerca e Sviluppo sta attualmente lavorando su nuovi modelli di smart trash bins che integreranno funzionalità ancora più avanzate, come un'efficienza energetica migliorata e una maggiore capacità di adattamento alle diverse esigenze cittadine. A breve saremo pronti a lanciare sul mercato queste soluzioni innovative, con l'obiettivo di offrire tecnologie sostenibili e performanti per la gestione dei rifiuti e l'ottimizzazione delle risorse urbane.</p>
                </div>
              </div>

              {/* Colonna destra con l'immagine */}
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image 
                  src="/images/solutions/urban-trash.jpg"
                  alt="Smart Trash Bins"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}