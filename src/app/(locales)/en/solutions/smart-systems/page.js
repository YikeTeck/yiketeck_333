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
                  Autonomous interactive solutions
                </p>
                <p className="text-lg text-[#374151]">
                  Smart systems like lockers and kiosks offer 24/7 interactive services, improving efficiency for users and administrators with practical and secure solutions. We innovate the user experience through advanced technologies that simplify everyday life.
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
                <h3 className="text-2xl font-light text-[#374151] mb-4">Simplify deliveries</h3>
                <p className="text-[#374151]">
                  Smart Lockers, also called Parcel Lockers, are intelligent and automated lockers for parcel pickup and delivery. Located in public or private spaces, they allow customers to pick up or return packages and documents securely and independently, using a unique code sent via message or email.
                  <br /><br />
                  The logistics and e-commerce world is adapting to new technological needs and changes in social behavior related to product purchases or service usage. These smart cabinets simplify deliveries, reducing waiting times and offering greater flexibility to customers, who can pick up packages 24/7 without direct interactions with staff.
                  <br /><br />
                  In this case too, our products are entirely designed by us, taking care of every detail in both design and usability.
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

        {/* Interactive Kiosks Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-[#374151] mb-12">Interactive Kiosks</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <h3 className="text-2xl font-light text-[#374151] mb-4">Intuitive user experience</h3>
                <p className="text-[#374151]">
                  Interactive kiosks are autonomous digital devices equipped with displays, QR code readers, printers, and other peripherals that facilitate direct interaction with users.
                  <br /><br />
                  Used in environments such as shops, fast food restaurants, airports, and public offices, they allow quick operations like ticket purchases, information consultation, and receipt or label printing. Thanks to their versatility, these kiosks improve service efficiency and offer an intuitive and modern user experience.
                  <br /><br />
                  Our products, entirely designed by us, use a 32-inch high-brightness display, to adapt to all installation environments, including very bright locations.
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