import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <Image
              src="/logo-horizontal-black.png"
              alt="Mariotti Law Group"
              width={220}
              height={50}
              priority
            />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            <a href="#about" className="text-gray-600 hover:text-black transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-600 hover:text-black transition-colors">
              Practice Areas
            </a>
            <a href="#contact" className="text-gray-600 hover:text-black transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="mb-10">
            <Image
              src="/logo-horizontal-white.png"
              alt="Mariotti Law Group"
              width={400}
              height={90}
              priority
              className="mx-auto"
            />
          </div>
          <div className="w-16 h-px bg-[#c4a97d] mx-auto mb-8" />
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-4">
            Corporate · Real Estate · Wills &amp; Estates
          </p>
          <p className="text-base text-gray-400 max-w-xl mx-auto leading-relaxed mb-10">
            Providing trusted, personalized legal counsel to individuals and businesses across Ontario.
          </p>
          <a
            href="#contact"
            className="inline-block border border-[#c4a97d] text-[#c4a97d] px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#c4a97d] hover:text-white transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm tracking-widest text-[#8b7355] uppercase mb-4">About the Firm</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 leading-tight">
                Dedicated Legal Excellence
              </h2>
              <div className="w-12 h-px bg-[#c4a97d] mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                At Mariotti Law Group, we believe in building lasting relationships with our clients through
                integrity, diligence, and a deep understanding of their unique legal needs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team brings a meticulous, client-focused approach to every matter &mdash; whether you
                are purchasing your first home, planning your estate, or structuring a business transaction.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/stamp-black.png"
                alt="Mariotti Law Group Seal"
                width={300}
                height={300}
                className="opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="services" className="py-24 bg-[#f7f5f2]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-[#8b7355] uppercase mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Practice Areas</h2>
            <div className="w-12 h-px bg-[#c4a97d] mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <PracticeCard
              title="Corporate Law"
              description="From incorporations and shareholder agreements to commercial transactions, we help businesses navigate complex legal landscapes with confidence."
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                </svg>
              }
            />
            <PracticeCard
              title="Real Estate"
              description="We guide clients through every stage of real estate transactions — residential and commercial purchases, sales, refinances, and title matters."
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              }
            />
            <PracticeCard
              title="Wills & Estates"
              description="Protect your family and legacy with comprehensive estate planning, including wills, powers of attorney, and estate administration."
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm tracking-widest text-[#8b7355] uppercase mb-4">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Let&apos;s Discuss Your Legal Needs
          </h2>
          <div className="w-12 h-px bg-[#c4a97d] mx-auto mb-8" />
          <p className="text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto">
            Reach out today to schedule a consultation. We are here to help you find clarity and confidence in your legal matters.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="mailto:info@mariottilaw.ca"
              className="flex items-center gap-3 text-gray-700 hover:text-[#8b7355] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              info@mariottilaw.ca
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-3 text-gray-700 hover:text-[#8b7355] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              (905) 555-0100
            </a>
          </div>
          <a
            href="mailto:info@mariottilaw.ca"
            className="inline-block bg-[#1a1a1a] text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#333] transition-colors duration-300"
          >
            Book a Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-gray-400 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Image
              src="/logo-horizontal-white.png"
              alt="Mariotti Law Group"
              width={180}
              height={40}
            />
            <div className="flex gap-8 text-sm">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#services" className="hover:text-white transition-colors">Practice Areas</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Mariotti Law Group. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

function PracticeCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="text-[#8b7355] mb-5">{icon}</div>
      <h3 className="text-xl font-medium text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </div>
  );
}
