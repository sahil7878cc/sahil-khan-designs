
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface PortfolioItemProps {
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
}

const PortfolioItem = ({ title, category, description, image, link }: PortfolioItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="portfolio-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-72 object-cover"
      />
      
      <div 
        className={`portfolio-card-overlay ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <span className="text-blueAccent uppercase text-sm tracking-wider mb-2">{category}</span>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-white/70 text-sm mb-4">{description}</p>
        {link && (
          <a 
            href={link} 
            className="flex items-center text-blueAccent hover:text-blueDeep transition-colors text-sm font-medium"
          >
            View Details <ArrowRight size={16} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
