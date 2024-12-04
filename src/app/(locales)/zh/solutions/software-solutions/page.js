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
                  软件解决方案
                </h1>
                <p className="text-xl text-[#374151] mb-8">
                  提升您的潜力
                </p>
                <p className="text-lg text-[#374151]">
                  我们设计和开发软件解决方案，旨在提高用户表现，将技术知识与对认知功能的理解相结合。
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image 
                  src="/images/solutions/software.jpg"
                  alt="软件解决方案"
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
              Flomindy 应用程序
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left column with text */}
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <h3 className="text-2xl font-light text-[#374151] mb-4">
                  软件设计
                </h3>
                <div className="text-[#374151] space-y-4">
                  <p>对人类感知系统和大脑运作特征的研究使我们能够设计创新软件，提升智能手机、平板电脑和计算机等常用产品的功能，使其使用更加有效，并能提高和保持用户的认知能力。</p>
                  <p>这就是我们的Flomindy品牌提供的应用程序。</p>
                </div>
              </div>

              {/* Right column with image grid */}
              <div className="grid grid-cols-2 gap-8">
                <div className="relative h-[230px]">
                  <Image 
                    src="/images/solutions/software-solution-0.jpg"
                    alt="软件细节 1"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[230px]">
                  <Image 
                    src="/images/solutions/software-solution-1.jpg"
                    alt="软件细节 2"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[230px]">
                  <Image 
                    src="/images/solutions/software-solution-2.jpg"
                    alt="软件细节 3"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[230px]">
                  <Image 
                    src="/images/solutions/software-solution-3.jpg"
                    alt="软件细节 4"
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