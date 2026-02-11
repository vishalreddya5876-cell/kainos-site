import { ScrollReveal } from '@/components/ScrollReveal';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { TrendingUp } from 'lucide-react';

const markets = [
  {
    value: 25.16,
    prefix: '₹',
    suffix: 'B',
    label: 'Photo Printing Market',
    projection: '→ ₹40.1B by 2035',
    cagr: '5.1% CAGR',
    description: 'The global photo printing & merchandise market is experiencing steady, sustained growth driven by personalization demand.',
  },
  {
    value: 1.3,
    prefix: '₹',
    suffix: 'B',
    label: 'Fridge Magnets Market',
    projection: '→ ₹42.25B by 2029',
    cagr: '6.6% CAGR',
    description: 'Strong growth in decorative and personalized magnets, with 3D magnets projected to reach ₹859M by 2035.',
  },
  {
    value: 28.47,
    prefix: '₹',
    suffix: 'B',
    label: 'Personalized Gifts',
    projection: 'Fastest Growing',
    cagr: '8.2% CAGR',
    description: 'The personalized gifts market shows the strongest growth, reflecting consumer preference for meaningful, customized products.',
  },
];

export function MarketValidation() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-solution overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-kainos-coral text-sm tracking-[0.2em] uppercase mb-4">
              Market Validation
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The Numbers Don't{' '}
              <span className="text-kainos-red text-glow-red">Lie</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Robust market data confirms the opportunity for personalized photo products
            </p>
          </ScrollReveal>
        </div>
        
        {/* Market Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {markets.map((market, index) => (
            <ScrollReveal key={market.label} delay={0.3 + index * 0.1}>
              <div className="bg-kainos-dark/50 border border-white/10 rounded-xl p-8 hover:border-kainos-red/30 transition-all duration-500 group h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-kainos-coral font-medium">{market.cagr}</span>
                  <TrendingUp className="w-5 h-5 text-kainos-red" />
                </div>
                
                <p className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-kainos-red transition-colors">
                  {market.prefix}
                  <AnimatedCounter 
                    value={market.value * 100} 
                    suffix="" 
                  />
                  {market.suffix}
                </p>
                
                <p className="text-lg text-gray-300 mb-2">{market.label}</p>
                <p className="text-sm text-kainos-coral mb-4">{market.projection}</p>
                
                <p className="text-sm text-gray-400 leading-relaxed mt-auto">
                  {market.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Key Insight */}
        <ScrollReveal delay={0.6}>
          <div className="bg-kainos-red/10 border border-kainos-red/30 rounded-xl p-8 text-center">
            <p className="text-sm text-kainos-coral uppercase tracking-wider mb-2">Key Insight</p>
            <p className="text-xl md:text-2xl text-white font-semibold">
              62% of buyers prefer personalized magnets over generic designs
            </p>
            <p className="text-gray-400 mt-2">
              — clear demand for customization
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
