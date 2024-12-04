'use client'
import { useState, useEffect } from 'react'

export default function LanguageSelector() {
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' }
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState(languages[2])
  const [isPulsing, setIsPulsing] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPulsing(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

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
              onClick={() => {
                setCurrentLang(lang)
                setIsOpen(false)
              }}
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