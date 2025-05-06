
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioItem from '@/components/PortfolioItem';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Portfolio categories
  const categories = ['All', 'Branding', 'Motion Graphics', 'Logo Design', 'Social Media'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Portfolio items
  const portfolioItems = [
    {
      title: "Brand Identity for Fashion Label",
      category: "Branding",
      thumbnail:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80",
      fullimage: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=1200&q=90",
      description: "A complete brand identity design for a modern fashion label, including logo, stationery, and brand guidelines.",
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
    },
    {
      title: "Coffee Shop Logo",
      category: "Logo Design",
      description: "Minimalist yet distinctive logo design for a specialty coffee shop, reflecting their artisanal approach.",
      image: "https://images.unsplash.com/photo-1583623733044-2a8828f1c0ef?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Mobile App Screens",
      category: "Social Media",
      description: "User interface design for a fitness tracking mobile application, focusing on user experience and visual appeal.",
      image: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Corporate Intro Animation",
      category: "Motion Graphics",
      description: "Clean and professional animation sequence for corporate video introductions and presentations.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Startup Branding Package",
      category: "Branding",
      description: "Comprehensive branding solution for a tech startup, including visual identity and marketing materials.",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Photography Studio Logo",
      category: "Logo Design",
      description: "Elegant logo design for a professional photography studio, capturing their artistic style.",
      image: "https://images.unsplash.com/photo-1554941829-202a0b2403b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Product Explainer Video",
      category: "Motion Graphics",
      description: "Animated explainer video for a software product, breaking down complex features into understandable visuals.",
      image: "https://images.unsplash.com/photo-1498075702571-ecb3d0683587?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  // Filter items based on active category
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Portfolio</h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              A showcase of my selected projects spanning motion graphics, logo design, brand identity, and social media design.
            </p>
          </div>
        </section>
        
        {/* Portfolio Content */}
        <section className="section-padding">
          <div className="container mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-5 py-2 rounded-full text-sm transition-all ${
                    activeCategory === category 
                      ? 'bg-gradient-to-r from-blueAccent to-blueDeep text-white font-medium' 
                      : 'bg-darkBlue/40 text-white/70 hover:text-white hover:bg-darkBlue/60'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
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
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
