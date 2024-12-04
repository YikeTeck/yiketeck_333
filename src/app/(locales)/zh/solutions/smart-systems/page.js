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
                  智能系统
                </h1>
                <p className="text-xl text-[#374151] mb-8">
                  自主交互解决方案
                </p>
                <p className="text-lg text-[#374151]">
                  智能系统（如智能寄存柜和自助服务终端）提供24/7交互式服务，通过实用安全的解决方案提高用户和管理员的效率。我们通过先进技术创新用户体验，简化日常生活。
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image 
                  src="/images/solutions/smart-systems.jpg"
                  alt="智能系统"
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
            <h2 className="text-3xl font-light text-[#374151] mb-12">智能寄存柜</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <h3 className="text-2xl font-light text-[#374151] mb-4">简化配送</h3>
                <p className="text-[#374151]">
                  智能寄存柜（也称为包裹寄存柜）是用于包裹收取和投递的智能自动化储物柜。设置在公共或私人空间，客户可以使用通过短信或电子邮件发送的唯一代码安全独立地收取或退回包裹和文件。
                  <br /><br />
                  物流和电子商务世界正在适应与产品购买或服务使用相关的新技术需求和社会行为变化。这些智能储物柜简化了配送流程，缩短等待时间，为客户提供更大的灵活性，他们可以24/7自行取包裹，无需与工作人员直接接触。
                  <br /><br />
                  在这种情况下，我们的产品也是完全由我们设计的，注重设计和可用性的每个细节。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="relative h-[250px]">
                  <Image 
                    src="/images/solutions/smart-lockers-1.jpg"
                    alt="智能寄存柜 1"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[250px]">
                  <Image 
                    src="/images/solutions/smart-lockers-2.jpg"
                    alt="智能寄存柜 2"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[250px]">
                  <Image 
                    src="/images/solutions/smart-lockers-3.jpg"
                    alt="智能寄存柜 3"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[250px]">
                  <Image 
                    src="/images/solutions/smart-lockers-4.jpg"
                    alt="智能寄存柜 4"
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
            <h2 className="text-3xl font-light text-[#374151] mb-12">交互式自助终端</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <h3 className="text-2xl font-light text-[#374151] mb-4">直观的用户体验</h3>
                <p className="text-[#374151]">
                  交互式自助终端是配备显示屏、二维码读取器、打印机和其他便于用户直接交互的外围设备的自主数字设备。
                  <br /><br />
                  在商店、快餐店、机场和公共办公室等环境中使用，可以进行快速操作，如购票、查询信息和打印收据或标签。凭借其多功能性，这些终端提高了服务效率，提供直观现代的用户体验。
                  <br /><br />
                  我们的产品完全由我们设计，采用32英寸高亮度显示屏，适应所有安装环境，包括光线很强的场所。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="relative h-[250px]">
                  <Image 
                    src="/images/solutions/kiosks-1.jpg"
                    alt="自助终端 1"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[250px]">
                  <Image 
                    src="/images/solutions/kiosks-2.jpg"
                    alt="自助终端 2"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[250px]">
                  <Image 
                    src="/images/solutions/kiosks-3.jpg"
                    alt="自助终端 3"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[250px]">
                  <Image 
                    src="/images/solutions/kiosks-4.jpg"
                    alt="自助终端 4"
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