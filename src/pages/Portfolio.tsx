
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioItem from '@/components/PortfolioItem';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Portfolio categories
  const categories = ['All', 'Branding', 'Motion Graphics', 'Logo Design', 'Social Media'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<null | number>(null);
  
  // Portfolio items
  const portfolioItems = [
    {
      title: "Brand Identity for Fashion Label",
      category: "Branding",
      description: "A complete brand identity design for a modern fashion label, including logo, stationery, and brand guidelines.",
      image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      examples: [
        {
          title: "Logo Design",
          description: "Clean, modern logo with a custom wordmark and icon that represents the brand's minimalist aesthetic.",
          image: "https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          title: "Brand Guidelines",
          description: "Comprehensive style guide detailing logo usage, typography, color palette, and brand voice.",
          image: "https://images.unsplash.com/photo-1634942536765-b431e5923efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          title: "Packaging Design",
          description: "Custom packaging solutions including boxes, bags, and tissue paper with consistent brand elements."
        }
      ]
    },
    {
      title: "Product Launch Animation",
      category: "Motion Graphics",
      description: "Promotional animation for a new tech product launch, highlighting key features and benefits.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
      examples: [
        {
          title: "Opening Sequence",
          description: "Dynamic 3D animation introducing the product with sleek motion graphics and brand elements.",
          image: "https://images.unsplash.com/photo-1574717024752-3b555b443caf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          title: "Feature Highlights",
          description: "Series of animated sequences demonstrating the product's key features with explanatory text overlays.",
          image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          title: "Social Media Cutdowns",
          description: "Shortened versions optimized for different social media platforms with varying aspect ratios."
        }
      ]
    },
    {
      title: "Social Media Campaign",
      category: "Social Media",
      description: "Series of visually cohesive social media posts designed to increase brand awareness and engagement.",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      examples: [
        {
          title: "Instagram Feed Strategy",
          description: "Consistent visual language across posts with alternating content types to maintain viewer interest.",
          image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          title: "Story Templates",
          description: "Set of customizable templates for daily stories that maintain brand consistency while allowing for content variety.",
          image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          title: "Engagement Posts",
          description: "Interactive content designed to boost follower engagement through questions, polls, and calls to action."
        }
      ]
    },
    {
      title: "Coffee Shop Logo",
      category: "Logo Design",
      description: "Minimalist yet distinctive logo design for a specialty coffee shop, reflecting their artisanal approach.",
      image: "https://images.unsplash.com/photo-1583623733044-2a8828f1c0ef?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
      examples: [
        {
          title: "Logo Concept",
          description: "Simple yet memorable coffee bean icon with custom typography that balances modern and rustic elements.",
          image: "https://images.unsplash.com/photo-1622650355636-468e3b2a7e1e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          title: "Logo Variations",
          description: "Multiple versions optimized for different applications including menu, signage, merchandise, and digital platforms.",
          image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          title: "Brand Application",
          description: "Mock-ups showing the logo applied to coffee cups, aprons, store signage, and website."
        }
      ]
    },
    {
      title: "Mobile App Screens",
      category: "Social Media",
      description: "User interface design for a fitness tracking mobile application, focusing on user experience and visual appeal.",
      image: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      examples: [
        {
          title: "Onboarding Screens",
          description: "Intuitive, visually engaging onboarding sequence introducing app features and collecting user preferences.",
          image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          title: "Main Dashboard",
          description: "Clean, data-focused home screen displaying key metrics and quick access to primary features.",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          title: "Workout Tracker",
          description: "Interactive screens for tracking exercise progress with animations for completed goals."
        }
      ]
    },
    {
      title: "Corporate Intro Animation",
      category: "Motion Graphics",
      description: "Clean and professional animation sequence for corporate video introductions and presentations.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      examples: [
        {
          title: "Logo Animation",
          description: "Sophisticated reveal of company logo with subtle particle effects and dynamic lighting.",
          image: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          title: "Typography Sequence",
          description: "Animated text elements highlighting company values and mission statement with clean transitions.",
          image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          title: "Lower Thirds Templates",
          description: "Set of animated lower thirds for team introductions and key information display during presentations."
        }
      ]
    },
    {
      title: "Startup Branding Package",
      category: "Branding",
      description: "Comprehensive branding solution for a tech startup, including visual identity and marketing materials.",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      examples: [
        {
          title: "Brand Strategy Document",
          description: "Detailed analysis of market positioning, target audience, and competitive landscape with brand recommendations.",
          image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          title: "Visual Identity System",
          description: "Complete set of visual elements including logo, color palette, typography, and graphic devices.",
          image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          title: "Marketing Collateral",
          description: "Business cards, letterhead, digital templates, and presentation slides with cohesive branding."
        }
      ]
    },
    {
      title: "Photography Studio Logo",
      category: "Logo Design",
      description: "Elegant logo design for a professional photography studio, capturing their artistic style.",
      image: "https://images.unsplash.com/photo-1554941829-202a0b2403b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      examples: [
        {
          title: "Logo Concept Development",
          description: "Evolution of logo concepts from initial sketches to final design, focusing on camera aperture motif.",
          image: "https://images.unsplash.com/photo-1606103920296-d5e34d5de808?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          title: "Color Experimentation",
          description: "Exploration of different color palettes to match the studio's focus on black and white photography.",
          image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          title: "Logo Applications",
          description: "Implementation examples on business cards, website, watermarks, and equipment labels."
        }
      ]
    },
    {
      title: "Product Explainer Video",
      category: "Motion Graphics",
      description: "Animated explainer video for a software product, breaking down complex features into understandable visuals.",
      image: "https://images.unsplash.com/photo-1498075702571-ecb3d0683587?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3",
      examples: [
        {
          title: "Storyboard",
          description: "Detailed planning document showing scene-by-scene breakdown with visual references and script.",
          image: "https://images.unsplash.com/photo-1544607768-2f573bc2c9ef?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          title: "Character Design",
          description: "Custom illustrated characters representing different user types interacting with the product.",
          image: "https://images.unsplash.com/photo-1553484771-0a615f264d58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          title: "UI Animation",
          description: "Detailed animation of product interface with highlighted features and simulated user interactions."
        }
      ]
    }
  ];

  // Filter items based on active category
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  // Handle opening and closing the detailed view
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedItem(null);
    }
  };

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
                  examples={item.examples}
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
