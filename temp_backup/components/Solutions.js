import Image from 'next/image'
import Link from 'next/link'

export default function Solutions() {
  return (
    <section id="solutions-section" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-[#374151] mb-16">
          Soluzioni
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Audio & Acustica Card */}
          <Link href="/soluzioni/audio-acustica" className="block">
            <div className="bg-[#F6F6F6] rounded-lg p-8 transition-all hover:shadow-lg">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image 
                  src="/images/solutions/audio-acustica.jpg"
                  alt="Audio & Acustica"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-2xl font-light text-[#374151] mt-6 mb-2">
                Audio & Acustica
              </h3>
              <p className="text-[#374151]">
                Innovazione nell'ingegneria audio
              </p>
            </div>
          </Link>

          {/* Software Solutions Card */}
          <Link href="/soluzioni/software-solutions" className="block">
            <div className="bg-[#F6F6F6] rounded-lg p-8 transition-all hover:shadow-lg">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image 
                  src="/images/solutions/software.jpg"
                  alt="Software Solutions"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-2xl font-light text-[#374151] mt-6 mb-2">
                Software Solutions
              </h3>
              <p className="text-[#374151]">
                Flomindy e soluzioni cognitive
              </p>
            </div>
          </Link>

          {/* Smart Systems Card */}
          <Link href="/soluzioni/smart-systems" className="block">
            <div className="bg-[#F6F6F6] rounded-lg p-8 transition-all hover:shadow-lg">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image 
                  src="/images/solutions/smart-systems.jpg"
                  alt="Smart Systems"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-2xl font-light text-[#374151] mt-6 mb-2">
                Smart Systems
              </h3>
              <p className="text-[#374151]">
                Sistemi intelligenti e automazione
              </p>
            </div>
          </Link>

          {/* Urban Technology Card */}
          <Link href="/soluzioni/urban-technology" className="block">
            <div className="bg-[#F6F6F6] rounded-lg p-8 transition-all hover:shadow-lg">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image 
                  src="/images/solutions/urban-tech.jpg"
                  alt="Urban Technology"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-2xl font-light text-[#374151] mt-6 mb-2">
                Urban Technology
              </h3>
              <p className="text-[#374151]">
                Soluzioni per città intelligenti
              </p>
            </div>
          </Link>

          {/* Industrial Solutions Card */}
          <Link href="/soluzioni/industrial" className="block">
            <div className="bg-[#F6F6F6] rounded-lg p-8 transition-all hover:shadow-lg">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image 
                  src="/images/solutions/Industrial-solutions.jpg"
                  alt="Industrial Solutions"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-2xl font-light text-[#374151] mt-6 mb-2">
                Industrial Solutions
              </h3>
              <p className="text-[#374151]">
                Soluzioni e componentistica industriale
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}