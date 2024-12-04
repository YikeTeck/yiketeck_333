'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Hero() {
  const pathname = usePathname()
  const lang = pathname.split('/')[1]

  const content = {
    en: {
      title: "How would nature design this project?",
      subtitle: "Italian design, technology and innovation",
      description: "We draw inspiration from nature to create innovative technological solutions. From designing and supplying audio products to intelligent systems, IoT devices for smart cities and software to improve cognitive and mental capabilities, each of our projects stems from specific awareness and observation of natural patterns to ensure efficiency, sustainability and harmony."
    },
    it: {
      title: "Come la natura farebbe questo progetto?",
      subtitle: "Design italiano, tecnologia e innovazione",
      description: "Ci ispiriamo alla natura per creare soluzioni tecnologiche innovative. Dalla progettazione e fornitura di prodotti audio a sistemi intelligenti, dispositivi IoT per le smart cities e software per migliorare le capacità cognitive e mentali, ogni nostro progetto nasce da conscienze specifiche e dall'osservazione dei modelli naturali per garantire efficienza, sostenibilità e armonia."
    },
    zh: {
      title: "大自然会如何设计这个项目？",
      subtitle: "意大利设计，科技与创新",
      description: "我们从自然中汲取灵感，创造创新的技术解决方案。从设计和供应音频产品到智能系统，从智慧城市物联网设备到提升认知和心理能力的软件，我们的每个项目都源于对自然模式的特定认知和观察，以确保效率、可持续性和和谐。"
    }
  }

  return (
    <section className="bg-[#F6F6F6] pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-light text-[#374151]">
              {content[lang]?.title}
            </h1>
            <p className="text-xl text-[#374151] mt-6">
              {content[lang]?.subtitle}
            </p>
            <p className="text-lg text-[#374151] mt-8">
              {content[lang]?.description}
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