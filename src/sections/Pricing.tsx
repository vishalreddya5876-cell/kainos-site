import { ScrollReveal } from '@/components/ScrollReveal';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';


const pricingTiers = [
  {
    name: 'Single Magnet',
    price: '₹149',
    description: 'Perfect for individual memories',
    features: ['2×2" size', 'High-quality print', 'Strong magnet backing', 'Free delivery'],
    featured: false,
  },
  {
    name: 'Memory Collection',
    price: '₹349',
    description: 'Save ₹43 (11% discount)',
    features: ['4 custom magnets', '2×2" size each', 'Premium print quality', 'Strong magnet backing', 'Free delivery'],
    featured: false,
  },
];

const posterAddOn = {
  name: 'Themed Posters (A4)',
  price: '₹99-149',
  themes: ['Anime', 'Sports', 'F1 Racing'],
};

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-gradient-solution overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-kainos-coral text-sm tracking-[0.2em] uppercase mb-4">
              Pricing
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Simple & <span className="text-kainos-red text-glow-red">Affordable</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Premium quality at student-friendly prices
            </p>
          </ScrollReveal>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <ScrollReveal key={tier.name} delay={0.3 + index * 0.1}>
              <Card className={`relative h-full ${
                tier.featured 
                  ? 'bg-kainos-dark border-kainos-red/50 scale-105 shadow-glow-red' 
                  : 'bg-kainos-dark/50 border-white/10 hover:border-kainos-red/30'
              } transition-all duration-500`}>
                
                
                <CardHeader className="text-center pt-8 pb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {tier.price}
                  </p>
                  <p className="text-sm text-kainos-coral">{tier.description}</p>
                </CardHeader>
                
                <CardContent className="pt-4 pb-8">
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-kainos-red flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#cta" className="w-full">
  <Button 
    className={`w-full ${
      tier.featured 
        ? 'bg-kainos-red hover:bg-kainos-red/90 text-white' 
        : 'bg-transparent border border-white/30 text-white hover:bg-white/10'
    } transition-all duration-300`}
  >
    Get Started
  </Button>
</a>

                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Poster Add-on */}
        <ScrollReveal delay={0.6}>
          <div className="bg-kainos-dark/30 border border-white/10 rounded-xl p-8 text-center">
            <p className="text-lg text-white font-semibold mb-2">
              {posterAddOn.name}
            </p>
            <p className="text-3xl font-bold text-kainos-red mb-4">
              {posterAddOn.price}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {posterAddOn.themes.map((theme) => (
                <span 
                  key={theme}
                  className="bg-kainos-red/10 text-kainos-coral px-4 py-1 rounded-full text-sm"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
