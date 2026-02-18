  import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ParticleBackground } from '@/components/ParticleBackground';
import { ArrowRight, Camera, Truck, Sparkles } from 'lucide-react';

  export function Hero() {
    const scrollToSection = (href: string) => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        />
        
        {/* Particle Overlay */}
        <ParticleBackground />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="text-kainos-coral text-sm md:text-base tracking-[0.3em] uppercase mb-6"
          >
            Where Memories Find Their Place
          </motion.p>
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="font-cinzel text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-wider"
          >
            <span className="text-glow-red-strong">KAINOS</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10"
          >
            Transform digital moments into tangible treasures
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button 
              onClick={() => scrollToSection('#solution')}
              size="lg"
              className="bg-kainos-red hover:bg-kainos-red/90 text-white px-8 py-6 text-lg group transition-all duration-300"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('#cta')}
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg transition-all duration-300"
            >
              Create Your Magnet
            </Button>
          </motion.div>
          
          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-kainos-red/20 flex items-center justify-center">
                <Camera className="w-5 h-5 text-kainos-red" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">1,598+</p>
                <p className="text-sm text-gray-400">Photos Saved</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-kainos-red/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-kainos-red" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">₹149</p>
                <p className="text-sm text-gray-400">Starting Price</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-kainos-red/20 flex items-center justify-center">
                <Truck className="w-5 h-5 text-kainos-red" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">Free</p>
                <p className="text-sm text-gray-400">Delivery</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-kainos-red rounded-full" />
          </motion.div>
        </motion.div>
      </section>
    );
  }
