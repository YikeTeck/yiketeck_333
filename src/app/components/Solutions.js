'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Solutions() {
  const pathname = usePathname()
  const lang = pathname.split('/')[1]

  const content = {
    en: {
      title: "Solutions",
      solutions: [
        {
          title: "Audio & Acoustics",
          subtitle: "Innovation in audio engineering",
          path: "audio-acoustics",
          image: "/images/solutions/audio-acustica.jpg"
        },
        {
          title: "Software Solutions",
          subtitle: "Flomindy and cognitive solutions",
          path: "software-solutions",
          image: "/images/solutions/software.jpg"
        },
        {
          title: "Smart Systems",
          subtitle: "Intelligent systems and automation",
          path: "smart-systems",
          image: "/images/solutions/smart-systems.jpg"
        },
        {
          title: "Urban Technology",
          subtitle: "Solutions for smart cities",
          path: "urban-technology",
          image: "/images/solutions/urban-tech.jpg"
        },
        {
          title: "Industrial Solutions",
          subtitle: "Industrial solutions and components",
          path: "industrial",
          image: "/images/solutions/Industrial-solutions.jpg"
        }
      ]
    },
    it: {
      title: "Soluzioni",
      solutions: [
        {
          title: "Audio & Acustica",
          subtitle: "Innovazione nell'ingegneria audio",
          path: "audio-acustica",
          image: "/images/solutions/audio-acustica.jpg"
        },
        {
          title: "Software Solutions",
          subtitle: "Flomindy e soluzioni cognitive",
          path: "software-solutions",
          image: "/images/solutions/software.jpg"
        },
        {
          title: "Smart Systems",
          subtitle: "Sistemi intelligenti e automazione",
          path: "smart-systems",
          image: "/images/solutions/smart-systems.jpg"
        },
        {
          title: "Urban Technology",
          subtitle: "Soluzioni per città intelligenti",
          path: "urban-technology",
          image: "/images/solutions/urban-tech.jpg"
        },
        {
          title: "Industrial Solutions",
          subtitle: "Soluzioni e componentistica industriale",
          path: "industrial",
          image: "/images/solutions/Industrial-solutions.jpg"
        }
      ]
    },
    zh: {
      title: "解决方案",
      solutions: [
        {
          title: "音频与声学",
          subtitle: "音频工程创新",
          path: "audio-acoustics",
          image: "/images/solutions/audio-acustica.jpg"
        },
        {
          title: "软件解决方案",
          subtitle: "Flomindy与认知解决方案",
          path: "software-solutions",
          image: "/images/solutions/software.jpg"
        },
        {
          title: "智能系统",
          subtitle: "智能系统与自动化",
          path: "smart-systems",
          image: "/images/solutions/smart-systems.jpg"
        },
        {
          title: "城市科技",
          subtitle: "智慧城市解决方案",
          path: "urban-technology",
          image: "/images/solutions/urban-tech.jpg"
        },
        {
          title: "工业解决方案",
          subtitle: "工业解决方案与组件",
          path: "industrial",
          image: "/images/solutions/Industrial-solutions.jpg"
        }
      ]
    }
  }

  const getPath = (solutionPath) => {
    const basePath = lang === 'it' ? '/soluzioni/' : '/solutions/'
    return `/${lang}${basePath}${solutionPath}`
  }

  return (
    <section id="solutions-section" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-[#374151] mb-16">
          {content[lang]?.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {content[lang]?.solutions.map((solution, index) => (
            <Link href={getPath(solution.path)} key={index} className="block">
              <div className="bg-[#F6F6F6] rounded-lg p-8 transition-all hover:shadow-lg">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image 
                    src={solution.image}
                    alt={solution.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className="text-2xl font-light text-[#374151] mt-6 mb-2">
                  {solution.title}
                </h3>
                <p className="text-[#374151]">
                  {solution.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}