
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Minimalist Studio",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
    description: "A clean, functional space designed for modern urban living."
  },
  {
    id: 2,
    title: "Eclectic Lounge",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80",
    description: "A vibrant, creative space blending multiple style influences."
  },
  {
    id: 3,
    title: "Nordic Retreat",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80",
    description: "A peaceful sanctuary inspired by Scandinavian design principles."
  },
  {
    id: 4,
    title: "Contemporary Office",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80",
    description: "A productive workspace designed for collaboration and creativity."
  }
];

const ProjectGrid: React.FC = () => {
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
    <section id="projects" className="py-20 md:py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/5 text-primary/80 rounded-full mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Selected Projects</h2>
          <p className="max-w-2xl mx-auto text-primary/70">
            A curated selection of interior design projects that showcase spatial storytelling through thoughtful design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={cn(
                "group relative overflow-hidden rounded-lg hover-lift reveal",
                "transition-all duration-500 ease-out"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-white/20 text-white/90 backdrop-blur-sm mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-medium text-white">{project.title}</h3>
                <p className="text-white/80 text-sm mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 reveal">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 border border-primary/20 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
