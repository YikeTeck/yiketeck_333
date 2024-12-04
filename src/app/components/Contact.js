export default function Contact() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-[#374151] mb-16">
          Contatti
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Informazioni di contatto in tre lingue */}
          <div className="grid grid-cols-2 gap-8">
            {/* Colonna Italiana */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light text-[#374151] mb-4">
                  Sede Europa
                </h3>
                <p className="text-lg text-[#374151]">
                  San Giuliano Terme (PI)<br />
                  Italia<br />
                  +39 348 4029687<br />
                  info@yiketeck.com
                </p>
              </div>
            </div>

            {/* Colonna Inglese e Cinese */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light text-[#374151] mb-4">
                  Headquarters
                </h3>
                <p className="text-lg text-[#374151]">
                  YiKe Technology Co., Ltd.<br />
                  No. 80 Shilong Section,<br />
                  Dongjiang Avenue,<br />
                  Shilong Town,<br />
                  Guangdong Province, China<br /><br />
                  + 86 0769-86889123<br />
                  +86 133 16376169
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-light text-[#374151] mb-4">
                  总部
                </h3>
                <p className="text-lg text-[#374151]">
                  意科技术（东莞）有限公司<br />
                  广东省东莞市<br />
                  石龙镇东江大道<br />
                  石龙段80号
                </p>
              </div>
            </div>

            <div className="col-span-2">
              <h3 className="text-2xl font-light text-[#374151] mb-4">
                Orari
              </h3>
              <p className="text-lg text-[#374151]">
                Lunedì - Venerdì<br />
                09:00 - 18:00 (GMT+8)
              </p>
            </div>
          </div>

          {/* Form di contatto */}
          <div className="bg-[#F6F6F6] p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#374151] mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C4A661]"
                  placeholder="Il tuo nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#374151] mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C4A661]"
                  placeholder="La tua email"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-[#374151] mb-2">Oggetto</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C4A661]"
                  placeholder="Oggetto del messaggio"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#374151] mb-2">Messaggio</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="4"
                  className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C4A661]"
                  placeholder="Il tuo messaggio"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#374151] text-white py-3 px-6 rounded-md hover:bg-[#C4A661] transition-colors"
              >
                Invia Messaggio
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}