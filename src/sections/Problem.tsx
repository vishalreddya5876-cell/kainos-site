import { ScrollReveal } from '@/components/ScrollReveal';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { GlowText } from '@/components/GlowText';

const stats = [
  { value: 1598, label: 'Average photos per phone', suffix: '' },
  { value: 19, label: 'Rarely look back at photos', suffix: '%' },
  { value: 14, label: 'Forget moments without prints', suffix: '%' },
  { value: 20, label: 'Lost memories from phone loss', suffix: '%' },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-24 md:py-32 bg-gradient-problem overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <ScrollReveal>
              <p className="text-kainos-coral text-sm tracking-[0.2em] uppercase mb-4">
                The Problem
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Our Memories Are{' '}
                <GlowText intensity="strong">Trapped</GlowText>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                We live in an age of digital abundance, yet our most precious moments remain 
                hidden—buried in camera rolls, forgotten in cloud storage, lost to the endless scroll.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <p className="text-gray-400 mb-10 leading-relaxed">
                The convenience of digital photography has created an unexpected paradox: 
                we capture more memories than ever before, but we experience fewer of them.
              </p>
            </ScrollReveal>
            
            {/* Quote */}
            <ScrollReveal delay={0.4}>
              <blockquote className="border-l-4 border-kainos-red pl-6 py-2">
                <p className="text-xl md:text-2xl text-kainos-coral italic font-serif-jp">
                  "We capture everything, yet preserve nothing."
                </p>
              </blockquote>
            </ScrollReveal>
          </div>
          
          {/* Visual & Stats */}
          <div className="space-y-8">
            {/* Image */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative rounded-lg overflow-hidden border border-white/10">
                <img 
                  src="/images/problem-visual.jpg" 
                  alt="Digital memories fading away"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </ScrollReveal>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={0.3 + index * 0.1}>
                  <div className="bg-kainos-dark/50 border border-white/10 rounded-lg p-6 hover:border-kainos-red/30 transition-all duration-300 group">
                    <p className="text-3xl md:text-4xl font-bold text-kainos-red mb-2 group-hover:text-glow-red transition-all">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
