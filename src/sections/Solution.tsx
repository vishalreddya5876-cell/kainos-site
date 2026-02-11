import { ScrollReveal } from '@/components/ScrollReveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Star, Heart } from 'lucide-react';

const magnetFeatures = [
  { icon: Users, label: 'Family Memories' },
  { icon: Star, label: 'Milestones' },
  { icon: Heart, label: 'Special Moments' },
];

const posterThemes = [
  { label: 'Anime' },
  { label: 'Sports' },
  { label: 'F1 Racing' },
];

export function Solution() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solution" className="relative py-24 md:py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <ScrollReveal>
            <p className="text-kainos-coral text-sm tracking-[0.2em] uppercase mb-4">
              Our Solution
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Introducing{' '}
              <span className="text-kainos-red text-glow-red font-cinzel">KAINOS</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              The bridge between digital memories and physical keepsakes
            </p>
          </ScrollReveal>
        </div>
        
        {/* Product 1: Photo Magnets */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <ScrollReveal direction="left">
            <div className="relative rounded-xl overflow-hidden border border-white/10 group">
              <img 
                src="/images/photo-magnets.jpg" 
                alt="Custom Photo Magnets"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <Badge className="bg-kainos-red text-white mb-2">Starting at ₹49</Badge>
              </div>
            </div>
          </ScrollReveal>
          
          <div>
            <ScrollReveal direction="right" delay={0.1}>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Custom Photo Magnets
              </h3>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Transform forgotten digital photos into daily-visible treasures. Family milestones, 
                vacation memories, special moments—now displayed where you'll see them every day.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.3}>
              <div className="flex flex-wrap gap-3 mb-8">
                {magnetFeatures.map((feature) => (
                  <div 
                    key={feature.label}
                    className="flex items-center gap-2 bg-kainos-dark/50 border border-white/10 rounded-full px-4 py-2"
                  >
                    <feature.icon className="w-4 h-4 text-kainos-red" />
                    <span className="text-sm text-gray-300">{feature.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.4}>
              <Button 
                onClick={() => scrollToSection('#pricing')}
                className="bg-kainos-red hover:bg-kainos-red/90 text-white group"
              >
                View Pricing
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Product 2: Themed Posters */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <ScrollReveal direction="left" delay={0.1}>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Themed Poster Collections
              </h3>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Expand beyond photos with curated collections for passionate fans—anime, sports, 
                F1 racing—turning interests into art.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.3}>
              <div className="flex flex-wrap gap-3 mb-8">
                {posterThemes.map((theme) => (
                  <Badge 
                    key={theme.label}
                    variant="outline"
                    className="border-kainos-red/50 text-kainos-coral px-4 py-1"
                  >
                    {theme.label}
                  </Badge>
                ))}
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.4}>
              <p className="text-kainos-red font-semibold mb-6">₹99-149</p>
              <Button 
                onClick={() => scrollToSection('#cta')}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 group"
              >
                Explore Themes
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="right" className="order-1 lg:order-2">
            <div className="relative rounded-xl overflow-hidden border border-white/10 group">
              <img 
                src="/images/anime-posters.jpg" 
                alt="Themed Poster Collections"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </ScrollReveal>
        </div>
        
        {/* Tagline */}
        <ScrollReveal delay={0.5}>
          <div className="mt-20 text-center">
            <p className="text-xl md:text-2xl text-gray-300 italic font-serif-jp">
              "From forgotten digital files to daily joy."
            </p>
            <p className="text-gray-500 mt-4">
              KAINOS transforms how people experience their memories—making the invisible, visible.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
