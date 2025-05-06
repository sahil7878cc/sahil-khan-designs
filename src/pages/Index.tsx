
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PortfolioItem from '@/components/PortfolioItem';
import ServiceCard from '@/components/ServiceCard';

// Portfolio items data
const featuredPortfolio = [
  {
    title: "Brand Identity for Fashion Label",
    category: "Branding",
    description: "A complete brand identity design for a modern fashion label, including logo, stationery, and brand guidelines.",
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    title: "Product Launch Animation",
    category: "Motion Graphics",
    description: "Promotional animation for a new tech product launch, highlighting key features and benefits.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    title: "Social Media Campaign",
    category: "Social Media",
    description: "Series of visually cohesive social media posts designed to increase brand awareness and engagement.",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        
        {/* About Preview Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blueAccent to-blueDeep mb-6"></div>
                <p className="text-white/70 mb-6">
                  I'm Sahil Khan, a graphic designer based in Faridkot, Punjab. With a passion for visual storytelling, 
                  I specialize in creating compelling motion graphics, distinctive logo designs, and comprehensive brand identities.
                </p>
                <p className="text-white/70 mb-8">
                  Currently pursuing B.Tech in CSE (2020-2024), I blend my technical knowledge with creative design 
                  to deliver solutions that are both visually stunning and strategically effective.
                </p>
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-blueAccent hover:text-blueDeep transition-colors"
                >
                  Learn more about me <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="relative">
                  <div className="w-full h-80 md:h-96 overflow-hidden rounded-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                      alt="Sahil Khan working on design" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 blur-card py-4 px-8 rounded-xl max-w-xs">
                    <h3 className="text-lg font-semibold mb-1">Passionate Designer</h3>
                    <p className="text-sm text-white/70">Turning ideas into visual experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Portfolio Preview Section */}
        <section className="section-padding bg-darkBlue/30">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blueAccent to-blueDeep"></div>
              </div>
              <Link 
                to="/portfolio" 
                className="mt-4 md:mt-0 inline-flex items-center text-blueAccent hover:text-blueDeep transition-colors"
              >
                View all projects <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPortfolio.map((item, index) => (
                <PortfolioItem
                  key={index}
                  title={item.title}
                  category={item.category}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Services Preview Section */}
        <section className="section-padding">
          <div className="container mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blueAccent to-blueDeep mx-auto mb-6"></div>
            <p className="text-white/70 max-w-2xl mx-auto">
              I offer a range of design services to help your brand stand out in today's competitive market. 
              Each service is tailored to meet your specific needs and goals.
            </p>
          </div>
          
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Motion Graphics"
              description="Engaging animations and video graphics that bring your story to life and capture your audience's attention."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 8-4 4 4 4V8Z"/></svg>}
            />
            <ServiceCard
              title="Logo Design"
              description="Memorable and distinctive logos that communicate your brand's personality and create lasting impressions."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>}
            />
            <ServiceCard
              title="Brand Identity"
              description="Comprehensive brand systems including visual elements, guidelines, and assets that ensure consistency across all touchpoints."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.7-9.04 4.1a2 2 0 0 1-1.74 0L2 12.7"/><path d="m22 17.5-9.04 4.1a2 2 0 0 1-1.74 0L2 17.5"/></svg>}
            />
          </div>
          
          <div className="container mx-auto flex justify-center mt-10">
            <Link 
              to="/services" 
              className="px-8 py-3 bg-gradient-to-r from-blueAccent to-blueDeep rounded-md font-medium inline-flex items-center hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              Explore All Services
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl bg-gradient-to-br from-darkBlue to-dark p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to bring your ideas to life?</h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-10">
                Let's collaborate on your next project and create something amazing together. 
                Get in touch to discuss your design needs.
              </p>
              <Link 
                to="/contact" 
                className="px-10 py-4 bg-gradient-to-r from-blueAccent to-blueDeep rounded-md font-medium inline-flex items-center hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                Contact Me
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
