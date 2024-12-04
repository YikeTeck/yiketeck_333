import Image from 'next/image'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function About() {
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
                  About Us
                </h1>
                <p className="text-xl text-[#374151] mb-8">
                  Where innovation meets technology and design
                </p>
                <p className="text-lg text-[#374151]">
                  YiKe Tech was born from the union of technological expertise and innovative vision. 
                  Our approach is based on observing nature as a source of inspiration 
                  for developing advanced technological solutions.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/chi-siamo.jpg" alt="YiKe Teck About Us" fill style={{ objectFit: 'cover' }} priority />
              </div>
            </div>
          </div>
        </section>

        {/* Who is YiKe Teck Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-[#374151] mb-12">Who is YiKe Teck</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <div className="text-[#374151] space-y-8">
                  <div className="space-y-4">
                    <p>
                      Founded in 2018, YiKe Teck aims to unite human sensory perception, science, and technology,
                      building on extensive experience in technology and design.
                      Our expertise extends from audio engineering to human-machine interface (HMI) development,
                      combining European innovation with Chinese manufacturing capabilities.
                    </p>
                    <p>
                      Strategically located in Dongguan, in the heart of Guangdong province, we are positioned
                      in one of China's main technology hubs, close to centers of excellence like Shenzhen,
                      Guangzhou, Guzhen (the world's lighting capital), and Hong Kong. This location,
                      together with our European technological background, creates an ideal bridge between
                      Western innovation and Eastern manufacturing excellence.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p>
                      Our portfolio includes innovative products, with audio products, intelligent systems,
                      IoT devices for smart cities, and software for enhancing cognitive capabilities,
                      many of the adopted solutions are protected by patents. Thanks to our experience
                      in China and our consolidated network of contacts and entities in the technology sector,
                      we are also able to offer additional solutions and support to global companies in the following areas:
                    </p>
                    <ul className="list-inside space-y-2">
                      <li>· Technical consulting and design</li>
                      <li>· Strategic sourcing of components and semi-finished products</li>
                      <li>· Product development and design</li>
                      <li>· Production support and quality control</li>
                    </ul>
                    <p>
                      For sourcing, logistics, and storage, we work closely with
                      Shamana (www.shamana-china.com), a renowned company also located in Dongguan,
                      just steps away from our offices.
                    </p>
                    <p>
                      At YiKe Teck, we create value through innovation and expertise.
                      We are ready to listen to your challenges and contribute with our experience
                      to your projects.
                    </p>
                    <p>
                      We put our solutions and expertise at your disposal, and together
                      we will create tangible and lasting results.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image src="/images/chi-siamo-2.jpg" alt="YiKe Teck Story 1" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image src="/images/chi-siamo-3.jpg" alt="YiKe Teck Story 2" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image src="/images/chi-siamo-4.jpg" alt="YiKe Teck Story 3" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Logo Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-[#374151] mb-12">Our Logo</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <div className="text-[#374151] space-y-8">
                  <p>
                    In Chinese, 'Yike' (意科) is a term that evokes Italy, its design and technology - 
                    literally meaning 'Italian technology' or 'Italian science'.
                  </p>

                  <p>
                    The choice of the final K in 'Teck' is not casual: it creates a visual balance with the K already 
                    present in 'Yike' and, at the same time, recalls the transistor symbol in our logo, 
                    built by flipping the Y and T initials - the component invented in 1947 from which 
                    all modern technology has developed.
                  </p>

                  <p>
                    This fusion of meanings perfectly reflects our attention to detail and 
                    our identity: a bridge between Italian design and global technology.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/logo-significato-n-1.jpg" alt="YiKe Teck Logo Meaning" fill style={{ objectFit: 'contain' }} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}