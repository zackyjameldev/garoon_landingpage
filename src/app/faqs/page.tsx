'use client';
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type FaqItem = {
  question: string;
  answer: string;
};

function FaqAccordionItem({ question, answer }: FaqItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-[#002029] font-medium">{question}</h3>
        <span className="text-gray-400">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && <div className="mt-2 text-gray-600 text-sm">{answer}</div>}
    </div>
  );
}

export default function FaqsPage() {
  // Define the FAQs data
  const ownerFaqs = [
    {
      question: "muxuu ii faa'iidaynayaa aniga oo ah mulkiile garoon?",
      answer: "Waxaad heli doontaa hab casri ah oo aad ku maareyso boosaska, lacagaha, jadwalka, iyo macluumaadka macaamiishaada."
    },
    {
      question: "Sidee ugu biiri karaa GaroonHub?",
      answer: "Booqo garoonhub.com ama la xidhiidhi maamulka GaroonHub si laguu diiwaangeliyo, laguna xidho garoonkaaga madasha."
    },
    {
      question: "Ma anigaa go'aaminaya qiimaha iyo saacadaha furitaanka garoonkayga?",
      answer: "Haa, adigaa si buuxda u maamula qiimaha, xilliyada u furan yahay, iyo shuruudaha boos qabsiga."
    },
    {
      question: "Sidee loo maareeyaa lacagaha la bixiyo?",
      answer: "Marka la xaqiijiyo in ciyaaryahanku si guul leh u bixiyey lacagta qabsashada adeegyada garoonka iyadoo loo marayo madasha GaroonHub, lacagta oo dhan waxaa si toos ah oo degdeg ah loogu kala qaybin doonaa."
    },
    {
      question: "Maxaa dhacaya haddii ciyaartoy la yimaado ay is khilaafaan jadwalka?",
      answer: "Jadwalka waxaa si toos ah u sugaya nidaamka GaroonHub, marka khilaaf dhaca waa arrin aad u yar oo si sahlan loo xaliyo."
    },
    {
      question: "Ma la sameyn karaa qiimo dhimis gaar ah maalmaha gaarka ah?",
      answer: "Haa, waxaad abuuri kartaa qiimo dhimis gaar ah maalmaha fasaxa ama xilliyada aan culeyska badnayn."
    },
    {
      question: "Sidee ku helayaa xogta ciyaartoyda iyo taariikhda adeegsiga garoonka?",
      answer: "App-ka GaroonHUb-Owner ee GaroonHub wuxuu kuu soo bandhigayaa warbixinno buuxa oo aad kala socon karto isticmaalka garoonkaaga."
    },
    {
      question: "Ma la xayeysiin karaa garoonkayga?",
      answer: "Haa, waxaad dooran kartaa inaad ku xayeysiisato, bogagga baraha bulshada, ama gudaha app-ka si aragtida garoonkaaga loo kordhiyo."
    },
    {
      question: "Garoonkeygu wuxuu leeyahay xeerar gaar ah, sidee ugu dari karaa?",
      answer: "Waxaad ku dari kartaa shuruudaha gaarka ah sida 'kabaha goonnida ah lama oggola' ama 'shurudaha jarista' inta la sameynayo jadwalka."
    },
    {
      question: "Maxaa dhacaya haddii ciyaartoydu aysan imaanin wakhtigooda?",
      answer: "Waxaa lagugula talinayaa in siyaasaddaadu bixiso cadeymo sida in lacagta aysan soo noqon doonin haddii la daaho."
    },
    {
      question: "Sidee ula socon karaa dakhliga bishiiba?",
      answer: "Nidaamka GaroonHub wuxuu kuu diyaarinayaa warbixinno maaliyadeed oo aad kala socon karto dakhliga iyo heerka isticmaalka garoonkaaga."
    },
    {
      question: "Haddii dhibaato farsamo timaado, yaan la xidhiidhaa?",
      answer: "Waad la xidhiidhi kartaa kooxda taageerada farsamada ee GaroonHub 15/7 si loo xalliyo cilad kasta."
    }
  ];
  
  const playerFaqs = [
    {
      question: "GaroonHub maxay tahay?",
      answer: "GaroonHub waa madal casri ah oo kuu oggolaanaysa inaad si fudud u raadiso, u ballansato, uguna bixiso lacagta garoomda kubada ee kugu dhow."
    },
    {
      question: "Sidee ayaan garoon u qasan karaa?",
      answer: "Ka dooro garoonka aad rabto app-ka GaroonHub, dooro xilliga (sacada) iyo tariikhda, kadibna ku bixi lacagta si booska laguugu xaqijiyo."
    },
    {
      question: "Miyaan iska kansali (cancel) karaa ballanta garoonka?",
      answer: "Haa, waad kansali kartaa, balse waxay ku xidhnaan doontaa siyaasadda kansalka ee garoonka. Qaar waxay bixiyaan lacag celin, qaarna ma bixiyaan."
    },
    {
      question: "Goorma ayaa la i siinayaa lacagta haddii aan kansalo?",
      answer: "Haddii kansalka la sameeyo xilli hore (tusaale 24 saac ka hor), waxaa suuragal ah in lacagtaada laguugu celiyo sii buuxda ama qeyb ahaan, iyadoo loo eegayo siyaasadda garoonka."
    },
    {
      question: "Miyaan jadwalka beddeli karaa halkii aan kansali lahaa?",
      answer: "Haa, ciyaartoydu waxay codsan karaan in jadwalka loo beddelo iyadoo la helayo oggolaansho maamulaha garoonka."
    },
    {
      question: "Sidee ku ogaadaa in garoon la heli karo?",
      answer: "App-ka GaroonHub wuxuu kuu soo bandhigayaa garoomada furan iyo xilliyada bannaan si aad si toos ah ugu aragto boosaska la heli karo."
    },
    {
      question: "Maxaa dhaca haddii roob da'o ama xaalad degdeg ah timaado?",
      answer: "Ciyaartaa dib loo dhigi karaa ama lacagtaada lagu celin karaa haddii cimilada ama xaalado kale oo aan la qorsheyn dhacaan."
    },
    {
      question: "Sidee loo bixiyaa lacagta?",
      answer: "Waxaad ku bixin kartaa lacagta adoo adeegsanaya Ebirr/Kaafi, HelloCash, Sahay, ama kaarka bangiga (Visa) ee bangiyada wadanka."
    },
    {
      question: "App-ka GaroonHub miyaanu ku shaqaynaya offline?",
      answer: "Maya, si aad u hesho garoomo iyo xog cusub, app-ku wuxuu u baahan yahay internet."
    },
    {
      question: "Ma samaysan karaa Koox joogto ah (team profile)?",
      answer: "Haa, waxaad samayn kartaa profile kooxeed si aad ugu qabsato garoomo koox ahaan oo aad u kaydiso taariikhda ciyaaraha (dhawaan filo)."
    },
    {
      question: "Ma la wadaagi karaa xogta (QR-ka) booking-ka ciyaartoy kale?",
      answer: "Haa, waxaad u diri kartaa saaxiibadaa (team) QR code si ay ugu xaqiijin booska."
    },
    {
      question: "Miyaan heli karaa warbixinno ku saabsan taariikhda ciyaarihii hore?",
      answer: "Haa, qaybta 'My Bookings' waxaad ka heli kartaa dhammaan ciyaarihii aad hore u qabsatay."
    },
    {
      question: "Sidee ula xidhiidhaa taageerada macaamiisha haddii ay dhibaato dhacdo?",
      answer: "Waxaad kala xiriiri kartaa garoonhubapp@gmail.com ama adeegga macaamiisha ee gudaha app-ka oo 15/7 diyaar ah."
    }
  ];
  
  return (
    <div className="bg-white">
      <Navbar />
       
      <div className='m-2 md:mx-5 my-2 '>

      {/* Hero Section */}
      <section className="w-full py-20 px-6 md:px-12 bg-[#002029] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FAQs</h1>
        </div>
      </section>
      </div>
      
      
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-[#002029] mb-2">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-12">Have questions? We're here to help.</p>
        
        {/* Owner Questions */}
        <div className="mb-12">
        <div className="items-center justify-center flex">
          <h3 className="text-2xl font-bold text-[#002029] mb-6">Owner Questions</h3>
        </div>
          <div className="space-y-2">
            {ownerFaqs.map((faq, idx) => (
              <FaqAccordionItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
        
        {/* Player Questions */}
        <div className="mb-12">
          <div className="items-center justify-center flex">
          <h3 className="text-2xl font-bold text-[#002029] mb-6">Player Questions</h3>
          </div>
          <div className="space-y-2">
            {playerFaqs.map((faq, idx) => (
              <FaqAccordionItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
             {/* CTA Section */}
     
      </main>
      <div className="mt-20 bg-[#002029] rounded-lg p-12 text-center text-white max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Ready to transform your Football experience</h2>
        <div className="flex justify-center gap-4">
          <a href="#" className="transition duration-300 hover:opacity-90">
            <img src="/Crypto-Finance-App-Store.webp.svg" alt="Download on App Store" className="h-12" />
          </a>
          <a href="#" className="transition duration-300 hover:opacity-90">
            <img src="/Crypto-Finance-Google-Play.webp.svg" alt="Get it on Google Play" className="h-12" />
          </a>
        </div>
      </div>
      
      <div className='md:m-5 mb-0'>
      <Footer />
      </div>
    </div>
  );
}