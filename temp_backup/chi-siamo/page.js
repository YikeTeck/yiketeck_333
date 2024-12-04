import Image from 'next/image'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function ChiSiamo() {
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
                  Chi Siamo
                </h1>
                <p className="text-xl text-[#374151] mb-8">
                  Dove l'innovazione incontra la tecnologia e il design
                </p>
                <p className="text-lg text-[#374151]">
                  YiKe Teck nasce dall'unione di competenze tecnologiche e visione innovativa. 
                  Il nostro approccio si basa sull'osservazione della natura come fonte d'ispirazione 
                  per lo sviluppo di soluzioni tecnologiche avanzate.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/chi-siamo.jpg" alt="YiKe Teck Chi Siamo" fill style={{ objectFit: 'cover' }} priority />
              </div>
            </div>
          </div>
        </section>

        {/* Chi è YiKe Teck Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-[#374151] mb-12">Chi è YiKe Teck</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <div className="text-[#374151] space-y-8">
                  <div className="space-y-4">
                    <p>
                      Fondata nel 2018, YiKe Teck si propone di unire sensorialità umana, scienza e tecnologia,
                      costruendo su un'esperienza approfondita nel campo della tecnologia e del design.
                      La nostra competenza si estende dall'ingegneria audio allo sviluppo di interfacce 
                      uomo-macchina (HMI), unendo l'innovazione europea con la capacità manifatturiera cinese.
                    </p>
                    <p>
                      Con sede strategica a Dongguan, nel cuore della provincia del Guangdong, siamo posizionati
                      in uno dei principali poli tecnologici della Cina, vicino a centri d'eccellenza come Shenzhen,
                      Guangzhou, Guzhen (la capitale mondiale dell'illuminazione) e Hong Kong. Questa collocazione,
                      insieme al nostro background tecnologico europeo, crea un ponte ideale tra l'innovazione
                      occidentale e l'eccellenza manifatturiera orientale.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p>
                      Il nostro portfolio include prodotti innovativi, con prodotti audio, sistemi intelligenti,
                      dispositivi IoT per le smart cities e software per il potenziamento delle capacità cognitive,
                      molte delle soluzioni adottate sono protette da brevetti. Grazie alla nostra esperienza 
                      in Cina e alla rete consolidata di contatti ed entità nel settore tecnologico, siamo anche 
                      in grado di offrire ulteriori soluzioni e supporto alle aziende globali nei seguenti ambiti:
                    </p>
                    <ul className="list-inside space-y-2">
                      <li>· Consulenza tecnica e progettazione</li>
                      <li>· Approvvigionamento strategico di componenti e semilavorati</li>
                      <li>· Sviluppo e design di prodotto</li>
                      <li>· Supporto alla produzione e controllo qualità</li>
                    </ul>
                    <p>
                      Per l'approvvigionamento, la logistica e lo stoccaggio, collaboriamo strettamente con
                      Shamana (www.shamana-china.com), una rinomata azienda situata anch'essa a Dongguan,
                      a pochi passi dai nostri uffici.
                    </p>
                    <p>
                      In YiKe Teck ma creiamo valore attraverso l'innovazione e competenza.
                      Siamo pronti ad ascoltare le vostre sfide e contribuire con la nostra esperienza
                      ai vostri progetti.
                    </p>
                    <p>
                      Mettiamo a vostra disposizione le nostre soluzioni e competenze ed insieme
                      creeremo risultati tangibili e duraturi.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image src="/images/chi-siamo-2.jpg" alt="YiKe Teck Storia 1" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image src="/images/chi-siamo-3.jpg" alt="YiKe Teck Storia 2" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image src="/images/chi-siamo-4.jpg" alt="YiKe Teck Storia 3" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Il Nostro Logo Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-[#374151] mb-12">Il Nostro Logo</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <div className="text-[#374151] space-y-8">
                  <p>
                    In cinese, 'Yike' (意科) è un termine che evoca l'Italia, il suo design e la sua tecnologia - 
                    letteralmente significa 'tecnologia italiana' o 'scienza italiana'.
                  </p>

                  <p>
                    La scelta della K finale in 'Teck' non è casuale: crea un equilibrio visivo con la K già 
                    presente in 'Yike' e, al contempo, richiama il simbolo del transistor nel nostro logo, 
                    costruito rovesciando le iniziali Y e T - il componente inventato nel 1947 e dal quale 
                    si è sviluppata tutta la tecnologia moderna.
                  </p>

                  <p>
                    Questa fusione di significati riflette perfettamente la nostra cura per i dettagli e 
                    la nostra identità: un ponte tra il design italiano e la tecnologia globale.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/logo-significato-n-1.jpg" alt="YiKe Teck Logo Significato" fill style={{ objectFit: 'contain' }} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}