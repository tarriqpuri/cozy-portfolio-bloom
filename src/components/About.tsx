
import React, { useEffect } from 'react';
import { Book, Award, Zap } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="reveal">
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80" 
                  alt="Interior Designer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -right-6 -bottom-6 w-2/3 h-2/3 bg-primary/5 rounded-lg -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-white/20 text-white rounded-full backdrop-blur-sm mb-2">
                  Interior Designer
                </span>
                <h3 className="text-xl font-medium text-white">Ghazal Oveys Gharan</h3>
              </div>
            </div>
          </div>
          
          <div className="reveal" style={{ transitionDelay: '150ms' }}>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/5 text-primary/80 rounded-full mb-4">
              ABOUT ME
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Creating Spaces With Meaning</h2>
            <p className="text-primary/70 mb-8">
              As a dedicated interior design student at OCAD University, I bring a rich foundation from my prior degree at George Brown College. My approach to design centers on creating thoughtful, functional spaces that reflect the unique personalities of their inhabitants.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
                  <Book size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Education</h3>
                  <p className="text-primary/70">Currently in 3rd year at OCAD University, with a previous degree in Interior Design from George Brown College.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
                  <Award size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Approach</h3>
                  <p className="text-primary/70">I believe in creating spaces that balance functionality, aesthetics, and sustainability to enhance the quality of life.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
                  <Zap size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Passion</h3>
                  <p className="text-primary/70">Passionate about transforming ordinary spaces into extraordinary experiences through thoughtful design decisions.</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
