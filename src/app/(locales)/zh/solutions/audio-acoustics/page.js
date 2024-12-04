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
                  音频与声学
                </h1>
                <p className="text-xl text-[#374151] mb-8">
                  音频工程创新
                </p>
                <p className="text-lg text-[#374151]">
                  我们开发尖端音频解决方案，将技术与意大利设计相结合，创造独特的声音体验。
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image 
                  src="/images/solutions/audio-acustica.jpg"
                  alt="音频与声学"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sound Design Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-[#374151] mb-12">
              声音设计
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left column with text */}
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <div className="text-[#374151] space-y-4">
                  <p>我们在音频工程方面的深厚专业知识推动我们探索该领域设备设计的全新创新解决方案。我们的产品旨在确保卓越的可用性，并结合"惊叹！"效果，考虑到极其紧凑的尺寸和几何形状，提供看似不可能实现的性能。所有这些都融入了意大利设计的精髓。</p>
                  <p>第一代产品（如图所示）自2019年起以"deeversa"品牌推出。目前，第二代产品进一步缩小了尺寸，实现了更优质的音频质量。第二代产品采用的这项创新技术受两项专利保护。</p>
                  <p>第二代产品推出了一款尺寸为600x390x39毫米的声学扬声器，尽管厚度仅为39毫米，但仍能提供卓越的性能。频率响应范围在低端延伸至46 Hz，在高端达到21 kHz。得益于指导其概念和构建的创新设计解决方案，这款扬声器似乎几乎挑战了物理定律。</p>
                  <p>第二代扬声器提供有源和无源两种版本。有源版本为无线设计，具有Wi-Fi和蓝牙连接功能，功率为100W。整个项目的开发旨在提供高水平的声音性能，能够满足最苛刻的音响发烧友的需求。在这里您可以看到渲染图和制作的原型之一，系列生产即将开始。</p>
                </div>
              </div>

              {/* Right column with image grid */}
              <div className="grid grid-cols-2 gap-8">
                <div className="relative h-[270px]">
                  <Image 
                    src="/images/solutions/audio-detail-1.jpg"
                    alt="音频细节 1"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[270px]">
                  <Image 
                    src="/images/solutions/audio-detail-2.jpg"
                    alt="音频细节 2"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[270px]">
                  <Image 
                    src="/images/solutions/audio-detail-3.jpg"
                    alt="音频细节 3"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[270px]">
                  <Image 
                    src="/images/solutions/audio-detail-super-f-4.jpg"
                    alt="音频细节 4"
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