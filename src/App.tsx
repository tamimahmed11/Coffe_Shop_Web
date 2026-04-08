import { motion } from 'motion/react';
import { CustomCursor } from './components/CustomCursor';
import { FloatingBeans } from './components/FloatingBeans';
import { Coffee, MapPin, Star, ChevronRight } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-crema/30 selection:text-white">
      <div className="glow-bg" />
      <CustomCursor />
      <FloatingBeans />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
        <div className="font-serif text-2xl font-bold tracking-wider text-white">
          LUMINA
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase text-white/80">
          <a href="#menu" className="hover:text-crema transition-colors">Menu</a>
          <a href="#gallery" className="hover:text-crema transition-colors">Gallery</a>
          <a href="#club" className="hover:text-crema transition-colors">The Club</a>
        </div>
        <button className="px-6 py-2 border border-white/20 rounded-full text-sm font-medium tracking-widest uppercase text-white hover:bg-white hover:text-espresso transition-all">
          Order Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop" 
            alt="Coffee pouring" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/80 to-espresso" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto mt-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-crema font-medium tracking-[0.2em] uppercase text-sm mb-6"
          >
            Est. 2026 • New York City
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium leading-[0.9] mb-8 text-white"
          >
            Crafted for<br />
            <span className="italic text-white/90">the senses.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-latte/70 text-lg md:text-xl max-w-xl mx-auto mb-10 font-light">
              An immersive coffee experience in the heart of Manhattan. 
              Where precision meets passion in every pour.
            </p>
            <button className="group relative inline-flex items-center justify-center px-8 py-4 font-medium tracking-widest uppercase text-sm text-white overflow-hidden rounded-full glass-panel glass-panel-hover transition-all">
              <span className="relative z-10 flex items-center gap-2">
                Explore Menu <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-serif text-4xl md:text-6xl mb-4 text-white">Our Signatures</h2>
              <p className="text-latte/60 max-w-md">Meticulously sourced beans, roasted in-house and brewed to perfection.</p>
            </div>
            <div className="text-crema font-serif italic text-xl">
              Served daily 7am - 7pm
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Lumina Pour Over', price: '$8', desc: 'Single-origin Ethiopian Yirgacheffe, floral notes with a hint of jasmine.' },
              { name: 'Smoked Vanilla Latte', price: '$7', desc: 'House-made vanilla bean syrup, smoked sea salt, velvety microfoam.' },
              { name: 'Midnight Cold Brew', price: '$6', desc: 'Steeped for 24 hours, served over artisanal ice sphere.' },
              { name: 'Cortado Noir', price: '$5', desc: 'Equal parts espresso and steamed milk, dusted with dark cocoa.' },
              { name: 'Matcha Reserve', price: '$8', desc: 'Ceremonial grade matcha from Uji, Japan, lightly sweetened.' },
              { name: 'Cascara Fizz', price: '$6', desc: 'Coffee cherry tea, sparkling water, twist of fresh orange.' }
            ].map((item, i) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-2xl text-white group-hover:text-crema transition-colors">{item.name}</h3>
                  <span className="font-medium text-crema">{item.price}</span>
                </div>
                <p className="text-latte/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 px-6 relative z-10 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl mb-16 text-center text-white">The Atmosphere</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop" alt="Cafe interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img src="https://images.unsplash.com/photo-1495474472204-518621802d9e?q=80&w=800&auto=format&fit=crop" alt="Coffee details" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-3xl overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop" alt="Barista pouring" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Star className="w-8 h-8 text-crema mx-auto mb-8 opacity-80" />
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl leading-tight text-white mb-8"
          >
            "Not just a cup of coffee, but a moment of absolute clarity in the chaos of the city. Lumina sets a new standard."
          </motion.blockquote>
          <p className="text-crema tracking-widest uppercase text-sm font-medium">— The New York Times</p>
        </div>
      </section>

      {/* Pricing / Coffee Club */}
      <section id="club" className="py-32 px-6 relative z-10 bg-black/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-6xl mb-4 text-white">The Lumina Club</h2>
            <p className="text-latte/60 max-w-xl mx-auto">Elevate your daily ritual with our exclusive membership tiers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Enthusiast', price: '$45', period: '/mo', features: ['2 Premium Drinks Weekly', '10% Off Pastries', 'Early Access to New Roasts'] },
              { name: 'Connoisseur', price: '$85', period: '/mo', features: ['Unlimited Classic Drinks', '1 Premium Drink Daily', '20% Off Retail Beans', 'Priority Seating'], popular: true },
              { name: 'Aficionado', price: '$150', period: '/mo', features: ['Unlimited Everything', 'Monthly Tasting Events', 'Reserved Workstation', 'Exclusive Merch'] }
            ].map((tier, i) => (
              <motion.div 
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`glass-panel p-8 rounded-3xl relative flex flex-col ${tier.popular ? 'border-crema/30 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-crema text-espresso text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-serif text-2xl text-white mb-2">{tier.name}</h3>
                <div className="mb-8">
                  <span className="text-4xl font-medium text-white">{tier.price}</span>
                  <span className="text-latte/50">{tier.period}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-latte/80">
                      <Coffee className="w-4 h-4 text-crema" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full text-sm font-medium tracking-widest uppercase transition-all ${tier.popular ? 'bg-crema text-espresso hover:bg-white' : 'border border-white/20 text-white hover:bg-white hover:text-espresso'}`}>
                  Join Club
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl text-white mb-2">LUMINA</h2>
            <p className="text-latte/50 text-sm">Elevating the everyday.</p>
          </div>
          
          <div className="flex items-center gap-2 text-latte/70 text-sm">
            <MapPin className="w-4 h-4 text-crema" />
            124 W 42nd St, New York, NY 10036
          </div>

          <div className="flex gap-6 text-sm font-medium tracking-widest uppercase text-latte/50">
            <a href="#" className="hover:text-crema transition-colors">Instagram</a>
            <a href="#" className="hover:text-crema transition-colors">Twitter</a>
            <a href="#" className="hover:text-crema transition-colors">Contact</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-xs text-latte/30 uppercase tracking-widest">
          © 2026 Lumina Coffee NYC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
