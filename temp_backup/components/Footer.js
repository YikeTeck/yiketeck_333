import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#2D3748] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo/logo-header-white-new.svg"
                alt="YiKe Teck"
                width={270}
                height={270}
              />
            </Link>
            <p className="text-gray-720">
              - Menti senza confini, idee senza limiti -
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white hover:text-[#C4A661] transition-colors">Home</Link></li>
              <li><Link href="/chi-siamo" className="text-white hover:text-[#C4A661] transition-colors">Chi Siamo</Link></li>
              <li><Link href="/soluzioni/audio-acustica" className="text-white hover:text-[#C4A661] transition-colors">Audio & Acustica</Link></li>
              <li><Link href="/soluzioni/software-solutions" className="text-white hover:text-[#C4A661] transition-colors">Software Solutions</Link></li>
              <li><Link href="/soluzioni/smart-systems" className="text-white hover:text-[#C4A661] transition-colors">Smart Systems</Link></li>
              <li><Link href="/soluzioni/urban-technology" className="text-white hover:text-[#C4A661] transition-colors">Urban Technology</Link></li>
              <li><Link href="/soluzioni/industrial" className="text-white hover:text-[#C4A661] transition-colors">Industrial Solutions</Link></li>
              <li><Link href="/contatti" className="text-white hover:text-[#C4A661] transition-colors">Contatti</Link></li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {/* Colonna contatti in inglese */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-white">Contatti</h3>
              <ul className="space-y-2 text-gray-400">
                <li>YiKe Technology Co., Ltd.</li>
                <li>No. 80 Shilong Section,</li>
                <li>Dongjiang Avenue,</li>
                <li>Shilong Town,</li>
                <li>Guangdong Province, China</li>
                <li></li>
                <li className="mt-4">info@yiketeck.com</li>
                <li>+ 86 0769-86889123</li>
                <li>+86 133 16376169</li>
                <li>+39 348 4029687</li>
              </ul>
            </div>
            {/* Colonna contatti in cinese */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-white">联系方式</h3>
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
          <p>© {new Date().getFullYear()} YiKe Teck. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}