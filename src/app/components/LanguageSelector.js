'use client'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function LanguageSelector() {
  const router = useRouter()
  const pathname = usePathname()
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState(languages[0])
  const [isPulsing, setIsPulsing] = useState(true)

  useEffect(() => {
    // Determina la lingua corrente dal pathname
    const currentPath = pathname
    const langCode = currentPath.split('/')[1]
    const currentLanguage = languages.find(lang => lang.code === langCode) || languages[0]
    setCurrentLang(currentLanguage)

    const timer = setTimeout(() => {
      setIsPulsing(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [pathname])

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang)
    setIsOpen(false)
    
    // Gestisce il cambio di routing
    const currentPath = pathname
    const pathParts = currentPath.split('/')
    pathParts[1] = lang.code
    
    // Mappa i percorsi tra le lingue
    if (lang.code === 'it') {
      if (pathParts[2] === 'about') pathParts[2] = 'chi-siamo'
      if (pathParts[2] === 'contact') pathParts[2] = 'contatti'
      if (pathParts[2] === 'solutions') pathParts[2] = 'soluzioni'
      if (pathParts[3] === 'audio-acoustics') pathParts[3] = 'audio-acustica'
    } else {
      if (pathParts[2] === 'chi-siamo') pathParts[2] = 'about'
      if (pathParts[2] === 'contatti') pathParts[2] = 'contact'
      if (pathParts[2] === 'soluzioni') pathParts[2] = 'solutions'
      if (pathParts[3] === 'audio-acustica') pathParts[3] = 'audio-acoustics'
    }
    
    const newPath = pathParts.join('/')
    router.push(newPath)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 border-[#C4A661] bg-white
        ${isPulsing ? 'animate-pulse shadow-lg ring-2 ring-[#C4A661] ring-opacity-50' : 'hover:bg-gray-100'}`}
      >
        <span>{currentLang.flag}</span>
        <span className="font-medium">{currentLang.name}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang)}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
            >
              <span className="mr-2">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}