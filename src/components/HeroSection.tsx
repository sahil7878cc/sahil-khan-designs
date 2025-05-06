
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between py-16 md:py-20">
        {/* Left side - Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="gradient-text">Sahil Khan</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-white/80 mb-8 font-light animate-fade-in" style={{animationDelay: '0.2s'}}>
            Graphic Designer specializing in <span className="font-medium text-white">Motion Graphics</span>, 
            <span className="font-medium text-white"> Logo Design</span>, and 
            <span className="font-medium text-white"> Brand Identity</span>
          </h2>
          <p className="text-white/60 max-w-xl mb-10 animate-fade-in" style={{animationDelay: '0.4s'}}>
            Transforming ideas into captivating visual experiences that make brands stand out
            in today's digital landscape. Based in Faridkot, Punjab, creating designs that resonate globally.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Link 
              to="/portfolio" 
              className="px-8 py-3 bg-gradient-to-r from-blueAccent to-blueDeep rounded-md font-medium flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              View Portfolio
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 border border-white/20 rounded-md font-medium hover:bg-white/5 transition-all"
            >
              Contact Me
            </Link>
          </div>
        </div>
        
        {/* Right side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-blueAccent to-purpleAccent p-1">
              <img 
                src="https://images.unsplash.com/photo-1647609338904-bb58796ccd28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Sahil Khan" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 blur-card py-3 px-6 rounded-lg">
              <p className="text-sm font-medium text-white">Motion Graphics Specialist</p>
            </div>
            <div className="absolute -top-4 -left-4 blur-card py-3 px-6 rounded-lg">
              <p className="text-sm font-medium text-white">Brand Identity Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
