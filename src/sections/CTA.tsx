import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Mail } from 'lucide-react';


export function CTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32 bg-gradient-cta overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url(/images/cta-bg.jpg)' }}
      />
      
      {/* Particle Overlay */}
      <ParticleBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Where Memories Find Their{' '}
            <span className="text-kainos-red text-glow-red-strong">Place</span>
          </h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed"
        >
          The market data validates the need. The psychology confirms the emotional value. 
          The trend is clear—people want tangible connections to their memories.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="text-gray-400 mb-10 leading-relaxed"
        >
          KAINOS bridges the gap between digital overload and physical preservation. 
          We're not just selling magnets; we're selling daily reminders of what matters most.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
  href="https://wa.me/918599012345?text=Hi%20I%20want%20to%20place%20an%20order%20with%20KAINOS"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button 
    size="lg"
    variant="outline"
    className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg transition-all duration-300"
  >
    <Mail className="mr-2 h-5 w-5" />
    Contact Us
  </Button>
</a>

        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-white/10 pt-8"
        >
          <p className="text-kainos-coral italic font-serif-jp text-xl">
            "Cherishing Moments, One Magnet at a Time"
          </p>
        </motion.div>
        
        {/* Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-8 mt-12"
        >
          {['Emotional Connection', 'Memory Preservation', 'Daily Visibility'].map((prop) => (
            <div key={prop} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-kainos-red" />
              <span className="text-gray-400 text-sm">{prop}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
