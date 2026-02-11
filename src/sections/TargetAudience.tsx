import { ScrollReveal } from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Users, GraduationCap, Heart } from 'lucide-react';

const personas = [
  {
    icon: Users,
    title: 'Families',
    subtitle: 'Parents',
    description: 'Preserve children\'s milestones, first steps, birthdays, family vacations—creating memory walls that tell their family\'s story.',
    quote: 'I have 5,000 photos of my kids but never look at them.',
    need: 'Want tangible reminders of precious moments',
  },
  {
    icon: GraduationCap,
    title: 'Young Adults',
    subtitle: 'College Students',
    description: 'Decorate hostel rooms, celebrate friendships, mark achievements—personalizing their first independent living spaces.',
    quote: 'I want my room to feel like ME, not a hotel.',
    trend: 'Gen Z prints 2x more photos than other generations',
  },
  {
    icon: Heart,
    title: 'Fans & Collectors',
    subtitle: 'Anime & Fandoms',
    description: 'Passionate communities seeking themed merchandise that reflects their interests—anime characters, sports teams, racing icons.',
    quote: 'I want my space to show what I love.',
    opportunity: 'India\'s anime market alone is ₹1.91B with 12.89% CAGR',
  },
];

export function TargetAudience() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-problem overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-kainos-coral text-sm tracking-[0.2em] uppercase mb-4">
              Target Audience
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Who Will <span className="text-kainos-red text-glow-red">Buy</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Three distinct customer segments with genuine needs
            </p>
          </ScrollReveal>
        </div>
        
        {/* Persona Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {personas.map((persona, index) => (
            <ScrollReveal key={persona.title} delay={0.3 + index * 0.15}>
              <Card className="bg-kainos-dark/50 border-white/10 hover:border-kainos-red/30 transition-all duration-500 group h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-full bg-kainos-red/10 flex items-center justify-center mb-6 group-hover:bg-kainos-red/20 transition-colors">
                    <persona.icon className="w-7 h-7 text-kainos-red" />
                  </div>
                  
                  <p className="text-sm text-kainos-coral mb-2">{persona.subtitle}</p>
                  <h3 className="text-2xl font-bold text-white mb-4">{persona.title}</h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                    {persona.description}
                  </p>
                  
                  <blockquote className="border-l-2 border-kainos-red pl-4 py-2 mb-4">
                    <p className="text-kainos-coral italic text-sm">
                      "{persona.quote}"
                    </p>
                  </blockquote>
                  
                  {persona.need && (
                    <p className="text-xs text-gray-500">
                      <span className="text-kainos-red">The Need:</span> {persona.need}
                    </p>
                  )}
                  {persona.trend && (
                    <p className="text-xs text-gray-500">
                      <span className="text-kainos-red">The Trend:</span> {persona.trend}
                    </p>
                  )}
                  {persona.opportunity && (
                    <p className="text-xs text-gray-500">
                      <span className="text-kainos-red">The Opportunity:</span> {persona.opportunity}
                    </p>
                  )}
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
