import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-[#F6F6F6] pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-light text-[#374151]">
              Come la natura farebbe questo progetto?
            </h1>
            <p className="text-xl text-[#374151] mt-6">
              Design italiano, tecnologia e innovazione
            </p>
            <p className="text-lg text-[#374151] mt-8">
              Ci ispiriamo alla natura per creare soluzioni tecnologiche innovative. 
              Dalla progettazione e fornitura di prodotti audio a sistemi intelligenti, dispositivi IoT per le smart cities e software per migliorare le capacità cognitive e mentali, ogni nostro progetto nasce 
              da conscienze specifiche e dall'osservazione dei modelli naturali per garantire efficienza, 
              sostenibilità e armonia.
            </p>
          </div>
          
          <div className="flex justify-end">
          <div className="relative w-[600px] h-[300px] rounded-lg overflow-hidden mr-[60px]">
              <Image 
                src="/images/hero/hero-image.jpg"
                alt="YiKe Teck Hero"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}