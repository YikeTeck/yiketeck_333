import Image from 'next/image'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function IndustrialSolutions() {
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
                  Customized industrial solutions
                </p>
                <p className="text-lg text-[#374151]">
                  We offer customized embedded solutions and mechanical parts, including metal cases and heat sinks, combining functionality, protection, and exclusive design.
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

        {/* Embedded Systems Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-[#374151] mb-12">Embedded Systems</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <div className="text-[#374151] space-y-4">
                  <p><strong>Embedded systems</strong> are electronic devices designed to perform specific functions within a larger system, generally with very precise performance, size, and power consumption requirements. These products are fundamental in numerous sectors, from industrial technology to medicine, automotive, and many others.</p>
                  <p>We offer a wide range of <strong>embedded products</strong> including:</p>
                  <p><strong>· Displays</strong>: TFT, OLED, bistable (e-paper) screens and other visual solutions, ideal for control and user interface.</p>
                  <p><strong>· Boards</strong>: electronic boards, including development, control, or interfacing boards, designed to ensure high and reliable performance.</p>
                  <p><strong>· Modules and Sensors</strong>: communication modules (Wi-Fi, Bluetooth, LTE, etc.), sensors for detecting temperature, humidity, movement, etc.</p>
                  <p><strong>· Power and conversion units</strong>: power modules, adapters, and energy management systems.</p>
                  <p>Moreover, thanks to our <strong>R&D team</strong>, we can assist our clients in designing <strong>custom products</strong>, offering personalized solutions based on the specific needs of each project. Our research and development department, with solid experience in the sector, works side by side with the client to design <strong>exclusive products</strong>, optimized for the client's technical, functional, and aesthetic requirements.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="relative h-[270px]">
                  <Image 
                    src="/images/solutions/embedded-detail-1.jpg"
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

        {/* Mechanical Parts Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-[#374151] mb-12">Mechanical Parts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <div className="text-[#374151] space-y-4">
                  <p>In the field of <strong>mechanical parts</strong> for technological industrial applications, we offer a wide range of solutions in robust and durable materials, ideal for protecting and supporting electronic components. Our solutions not only ensure device protection but also contribute to conferring an <strong>exclusive and refined design</strong>.</p>
                  <p><strong>Aluminum and metal casings</strong> (such as steel and iron) are designed to meet clients' aesthetic and functional needs. We offer customized solutions, supporting design both in the initial phase and in design optimization. We can create <strong>custom drawings</strong> that reflect specific requests, creating products that combine <strong>protection, aesthetics, and functionality</strong>. This way, we can offer a final product that is not only resistant but also has an elegant and distinctive appearance.</p>
                  <p>For <strong>heat sinks</strong>, we know that in many advanced devices, the heat sink becomes an integral part of the <strong>case design</strong> and must be designed impeccably, both in terms of performance and aesthetics. We offer <strong>extruded</strong>, <strong>die-cast</strong>, and <strong>skive sinks</strong> heat sinks that not only optimize thermal dissipation but integrate perfectly into the product design. Each heat sink is designed to ensure high thermal performance without compromising the final appearance of the device, creating <strong>elegant and functional</strong> solutions.</p>
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