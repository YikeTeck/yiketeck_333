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
                  Innovation for smart cities
                </p>
                <p className="text-lg text-[#374151]">
                  We develop smart urban solutions, integrating IoT and advanced technologies to create more efficient, sustainable, and livable cities.
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
              Our Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left column with text */}
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <h3 className="text-2xl font-light text-[#374151] mb-4">
                  IoT Smart Street Lighting
                </h3>
                <div className="text-[#374151] space-y-4">
                  <p>IoT-based street lighting represents an innovative solution that integrates sensors, communication networks, and management software to monitor and regulate street lamps in real-time. Thanks to this technology, the lamps become "smart", automatically adapting brightness based on environmental conditions, vehicle or pedestrian presence, and natural light, thus optimizing safety and energy efficiency. In case of malfunctions, the system detects faults, enabling timely maintenance interventions and reducing downtime.</p>
                  <p>A distinctive aspect is these systems' ability to operate in hybrid mode, using <strong>energy storage</strong>: the lamp uses stored energy in batteries before switching to power from the electrical grid. This approach is valid in any urban context, regardless of grid accessibility, and allows for significant savings, reducing by over 40% the energy drawn from the grid for public entities choosing to adopt this technology.</p>
                  <p>Centralized management also enables data collection for predictive analysis, improving overall efficiency and integrating with other urban infrastructures, such as air quality monitoring systems. Equipped with motion sensors and brightness control, the lamps can regulate illumination in line with local regulations, further optimizing energy consumption. The various mounting options and adjustable tilt angle facilitate adaptation to various urban contexts.</p>
                  <p>This combination of technologies represents a significant innovation in public lighting, providing sustainable and high-performance solutions for light management and improving quality of life in cities.</p>
                </div>
              </div>

              {/* Right column with image grid */}
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
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <h3 className="text-2xl font-light text-[#374151] mb-4">
                  Smart Trash Bins
                </h3>
                <div className="text-[#374151] space-y-4">
                  <p>Smart trash bins are IoT-enabled waste containers capable of real-time monitoring of fill levels and the type of waste collected. Thanks to integrated sensors and the ability to communicate with central systems, these devices allow optimization of collection routes, reducing costs and environmental impact, as well as improving urban hygiene by avoiding excessive waste accumulation. Useful for both private users and public administrations, smart bins help keep public spaces cleaner and more orderly, increasing urban quality of life.</p>
                  <p>Our Research and Development team is currently working on new smart trash bin models that will integrate even more advanced features, such as improved energy efficiency and greater adaptability to different city needs. Soon we will be ready to launch these innovative solutions on the market, with the aim of offering sustainable and high-performance technologies for waste management and urban resource optimization.</p>
                </div>
              </div>
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