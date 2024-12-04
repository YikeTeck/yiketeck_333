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
                  工业解决方案
                </h1>
                <p className="text-xl text-[#374151] mb-8">
                  定制工业解决方案
                </p>
                <p className="text-lg text-[#374151]">
                  我们提供定制的嵌入式解决方案和机械部件，包括金属外壳和散热器，将功能性、保护性和独特设计完美结合。
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image 
                  src="/images/solutions/industrial-solutions.jpg"
                  alt="工业解决方案"
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
            <h2 className="text-3xl font-light text-[#374151] mb-12">嵌入式系统</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <div className="text-[#374151] space-y-4">
                  <p><strong>嵌入式系统</strong>是设计用于在更大系统中执行特定功能的电子设备，通常具有非常精确的性能、尺寸和功耗要求。这些产品在众多领域都是不可或缺的，从工业技术到医疗、汽车等多个领域。</p>
                  <p>我们提供广泛的<strong>嵌入式产品</strong>，包括：</p>
                  <p><strong>· 显示屏</strong>：TFT、OLED、双稳态（电子纸）屏幕和其他视觉解决方案，非常适合控制和用户界面。</p>
                  <p><strong>· 电路板</strong>：电子板，包括开发板、控制板或接口板，设计确保高性能和可靠性。</p>
                  <p><strong>· 模块和传感器</strong>：通信模块（Wi-Fi、蓝牙、LTE等），用于检测温度、湿度、运动等的传感器。</p>
                  <p><strong>· 电源和转换单元</strong>：电源模块、适配器和能源管理系统。</p>
                  <p>此外，借助我们的<strong>研发团队</strong>，我们能够协助客户设计<strong>定制产品</strong>，根据每个项目的具体需求提供个性化解决方案。我们经验丰富的研发部门与客户密切合作，设计<strong>独特产品</strong>，针对客户的技术、功能和美学要求进行优化。</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="relative h-[270px]">
                  <Image 
                    src="/images/solutions/embedded-detail-1.jpg"
                    alt="嵌入式细节 1"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[270px]">
                  <Image 
                    src="/images/solutions/embedded-detail-n-2.jpg"
                    alt="嵌入式细节 2"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[270px]">
                  <Image 
                    src="/images/solutions/embedded-detail-3.jpg"
                    alt="嵌入式细节 3"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[270px]">
                  <Image 
                    src="/images/solutions/embedded-detail-4.jpg"
                    alt="嵌入式细节 4"
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
            <h2 className="text-3xl font-light text-[#374151] mb-12">机械部件</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <div className="text-[#374151] space-y-4">
                  <p>在技术工业应用的<strong>机械部件</strong>领域，我们提供一系列由坚固耐用材料制成的解决方案，非常适合保护和支撑电子元件。我们的解决方案不仅确保设备保护，还有助于打造<strong>独特精致的设计</strong>。</p>
                  <p><strong>铝制和金属外壳</strong>（如钢铁）的设计旨在满足客户的美学和功能需求。我们提供定制解决方案，在初始阶段和设计优化过程中提供支持。我们能够创建反映具体要求的<strong>定制图纸</strong>，创造兼具<strong>保护性、美观性和功能性</strong>的产品。这样，我们可以提供不仅坚固，而且具有优雅独特外观的最终产品。</p>
                  <p>对于<strong>散热器</strong>，我们深知在许多先进设备中，散热器已成为<strong>外壳设计</strong>的重要组成部分，必须在性能和美学方面都完美设计。我们提供<strong>挤压型</strong>、<strong>压铸型</strong>和<strong>切削型散热器</strong>，它们不仅优化散热性能，还能完美融入产品设计。每个散热器的设计都确保高热性能，同时不影响设备的最终外观，创造<strong>优雅实用</strong>的解决方案。</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="relative h-[180px]">
                  <Image 
                    src="/images/solutions/industrial-detail-1.jpg"
                    alt="工业细节 1"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[180px]">
                  <Image 
                    src="/images/solutions/industrial-detail-2.jpg"
                    alt="工业细节 2"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[180px]">
                  <Image 
                    src="/images/solutions/industrial-detail-3.jpg"
                    alt="工业细节 3"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[180px]">
                  <Image 
                    src="/images/solutions/industrial-detail-n-4.jpg"
                    alt="工业细节 4"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[180px]">
                  <Image 
                    src="/images/solutions/industrial-detail-5.jpg"
                    alt="工业细节 5"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[180px]">
                  <Image 
                    src="/images/solutions/industrial-detail-6.jpg"
                    alt="工业细节 6"
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