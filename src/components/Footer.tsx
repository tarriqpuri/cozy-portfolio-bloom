
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-serif font-medium">
              <span className="text-primary">Olivia</span> Design
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#hero" className="text-sm text-primary/70 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#projects" className="text-sm text-primary/70 hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#about" className="text-sm text-primary/70 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-primary/70 hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-10 pt-10 text-center md:text-left md:flex md:justify-between items-center">
          <p className="text-sm text-primary/50">
            © {currentYear} Olivia Design. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-primary/50">
              Interior Design Student at OCAD University
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
