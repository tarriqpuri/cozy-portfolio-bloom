
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titles = titleRef.current?.querySelectorAll('.title-part');
    
    // Apply background image fade-in
    setTimeout(() => {
      heroImageRef.current?.classList.add('opacity-60', 'md:opacity-80');
    }, 200);
    
    // Animate title parts sequentially
    titles?.forEach((title, index) => {
      setTimeout(() => {
        title.classList.add('animate-slide-right');
      }, 500 * (index + 1));
    });

    // Fade in subtitle after titles
    setTimeout(() => {
      subtitleRef.current?.classList.add('animate-fade-in');
    }, 2000);

    // Fade in CTA last
    setTimeout(() => {
      ctaRef.current?.classList.add('animate-slide-up');
    }, 2500);

  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center items-start px-6 md:px-12 overflow-hidden"
    >
      {/* Background Image - Modern Interior Design Space */}
      <div 
        ref={heroImageRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-1000 ease-in-out"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
          backgroundPosition: 'center center',
          zIndex: -5
        }}
      >
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto max-w-6xl pt-20 md:pt-0 z-10">
        <div className="max-w-3xl glass-card p-8 md:p-12 rounded-xl">
          <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6 text-white">
            <span className="title-part opacity-0 block transform translate-x-[-20px] transition-all duration-700">Creating</span>
            <span className="title-part opacity-0 block transform translate-x-[-20px] transition-all duration-700">Beautiful Spaces</span>
            <span className="title-part opacity-0 block transform translate-x-[-20px] transition-all duration-700">That Inspire</span>
          </h1>
          
          <p 
            ref={subtitleRef} 
            className="text-lg md:text-xl text-white/90 max-w-xl mb-12 opacity-0 transition-all duration-700"
          >
            Interior design portfolio showcasing thoughtful, functional spaces with an aesthetic touch that transforms environments.
          </p>
          
          <div 
            ref={ctaRef} 
            className="opacity-0 transform translate-y-8 transition-all duration-700"
          >
            <a 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-primary hover:bg-white/90 transition-colors group"
            >
              View Projects
              <ArrowDown size={16} className="ml-2 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
