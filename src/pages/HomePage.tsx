import { Hero } from '../components/sections/Hero';
import { SpeedInfographic } from '../components/sections/SpeedInfographic';
import { InteractiveGeoDemo } from '../components/sections/InteractiveGeoDemo';
import { TechStack } from '../components/sections/TechStack';
import { SEO } from '../components/common/SEO';

export const HomePage = () => {
  return (
    <>
      <SEO
        title="Desenvolvimento de Software com Inteligência Artificial, GEO & SEO"
        description="Criamos sistemas, plataformas web e websites inteligentes com Inteligência Artificial. Entregas até 3x mais rápidas, otimização para GEO/SEO e total conformidade com a LGPD."
        keywords={[
          "Andrade Serviços de Tecnologia",
          "Desenvolvimento de Software com IA",
          "GEO Generative Engine Optimization",
          "SEO para IAs e Google",
          "Sistemas Web Corporativos",
          "Agentes de IA",
          "Conformidade LGPD"
        ]}
      />

      <Hero />
      <SpeedInfographic />
      <InteractiveGeoDemo />
      <TechStack />
    </>
  );
};
