'use client'
import Image from 'next/image'
import Link from 'next/link'
import LanguageSelector from './LanguageSelector'
import { useRouter, usePathname } from 'next/navigation'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()

  const scrollToSolutions = async () => {
    if (pathname !== '/') {
      await router.push('/')
      setTimeout(() => {
        const element = document.getElementById('solutions-section')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById('solutions-section')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const getActiveClass = (path) => {
    if (path === '/' && pathname === '/') return 'text-[#C4A661]'
    if (path !== '/' && pathname.includes(path)) return 'text-[#C4A661]'
    return 'text-[#374151] hover:text-[#C4A661]'
  }

  const isSolutionsActive = pathname === '/' && document.getElementById('solutions-section')?.getBoundingClientRect().top === 0

  return (
    <header className="fixed w-full bg-white shadow-sm z-[100]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo/logo-complete-new.svg"
            alt="YiKe Teck"
            width={510}
            height={510}
            priority
          />
        </Link>
        <div className="flex items-center space-x-8">
          <nav>
            <ul className="flex items-center space-x-8">
              <li>
                <Link 
                  href="/" 
                  className={`${getActiveClass('/')} transition-colors`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/chi-siamo" 
                  className={`${getActiveClass('/chi-siamo')} transition-colors`}
                >
                  Chi Siamo
                </Link>
              </li>
              <li>
                <button 
                  onClick={scrollToSolutions} 
                  className={`${isSolutionsActive ? 'text-[#C4A661]' : 'text-[#374151] hover:text-[#C4A661]'} transition-colors font-normal`}
                  type="button"
                >
                  Soluzioni
                </button>
              </li>
              <li>
                <Link 
                  href="/contatti" 
                  className={`${getActiveClass('/contatti')} transition-colors`}
                >
                  Contatti
                </Link>
              </li>
            </ul>
          </nav>
          <LanguageSelector />
        </div>
      </div>
    </header>
  )
}