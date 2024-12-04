import Image from 'next/image'

export default function About() {
  return (
    <section className="bg-[#F6F6F6] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-[#374151] mb-16">
          Chi Siamo
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <p className="text-lg text-[#374151]">
              YiKe Teck nasce dall'unione di competenze tecnologiche e visione innovativa. 
              Il nostro approccio si basa sull'osservazione della natura come fonte 
              d'ispirazione per lo sviluppo di soluzioni tecnologiche avanzate.
            </p>
            <p className="text-lg text-[#374151]">
              Ci specializziamo in due aree principali: l'ingegneria audio di alta precisione 
              e lo sviluppo di software cognitivi. In entrambi i campi, applichiamo principi 
              naturali per creare soluzioni efficienti e sostenibili.
            </p>
            <p className="text-lg text-[#374151]">
              La nostra missione è portare l'innovazione tecnologica a un nuovo livello, 
              sempre nel rispetto dell'armonia che la natura ci insegna.
            </p>
          </div>
          <div className="relative h-[400px] bg-white rounded-lg shadow-sm overflow-hidden">
            <Image 
              src="/images/chi-siamo.jpg"
              alt="YiKe Teck Chi Siamo"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}