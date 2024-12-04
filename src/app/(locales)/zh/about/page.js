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
                  关于我们
                </h1>
                <p className="text-xl text-[#374151] mb-8">
                  创新科技与设计的完美结合
                </p>
                <p className="text-lg text-[#374151]">
                  易科科技源于技术专长和创新愿景的结合。我们的方法基于观察自然，将其作为开发先进技术解决方案的灵感来源。
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/chi-siamo.jpg" alt="易科科技 关于我们" fill style={{ objectFit: 'cover' }} priority />
              </div>
            </div>
          </div>
        </section>

        {/* Who is YiKe Teck Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-[#374151] mb-12">易科科技简介</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <div className="text-[#374151] space-y-8">
                  <div className="space-y-4">
                    <p>
                      易科科技成立于2018年，致力于将人类感知、科学和技术相结合，建立在丰富的技术和设计经验基础之上。
                      我们的专业知识涵盖从音频工程到人机界面（HMI）开发，将欧洲创新与中国制造能力相结合。
                    </p>
                    <p>
                      我们的总部战略性地位于广东省东莞市，处于中国主要科技中心之一，
                      毗邻深圳、广州、古镇（世界照明之都）和香港等卓越中心。这一地理位置，
                      加上我们的欧洲技术背景，为西方创新和东方制造卓越搭建了理想的桥梁。
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p>
                      我们的产品组合包括创新产品，涵盖音频产品、智能系统、智慧城市物联网设备和增强认知能力的软件，
                      许多采用的解决方案都受专利保护。凭借我们在中国的经验以及在技术领域稳固的联系网络，
                      我们能够在以下领域为全球企业提供额外的解决方案和支持：
                    </p>
                    <ul className="list-inside space-y-2">
                      <li>· 技术咨询与设计</li>
                      <li>· 组件和半成品的战略采购</li>
                      <li>· 产品开发和设计</li>
                      <li>· 生产支持和质量控制</li>
                    </ul>
                    <p>
                      在采购、物流和仓储方面，我们与Shamana（www.shamana-china.com）密切合作，
                      这是一家同样位于东莞、距离我们办公室仅几步之遥的知名公司。
                    </p>
                    <p>
                      在易科科技，我们通过创新和专业知识创造价值。
                      我们随时准备倾听您的挑战，并以我们的经验为您的项目做出贡献。
                    </p>
                    <p>
                      我们为您提供解决方案和专业知识，共同创造有形且持久的成果。
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image src="/images/chi-siamo-2.jpg" alt="易科科技 故事 1" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image src="/images/chi-siamo-3.jpg" alt="易科科技 故事 2" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image src="/images/chi-siamo-4.jpg" alt="易科科技 故事 3" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Logo Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-[#374151] mb-12">我们的标志</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                <div className="text-[#374151] space-y-8">
                  <p>
                    在中文中，"意科"（Yike）是一个令人联想到意大利及其设计和技术的词语 - 
                    字面意思是"意大利技术"或"意大利科学"。
                  </p>

                  <p>
                    "Teck"中最后的K并非随意选择：它与"Yike"中已有的K形成视觉平衡，
                    同时也呼应了我们标志中的晶体管符号，这是通过翻转Y和T首字母构建而成的 
                    - 这个部件发明于1947年，现代技术就是从这里发展而来。
                  </p>

                  <p>
                    这种含义的融合完美体现了我们对细节的关注和我们的身份：
                    意大利设计与全球技术之间的桥梁。
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/logo-significato-n-1.jpg" alt="易科科技 标志含义" fill style={{ objectFit: 'contain' }} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}