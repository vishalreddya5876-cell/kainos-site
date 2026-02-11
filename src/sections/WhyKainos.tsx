import { ScrollReveal } from '@/components/ScrollReveal';
import { Heart, DollarSign, Users, TrendingUp, Gift, Home } from 'lucide-react';

const features = [
  {
    number: '01',
    icon: Heart,
    title: 'Emotion Drives Purchases',
    description: 'People don\'t just buy products—they buy feelings, memories, and connections. KAINOS taps into the universal desire to preserve what matters most.',
    highlight: 'Emotional Value First',
  },
  {
    number: '02',
    icon: DollarSign,
    title: 'Low Production Cost',
    description: 'Digital printing technology enables affordable, on-demand production with minimal inventory risk. High margins make student-friendly pricing viable.',
    highlight: 'High Margin Potential',
  },
  {
    number: '03',
    icon: Users,
    title: 'Universal Appeal',
    description: 'From parents preserving milestones to students decorating rooms to collectors seeking themed merchandise—multiple demographics, one product.',
    highlight: 'Cross-Generational',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Easy to Scale',
    description: 'Start with photo magnets, expand into themed collections, seasonal offerings, corporate gifting—multiple growth paths from one foundation.',
    highlight: 'Scalable Model',
  },
  {
    number: '05',
    icon: Gift,
    title: 'Perfect for Gifting',
    description: 'Birthdays, anniversaries, festivals, graduations—every occasion needs a personal touch. Gifting occasions create recurring demand year-round.',
    highlight: 'Year-Round Demand',
  },
  {
    number: '06',
    icon: Home,
    title: 'Growing Décor Trend',
    description: '68% of buyers select magnets based on aesthetics. Personalized home décor is a rising trend, especially among younger consumers seeking unique spaces.',
    highlight: 'Décor Demand',
  },
];

export function WhyKainos() {
  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-kainos-dark/20 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-kainos-coral text-sm tracking-[0.2em] uppercase mb-4">
              The Opportunity
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Why KAINOS Will{' '}
              <span className="text-kainos-red text-glow-red">Work</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Six key factors that make this idea viable and scalable
            </p>
          </ScrollReveal>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={0.1 + index * 0.08}>
              <div className="bg-kainos-dark/30 border border-white/10 rounded-xl p-6 hover:border-kainos-red/30 hover:bg-kainos-dark/50 transition-all duration-500 group h-full">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl font-bold text-kainos-red/30 group-hover:text-kainos-red/50 transition-colors">
                    {feature.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-kainos-red/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-kainos-red" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-kainos-red" />
                  <span className="text-xs text-kainos-coral uppercase tracking-wider">
                    {feature.highlight}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
