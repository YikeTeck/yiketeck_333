'use client'
import Image from 'next/image'
import Link from 'next/link'
import LanguageSelector from './LanguageSelector'
import { useRouter, usePathname } from 'next/navigation'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const lang = pathname.split('/')[1]

  const content = {
    en: {
      home: "Home",
      about: "About",
      solutions: "Solutions",
      contact: "Contact",
      paths: {
        about: "/about",
        contact: "/contact"
      }
    },
    it: {
      home: "Home",
      about: "Chi Siamo",
      solutions: "Soluzioni",
      contact: "Contatti",
      paths: {
        about: "/chi-siamo",
        contact: "/contatti"
      }
    },
    zh: {
      home: "首页",
      about: "关于我们",
      solutions: "解决方案",
      contact: "联系我们",
      paths: {
        about: "/about",
        contact: "/contact"
      }
    }
  }

  const scrollToSolutions = async () => {
    if (pathname !== `/${lang}`) {
      await router.push(`/${lang}`)
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
    if (path === '' && pathname === `/${lang}`) return 'text-[#C4A661]'
    if (path !== '' && pathname.includes(path)) return 'text-[#C4A661]'
    return 'text-[#374151] hover:text-[#C4A661]'
  }

  const isSolutionsActive = pathname === `/${lang}` && typeof window !== 'undefined' && document.getElementById('solutions-section')?.getBoundingClientRect().top === 0

  return (
    <header className="fixed w-full bg-white shadow-sm z-[100]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href={`/${lang}`}>
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
                  href={`/${lang}`}
                  className={`${getActiveClass('')} transition-colors`}
                >
                  {content[lang]?.home}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${lang}${content[lang]?.paths.about}`}
                  className={`${getActiveClass(content[lang]?.paths.about)} transition-colors`}
                >
                  {content[lang]?.about}
                </Link>
              </li>
              <li>
                <button 
                  onClick={scrollToSolutions} 
                  className={`${isSolutionsActive ? 'text-[#C4A661]' : 'text-[#374151] hover:text-[#C4A661]'} transition-colors font-normal`}
                  type="button"
                >
                  {content[lang]?.solutions}
                </button>
              </li>
              <li>
                <Link 
                  href={`/${lang}${content[lang]?.paths.contact}`}
                  className={`${getActiveClass(content[lang]?.paths.contact)} transition-colors`}
                >
                  {content[lang]?.contact}
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