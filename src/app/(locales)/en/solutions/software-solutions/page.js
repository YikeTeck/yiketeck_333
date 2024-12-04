import Image from 'next/image'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function SoftwareSolutions() {
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
                  Software Solutions
                </h1>
                <p className="text-xl text-[#374151] mb-8">
                  Enhance your potential
                </p>
                <p className="text-lg text-[#374151]">
                  We design and develop software solutions aimed at increasing user performance, combining technological knowledge with understanding of cognitive function.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image 
                  src="/images/solutions/software.jpg"
                  alt="Software Solutions"
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
              Flomindy Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left column with text */}
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <h3 className="text-2xl font-light text-[#374151] mb-4">
                  Software Design
                </h3>
                <div className="text-[#374151] space-y-4">
                  <p>The study of human perceptual systems and the functioning characteristics of our brain has allowed us to design innovative software capable of elevating common-use products like smartphones, tablets, and computers, so that their use is more effective and can increase and maintain the user's cognitive abilities.</p>
                  <p>This is the case with the applications provided by our Flomindy brand.</p>
                </div>
              </div>

              {/* Right column with image grid */}
              <div className="grid grid-cols-2 gap-8">
                <div className="relative h-[230px]">
                  <Image 
                    src="/images/solutions/software-solution-0.jpg"
                    alt="Software Detail 1"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[230px]">
                  <Image 
                    src="/images/solutions/software-solution-1.jpg"
                    alt="Software Detail 2"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[230px]">
                  <Image 
                    src="/images/solutions/software-solution-2.jpg"
                    alt="Software Detail 3"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[230px]">
                  <Image 
                    src="/images/solutions/software-solution-3.jpg"
                    alt="Software Detail 4"
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