import { ScrollReveal } from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Home, Shield } from 'lucide-react';

const cards = [
  {
    icon: TrendingUp,
    title: 'The Gen Z Phenomenon',
    stat: '43%',
    description: 'of Gen Z regularly print photos — double the rate of other generations. They\'re rejecting the ephemeral nature of digital for something more tangible.',
  },
  {
    icon: Home,
    title: 'The Desire for Display',
    stat: '55%',
    description: 'of people wish they had more photos displayed in their homes. Physical photos create daily emotional touchpoints that digital files cannot replicate.',
  },
  {
    icon: Shield,
    title: 'Fear of Digital Loss',
    stat: '42%',
    description: 'believe modern tech is killing old-school photographs. People are recognizing the impermanence of digital storage and seeking lasting preservation.',
  },
];

export function Shift() {
  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-kainos-dark/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-kainos-coral text-sm tracking-[0.2em] uppercase mb-4">
              The Shift
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Why People Are Returning to{' '}
              <span className="text-kainos-red text-glow-red">Physical</span>
            </h2>
          </ScrollReveal>
        </div>
        
        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <ScrollReveal key={card.title} delay={0.2 + index * 0.15}>
              <Card className="bg-kainos-dark/50 border-white/10 hover:border-kainos-red/30 transition-all duration-500 group h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-kainos-red/10 flex items-center justify-center mb-6 group-hover:bg-kainos-red/20 transition-colors">
                    <card.icon className="w-7 h-7 text-kainos-red" />
                  </div>
                  
                  <p className="text-4xl font-bold text-kainos-red mb-2">
                    {card.stat}
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Highlight */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16 text-center">
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              <span className="text-kainos-red font-semibold">Gen Z is leading an unexpected revival</span> — 
              printing twice as many photos as older generations
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
