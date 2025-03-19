
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titles = titleRef.current?.querySelectorAll('.title-part');
    
    titles?.forEach((title, index) => {
      setTimeout(() => {
        title.classList.add('animate-slide-right');
      }, 300 * index);
    });

    setTimeout(() => {
      subtitleRef.current?.classList.add('animate-fade-in');
    }, 1200);

    setTimeout(() => {
      ctaRef.current?.classList.add('animate-slide-up');
    }, 1800);

  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center items-start pt-16 px-6 md:px-12 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl pt-12 md:pt-0 z-10">
        <div className="max-w-3xl">
          <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6">
            <span className="title-part opacity-0 block">Creating</span>
            <span className="title-part opacity-0 block">Beautiful Spaces</span>
            <span className="title-part opacity-0 block">That Inspire</span>
          </h1>
          
          <p 
            ref={subtitleRef} 
            className="text-lg md:text-xl text-primary/70 max-w-xl mb-12 opacity-0"
          >
            Interior design portfolio showcasing thoughtful, functional spaces with an aesthetic touch that transforms environments.
          </p>
          
          <div 
            ref={ctaRef} 
            className="opacity-0"
          >
            <a 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors group"
            >
              View Projects
              <ArrowDown size={16} className="ml-2 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 opacity-10 md:opacity-15">
        <div className="absolute top-[20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[80px]"></div>
      </div>
    </section>
  );
};

export default Hero;
