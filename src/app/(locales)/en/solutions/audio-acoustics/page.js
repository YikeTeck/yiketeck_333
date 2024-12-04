import Image from 'next/image'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function AudioAcoustics() {
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
                  Audio & Acoustics
                </h1>
                <p className="text-xl text-[#374151] mb-8">
                  Innovation in audio engineering
                </p>
                <p className="text-lg text-[#374151]">
                  We develop cutting-edge audio solutions, combining technology and Italian design to 
                  create unique sound experiences.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image 
                  src="/images/solutions/audio-acustica.jpg"
                  alt="Audio & Acoustics"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Solutions Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-[#374151] mb-12">
              Sound Design
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left column with text */}
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <div className="text-[#374151] space-y-4">
                  <p>Our deep know-how in audio engineering drives us to explore completely innovative solutions for designing devices in this sector. Our products are designed to ensure great usability, combined with a 'WoW!' effect, offering performance that, at first glance, seems impossible given the extremely reduced dimensions and geometries. All of this is enriched by Italian design.</p>
                  <p>The first generation, visible in the photos alongside, was presented under the "deeversa" brand since 2019. Currently, with the second generation, we have managed to further compact the dimensions, achieving superior audio quality. This innovative technology, used in the second series, is protected by two patents.</p>
                  <p>With the second series, we present an acoustic speaker with dimensions of 600x390x39 mm, which offers extraordinary performance despite its thickness of only 39 mm. The frequency response extends down to 46 Hz at the low end and reaches 21 kHz at the high end. Thanks to innovative design solutions that guided its conception and construction, this speaker seems to almost defy the laws of physics.</p>
                  <p>The speakers of the second series are available in both active and passive versions. The active version is wireless, with Wi-Fi and Bluetooth connectivity, and 100W power. The entire project has been developed to offer high-level sound performance, capable of satisfying even the most demanding audiophiles. Here alongside you can see the rendering and one of the prototypes made, with series production planned shortly.</p>
                </div>
              </div>

              {/* Right column with image grid */}
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