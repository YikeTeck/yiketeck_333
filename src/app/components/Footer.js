'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const lang = pathname.split('/')[1]

  const content = {
    en: {
      motto: "- Minds without borders, ideas without limits -",
      menu: "Menu",
      contact: "Contact",
      contact_zh: "联系方式",
      menuItems: [
        { title: "Home", path: "" },
        { title: "About", path: "/about" },
        { title: "Audio & Acoustics", path: "/solutions/audio-acoustics" },
        { title: "Software Solutions", path: "/solutions/software-solutions" },
        { title: "Smart Systems", path: "/solutions/smart-systems" },
        { title: "Urban Technology", path: "/solutions/urban-technology" },
        { title: "Industrial Solutions", path: "/solutions/industrial" },
        { title: "Contact", path: "/contact" }
      ],
      copyright: "© 2025 YiKe Teck. All rights reserved."
    },
    it: {
      motto: "- Menti senza confini, idee senza limiti -",
      menu: "Menu",
      contact: "Contatti",
      contact_zh: "联系方式",
      menuItems: [
        { title: "Home", path: "" },
        { title: "Chi Siamo", path: "/chi-siamo" },
        { title: "Audio & Acustica", path: "/soluzioni/audio-acustica" },
        { title: "Software Solutions", path: "/soluzioni/software-solutions" },
        { title: "Smart Systems", path: "/soluzioni/smart-systems" },
        { title: "Urban Technology", path: "/soluzioni/urban-technology" },
        { title: "Industrial Solutions", path: "/soluzioni/industrial" },
        { title: "Contatti", path: "/contatti" }
      ],
      copyright: "© 2025 YiKe Teck. Tutti i diritti riservati."
    },
    zh: {
      motto: "- 思维无界，创意无限 -",
      menu: "菜单",
      contact: "联系我们",
      contact_zh: "联系方式",
      menuItems: [
        { title: "首页", path: "" },
        { title: "关于我们", path: "/about" },
        { title: "音频与声学", path: "/solutions/audio-acoustics" },
        { title: "软件解决方案", path: "/solutions/software-solutions" },
        { title: "智能系统", path: "/solutions/smart-systems" },
        { title: "城市科技", path: "/solutions/urban-technology" },
        { title: "工业解决方案", path: "/solutions/industrial" },
        { title: "联系我们", path: "/contact" }
      ],
      copyright: "© 2025 易科科技。保留所有权利。"
    }
  }

  return (
    <footer className="bg-[#2D3748] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div>
            <Link href={`/${lang}`} className="inline-block mb-4">
              <Image
                src="/images/logo/logo-header-white-new.svg"
                alt="YiKe Teck"
                width={270}
                height={270}
              />
            </Link>
            <p className="text-gray-720">
              {content[lang]?.motto}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">{content[lang]?.menu}</h3>
            <ul className="space-y-2">
              {content[lang]?.menuItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={`/${lang}${item.path}`} 
                    className="text-white hover:text-[#C4A661] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4 text-white">{content[lang]?.contact}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>YiKe Technology Co., Ltd.</li>
                <li>No. 80 Shilong Section,</li>
                <li>Dongjiang Avenue,</li>
                <li>Shilong Town, Dongguan,</li>
                <li>Guangdong Province, China</li>
                <li></li>
                <li className="mt-4"></li>
                <li>+ 86 0769-86889123</li>
                <li>+86 133 16376169</li>
                <li>+39 348 4029687</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 text-white">{content[lang]?.contact_zh}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>意科技术（东莞）有限公司</li>
                <li>广东省东莞市</li>
                <li>石龙镇东江大道</li>
                <li>石龙段80号</li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>{content[lang]?.copyright}</p>
        </div>
      </div>
    </footer>
  )
}