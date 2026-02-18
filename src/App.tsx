import { Navigation } from '@/components/Navigation';

import { Hero } from '@/sections/Hero';
import { Problem } from '@/sections/Problem';
import { Shift } from '@/sections/Shift';
import { MarketValidation } from '@/sections/MarketValidation';
import { Solution } from '@/sections/Solution';
import { TargetAudience } from '@/sections/TargetAudience';
import { WhyKainos } from '@/sections/WhyKainos';
import { Pricing } from '@/sections/Pricing';
import { CTA } from '@/sections/CTA';
import { Footer } from '@/sections/Footer';


function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Pricing />
      <CTA />
    </>
  );
}

export default App;
