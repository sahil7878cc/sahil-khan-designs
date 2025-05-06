
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';

interface PortfolioItemProps {
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  examples?: {
    title: string;
    description: string;
    image?: string;
  }[];
  onOpenChange?: (open: boolean) => void;
  onSelect?: () => void;
}

const PortfolioItem = ({ 
  title, 
  category, 
  description, 
  image, 
  link,
  examples,
  onOpenChange,
  onSelect
}: PortfolioItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleClick = () => {
    if (onSelect) {
      onSelect();
    } else {
      setIsDialogOpen(true);
    }
  };
  
  const handleOpenChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (onOpenChange) {
      onOpenChange(open);
    }
  };
  
  return (
    <>
      <div 
        className="portfolio-card cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
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
          <div className="flex items-center text-blueAccent hover:text-blueDeep transition-colors text-sm font-medium">
            View Details <ArrowRight size={16} className="ml-1" />
          </div>
        </div>
      </div>
      
      {!onSelect && examples && (
        <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
          <DialogContent className="bg-darkBlue border-white/10 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-white">{title}</DialogTitle>
              <DialogDescription className="text-white/70">
                {description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-6">
              <div className="grid gap-6">
                {examples.map((example, index) => (
                  <div key={index} className="border border-white/10 rounded-lg p-5 bg-darkBlue/60">
                    <h4 className="text-lg font-semibold mb-3 text-blueAccent">{example.title}</h4>
                    <p className="text-white/70 mb-4">{example.description}</p>
                    {example.image && (
                      <img
                        src={example.image}
                        alt={example.title}
                        className="rounded-md w-full h-auto object-cover mt-4"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default PortfolioItem;
