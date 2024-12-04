'use client'
import Image from 'next/image'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const email = ['info', '@', 'yiketeck', '.', 'com'].join('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    try {
      await fetch('https://formspree.io/f/mldewann', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      })
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <Header />
      <div className="pt-32">
        {/* Hero Section */}
        <section className="bg-[#F6F6F6] py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-light text-[#374151] mb-6">Contact</h1>
                <p className="text-xl text-[#374151] mb-8">
                  Transform your ideas into reality
                </p>
                <p className="text-lg text-[#374151]">
                  We are ready to listen to your challenges and contribute with our expertise to your projects. Contact us to build innovative solutions together.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/contatti.jpg" alt="Contact" fill style={{ objectFit: 'cover' }} priority />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="grid grid-cols-2 gap-8">
                {/* Address */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-light text-[#374151] mb-4">Address</h3>
                    <p className="text-lg text-[#374151]">
                      YiKe Technology Co., Ltd.<br />
                      No. 80 Shilong Section,<br />
                      Dongjiang Avenue,<br />
                      Shilong Town,<br />
                      Guangdong Province, China
                    </p>
                    <p className="text-lg text-[#374151] mt-4">
                      {}<br />
                      + 86 0769-86889123<br />
                      +86 133 16376169<br />
                      +39 348 4029687
                    </p>
                  </div>

                  {/* WeChat QR Code */}
                  <div className="mt-8">
                    <h3 className="text-xl font-light text-[#374151] mb-4">WeChat</h3>
                    <div className="w-[270px] h-[270px] bg-[#F6F6F6] rounded-lg overflow-hidden">
                      <Image 
                        src="/images/wechat-qr-1.jpg" 
                        alt="WeChat QR Code"
                        width={270}
                        height={270}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Chinese */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-light text-[#374151] mb-4">总部</h3>
                    <p className="text-lg text-[#374151]">
                      意科技术（东莞）有限公司<br />
                      广东省东莞市<br />
                      石龙镇东江大道<br />
                      石龙段80号
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-[#F6F6F6] p-8 rounded-lg">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <h3 className="text-2xl font-light text-[#374151] mb-4">
                      Thank you for contacting us!
                    </h3>
                    <p className="text-lg text-[#374151]">
                      Your message has been sent successfully. We will reply as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-[#374151] mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required
                        className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C4A661]"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[#374151] mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C4A661]"
                        placeholder="Your email"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-[#374151] mb-2">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject"
                        required
                        className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C4A661]"
                        placeholder="Message subject"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[#374151] mb-2">Message</label>
                      <textarea 
                        id="message" 
                        name="message"
                        required
                        rows="4"
                        className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C4A661]"
                        placeholder="Your message"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#374151] text-white py-3 px-6 rounded-md hover:bg-[#C4A661] transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}