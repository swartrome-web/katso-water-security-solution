'use client'
import { useState } from 'react'

export default function Home() {
  const [type, setType] = useState<'Business' | 'Household'>('Business')
  const waNumber = '27727839378' // CHANGE TO KATSO NUMBER
  const whatsapp = (msg: string) => `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`

  const products = [
    { size: '500ml', price: 'R7', sub: '3 for R20', cost: '24-pack R150', desc: 'School • Taxi • Lunch', best: false, msg: 'Hi Katso 💧 I need 500ml x24 pack R150' },
    { size: '1.5L', price: 'R12', sub: 'Cold & Ready', cost: '12-pack R140', desc: 'Home • Work • Daily', best: false, msg: 'Hi Katso 💧 I need 1.5L x12 pack R140' },
    { size: '5L', price: 'R20', sub: 'Family Pack', cost: '6-pack R110', desc: 'Cooking • Family', best: false, msg: 'Hi Katso 💧 I need 5L x6 pack R110' },
    { size: '20L KING', price: 'R25', sub: 'Refill R15', cost: 'Bottle deposit R40', desc: 'Own what others don’t have', best: true, msg: 'Hi Katso 💧 I need 20L KING Delivery R25 - send location pin' },
  ]

  return (
    <div className="min-h-screen bg-[#0A1931] text-white">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white text-[#0A1931] px-6 py-3 flex justify-between items-center border-b-2 border-[#D4AF37]">
        <div className="flex items-center gap-2 font-black">
          <span className="text-[#D4AF37] text-2xl">💧</span>
          <div><p className="leading-none tracking-widest text-[#D4AF37]">KATSO</p><p className="text-[10px] tracking-[0.3em]">PURE WATER</p></div>
        </div>
        <div className="hidden md:flex gap-6 text-[12px] font-bold">
          <a href="#about">Home & About</a>
          <a href="#hub">Hub Live</a>
          <a href="#products">Products</a>
          <a href="#coverage">Coverage</a>
          <a href="#compliance">Compliance</a>
        </div>
        <a href={whatsapp(`Hi KATSO Pure Water 💧 I need Water Security for ${type}`)} className="bg-[#0A1931] text-[#D4AF37] border border-[#D4AF37] px-4 py-2 rounded-full text-xs font-bold">Get Quote</a>
      </nav>

      {/* HERO */}
      <section id="about" className="px-6 md:px-16 py-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="border border-[#D4AF37] text-[#D4AF37] px-4 py-1 rounded-full text-[10px] tracking-widest">• SANS 241 COMPLIANT • ISO 22000 • TDS 3ppm</span>
          <h1 className="text-4xl md:text-5xl font-black mt-5 leading-tight">Water is Life —<br/>Delivered Where<br/><span className="text-[#D4AF37]">Others Quit</span></h1>
          <p className="mt-4 text-white/70 text-sm">Katso Pure Water is Radium’s SANS 241 certified hub. We own 20L delivery in crisis areas — borehole purified, BPA-free, lab tested monthly. From Cradle to Kings & Queens.</p>

          <div className="mt-6 bg-white/5 border border-[#D4AF37]/30 rounded-xl p-4">
            <p className="text-[#D4AF37] text-xs font-bold">📍 WE SERVE — 60min Delivery</p>
            <p className="text-xs mt-2">Bela-Bela • Radium • Hammanskraal (Mandela Village, Kanana, Temba) • Moretele • Lebotlwane</p>
            <p className="text-[11px] mt-3 text-white/60">Why us? Water is a life essential, we empathise with anyone feeling the water crisis pain. We prioritise the best delivery, Quality + Quantity + Affordability</p>
          </div>

          <div className="mt-6 bg-[#D4AF37] text-[#0A1931] rounded-xl p-4">
            <p className="font-black text-xs">📲 HOW WHATSAPP ORDER WORKS</p>
            <p className="text-xs mt-1">1. Scan QR / Click WhatsApp → 2. Type "Metsi" + Size → 3. Send Location Pin → 4. Car GPS moves — "12 mins away" → Cash/EFT on delivery</p>
          </div>

          <div className="flex gap-3 mt-6">
            <a href="#products" className="bg-[#D4AF37] text-[#0A1931] px-6 py-3 rounded-xl font-black text-sm">View Products</a>
            <a href={whatsapp("Metsi")} className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-xl font-bold text-sm">WhatsApp "Metsi"</a>
          </div>
        </div>
        <div className="flex justify-center relative">
          <img src="20LitreKing.jpg" alt="Katso 20L Premium" className="w-[340px] drop-shadow-[0_20px_50px_rgba(212,175,55,0.4)]"/>
          <div className="absolute bottom-0 bg-white text-[#0A1931] rounded-xl px-4 py-2 text-xs font-bold">🔥 20L KING R25 Delivery | Refill R15</div>
        </div>
      </section>

      {/* HUB + LIVE LOCATION */}
      <section id="hub" className="bg-white text-[#0A1931] px-6 md:px-16 py-12">
        <h2 className="text-2xl font-black">HUB + KATSO LIVE LOCATION</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div className="bg-[#0A1931] text-white p-6 rounded-2xl">
            <p className="text-[#D4AF37] font-bold text-sm">Radium Purification Hub</p>
            <p className="text-xs mt-2 text-white/70">SANS 241 • 5-stage RO • UV sterilized • TDS 3ppm • Borehole licensed</p>
            <ul className="text-xs mt-4 space-y-1">
              <li>✅ Daily TDS log — 0-5ppm</li>
              <li>✅ BPA-Free bottles — Food grade</li>
              <li>✅ Cold chain — Taxi rank & schools</li>
            </ul>
            <div className="mt-4 text-[11px] bg-white/10 p-3 rounded-lg">Live: Last batch tested 14 Sept 2026 — 2.8ppm — PASS ✅</div>
          </div>
          <div className="border-2 border-dashed border-[#0A1931] rounded-2xl p-6 flex items-center justify-center text-center">
            <div>
              <p className="font-bold">📍 Google Map + Car GPS</p>
              <p className="text-xs mt-2">Embed your Google Business Profile here + live car location via WhatsApp share</p>
              <p className="text-[11px] mt-3">Google Business: Katso Pure Water Radium — Rate 5 stars after delivery</p>
              <a href="https://maps.google.com" target="_blank" className="mt-4 inline-block bg-[#0A1931] text-white px-4 py-2 rounded-full text-xs">Open Map — 60min delivery radius</a>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="px-6 md:px-16 py-12">
        <h2 className="text-2xl font-black">PRODUCTS & REFILL PRICES</h2>
        <p className="text-xs text-white/60 mt-2">Audit price: 500ml cost R2.70 sell R7 | 1.5L cost R5.42 sell R12 | 5L cost R11 sell R20 | 20L BLUE OCEAN</p>
        <div className="grid md:grid-cols-4 gap-4 mt-6">
          {products.map((p)=>(
            <div key={p.size} className={`rounded-2xl p-5 border-2 ${p.best? 'bg-[#D4AF37] text-[#0A1931] border-[#D4AF37] scale-105' : 'bg-white text-[#0A1931] border-white'}`}>
              <p className="text-[10px] tracking-widest font-bold">{p.desc}</p>
              <h3 className="text-xl font-black mt-1">{p.size}</h3>
              <p className="text-3xl font-black mt-2">{p.price}</p>
              <p className="text-xs font-bold">{p.sub}</p>
              <p className="text-[11px] mt-1 opacity-70">{p.cost}</p>
              <a href={whatsapp(p.msg)} className={`mt-4 block text-center py-2 rounded-full text-xs font-black ${p.best? 'bg-[#0A1931] text-[#D4AF37]' : 'bg-[#0A1931] text-white'}`}>Order on WhatsApp</a>
            </div>
          ))}
        </div>
        {/* ONLINE PLACEHOLDER */}
        <div className="mt-8 bg-white/5 border border-dashed border-[#D4AF37] rounded-xl p-4 text-center">
          <p className="text-xs">🛒 <span className="font-bold text-[#D4AF37]">Online payment coming soon!</span> — We're committed to serving you with ease. For now, order via WhatsApp for 60min delivery.</p>
        </div>
      </section>

      {/* 20L KING SECTION */}
      <section className="bg-[#D4AF37] text-[#0A1931] px-6 md:px-16 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-black">20L KING — R25 DELIVERY</h2>
            <p className="text-sm mt-3 font-semibold">No competition from hubs — they don't do 20L / 10L. We do.</p>
            <ul className="text-sm mt-4 space-y-2">
              <li>✓ Refill R15 — bring bottle — save R10</li>
              <li>✓ New bottle deposit R40 once-off — refundable — lock-in</li>
              <li>✓ Weekly R40/week — 2 bottles — pause anytime</li>
              <li>✓ Pensioner bundle: 5L x2 + 20L x1 = R65 — delivered</li>
            </ul>
            <a href={whatsapp("Hi Katso - I need 20L KING R25 - send me location for delivery")} className="mt-5 inline-block bg-[#0A1931] text-[#D4AF37] px-6 py-3 rounded-xl font-black text-sm">Order 20L Now — 60min</a>
          </div>
          <div className="bg-[#0A1931] text-white p-6 rounded-2xl">
            <p className="text-[#D4AF37] font-bold">WHY 20L WINS IN CRISIS</p>
            <p className="text-xs mt-2 text-white/70">Hammanskraal taps = brown water trauma. Families need 20L for baby, cooking. Shoprite doesn't deliver. We do with car GPS + receipt.</p>
            <p className="text-xs mt-4">Master of sales sells where merchandise cannot. We sell life where municipality fails.</p>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section id="coverage" className="px-6 md:px-16 py-12 bg-white text-[#0A1931]">
        <h2 className="text-2xl font-black">ORDER & DELIVERY COVERAGE</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {[
            { area: 'Radium + Ext 1-5', time: '30min', note: 'Hub base — free delivery over R100' },
            { area: 'Bela-Bela + Township', time: '45min', note: 'Conference + lodges bulk' },
            { area: 'Hammanskraal — Mandela Village, Kanana, Temba', time: '60min', note: 'Crisis zone — we deliver where others quit' },
            { area: 'Moretele — Mathibestad', time: '60min', note: 'Mamas + schools bulk' },
            { area: 'Lebotlwane + Surrounds', time: '75min', note: 'Weekly truck — R40/week sub' },
          ].map((c)=>(
            <div key={c.area} className="border rounded-xl p-4">
              <p className="font-bold text-sm">{c.area}</p>
              <p className="text-xs mt-1 text-[#D4AF37] font-bold">⏱️ {c.time}</p>
              <p className="text-[11px] mt-1 opacity-70">{c.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a href={whatsapp("Metsi + my location pin")} className="bg-[#0A1931] text-white px-8 py-3 rounded-full font-bold text-sm">Send Location Pin on WhatsApp</a>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section id="compliance" className="px-6 md:px-16 py-12 border-t border-[#D4AF37]/20">
        <h2 className="text-xl font-black tracking-widest text-[#D4AF37]">COMPLIANCE SECTION — AUDIT READY</h2>
        <p className="text-xs text-white/60 mt-2 max-w-2xl">Same trust engine we built for Tsundzukani — POPIA-safe redacted view. CSI, mines, banks can verify.</p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {[
            { doc: 'CIPC Registration', status: 'VERIFIED', file: '/compliance/cipc.pdf' },
            { doc: 'SARS Tax Compliance', status: 'VERIFIED', file: '/compliance/tax.pdf' },
            { doc: 'SANS 241 Lab Report — 14 Sept 2026', status: 'VERIFIED', file: '/compliance/sans241.pdf' },
            { doc: 'Borehole License — DWS', status: 'VERIFIED', file: '/compliance/borehole.pdf' },
            { doc: 'Dept Health Certificate', status: 'IN PROGRESS', file: '#' },
            { doc: 'Municipal Trading License', status: 'VERIFIED', file: '/compliance/license.pdf' },
          ].map((d)=>(
            <div key={d.doc} className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-center">
              <div><p className="text-xs font-bold">{d.doc}</p><p className={`text-[10px] mt-1 ${d.status==='VERIFIED'?'text-green-400':'text-yellow-400'}`}>{d.status}</p></div>
              <a href={d.file} className="text-[10px] bg-white text-[#0A1931] px-3 py-1 rounded-full font-bold">View / Download</a>
            </div>
          ))}
        </div>
        <p className="text-[10px] mt-6 text-white/40">POPIA Notice: ID numbers redacted. Full docs available on request for funders with NDA.</p>
      </section>

      <footer className="text-center py-6 text-[11px] text-[#D4AF37]/60 border-t border-[#D4AF37]/20">© 2026 KATSO PURE WATER — Water is Life | katso.co.za/water | Powered by AERIE GROUP • We plan ahead, we win ahead.</footer>
      <a href={whatsapp("Metsi")} className="fixed bottom-5 left-5 bg-[#25D366] text-white p-3 rounded-full shadow-2xl font-black text-sm">WhatsApp</a>
    </div>
  )
}
