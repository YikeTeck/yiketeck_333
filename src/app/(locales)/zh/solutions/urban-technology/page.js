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
                  城市科技
                </h1>
                <p className="text-xl text-[#374151] mb-8">
                  智慧城市创新
                </p>
                <p className="text-lg text-[#374151]">
                  我们开发智慧城市解决方案，整合物联网和先进技术，打造更高效、可持续和宜居的城市。
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image 
                  src="/images/solutions/urban-tech.jpg"
                  alt="城市科技"
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
              我们的解决方案
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <h3 className="text-2xl font-light text-[#374151] mb-4">
                  物联网智能路灯
                </h3>
                <div className="text-[#374151] space-y-4">
                  <p>基于物联网的路灯代表着一种创新解决方案，集成了传感器、通信网络和管理软件，可以实时监控和调节路灯。借助这项技术，路灯变得"智能"，能够根据环境条件、车辆或行人的存在以及自然光自动调节亮度，从而优化安全性和能源效率。如果出现故障，系统会检测到故障，使维护人员能够及时进行干预，减少停机时间。</p>
                  <p>一个显著特点是这些系统能够以混合模式运行，利用<strong>能量存储</strong>：路灯在切换到电网供电之前使用电池中存储的能量。这种方法适用于任何城市环境，无论电网是否可及，并且可以实现显著节约，为选择采用这项技术的公共实体减少超过40%的电网用电量。</p>
                  <p>集中管理还能够收集数据用于预测分析，提高整体效率，并与其他城市基础设施（如空气质量监测系统）集成。路灯配备了运动传感器和亮度控制，可以按照当地法规调节照明，进一步优化能源消耗。各种安装选项和可调节的倾斜角度便于适应各种城市环境。</p>
                  <p>这种技术组合代表着公共照明领域的重大创新，为光线管理提供可持续的高性能解决方案，提升城市生活质量。</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="relative h-[270px]">
                  <Image 
                    src="/images/solutions/urban-detail-n-1.jpg"
                    alt="城市细节 1"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[270px]">
                  <Image 
                    src="/images/solutions/urban-detail-2.jpg"
                    alt="城市细节 2"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[270px]">
                  <Image 
                    src="/images/solutions/urban-detail-3.jpg"
                    alt="城市细节 3"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-[270px]">
                  <Image 
                    src="/images/solutions/urban-detail-4.jpg"
                    alt="城市细节 4"
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
                    <th className="px-4 py-3 border text-left">型号</th>
                    <th className="px-4 py-3 border text-left">功率 (W)</th>
                    <th className="px-4 py-3 border text-left">电池容量</th>
                    <th className="px-4 py-3 border text-left">色温 (xx00K)</th>
                    <th className="px-4 py-3 border text-left">PCB LED数量</th>
                    <th className="px-4 py-3 border text-left">光通量 (lm)</th>
                    <th className="px-4 py-3 border text-left">工作温度</th>
                    <th className="px-4 py-3 border text-left">尺寸 AxBxC (mm)</th>
                    <th className="px-4 py-3 border text-left">重量 (Kg)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border">太阳能路灯 IOTSOL030</td>
                    <td className="px-4 py-3 border">30W</td>
                    <td className="px-4 py-3 border">230.4Wh-18Ah</td>
                    <td className="px-4 py-3 border">30-40-50</td>
                    <td className="px-4 py-3 border">108</td>
                    <td className="px-4 py-3 border">6000</td>
                    <td className="px-4 py-3 border">0 至 50°C</td>
                    <td className="px-4 py-3 border">703x301x250</td>
                    <td className="px-4 py-3 border">7.3±0.3</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border">太阳能路灯 IOTSOL040</td>
                    <td className="px-4 py-3 border">40W</td>
                    <td className="px-4 py-3 border">307.2Wh-24Ah</td>
                    <td className="px-4 py-3 border">30-40-50</td>
                    <td className="px-4 py-3 border">216</td>
                    <td className="px-4 py-3 border">8000</td>
                    <td className="px-4 py-3 border">0 至 50°C</td>
                    <td className="px-4 py-3 border">910x429x291</td>
                    <td className="px-4 py-3 border">13.9±0.3</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border">太阳能路灯 IOTSOL050</td>
                    <td className="px-4 py-3 border">50W</td>
                    <td className="px-4 py-3 border">384W-30Ah</td>
                    <td className="px-4 py-3 border">30-40-50</td>
                    <td className="px-4 py-3 border">216</td>
                    <td className="px-4 py-3 border">10000</td>
                    <td className="px-4 py-3 border">0 至 50°C</td>
                    <td className="px-4 py-3 border">910x429x291</td>
                    <td className="px-4 py-3 border">14.4±0.3</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border">太阳能路灯 IOTSOL060</td>
                    <td className="px-4 py-3 border">60W</td>
                    <td className="px-4 py-3 border">460.8Wh-36Ah</td>
                    <td className="px-4 py-3 border">30-40-50</td>
                    <td className="px-4 py-3 border">216</td>
                    <td className="px-4 py-3 border">12000</td>
                    <td className="px-4 py-3 border">0 至 50°C</td>
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
                  智能垃圾箱
                </h3>
                <div className="text-[#374151] space-y-4">
                  <p>智能垃圾箱是具备物联网功能的废物容器，能够实时监测填充水平和收集的废物类型。通过集成传感器和与中央系统通信的能力，这些设备可以优化收集路线，降低成本和环境影响，并通过避免过度积累废物来改善城市卫生。对私人用户和公共管理部门都很有用，智能垃圾箱有助于保持公共空间更加清洁和有序，提高城市生活质量。</p>
                  <p>我们的研发团队目前正在开发新一代智能垃圾箱型号，将整合更先进的功能，如改进的能源效率和更强的适应不同城市需求的能力。我们很快就会在市场上推出这些创新解决方案，旨在为废物管理和城市资源优化提供可持续和高性能的技术。</p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image 
                  src="/images/solutions/urban-trash.jpg"
                  alt="智能垃圾箱"
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