
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={20} />,
      url: '#', 
    },
    { 
      name: 'Instagram', 
      icon: <Instagram size={20} />,
      url: '#', 
    },
    { 
      name: 'Twitter', 
      icon: <Twitter size={20} />,
      url: '#', 
    },
    { 
      name: 'GitHub', 
      icon: <Github size={20} />,
      url: '#', 
    }
  ];

  return (
    <footer className="bg-darkBlue py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-white text-2xl font-bold font-poppins">
              <span className="gradient-text">Sahil</span> Khan
            </Link>
            <p className="text-white/70 text-sm max-w-xs">
              Professional graphic designer specializing in motion graphics, logo design, 
              brand identity, and social media design.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-white/70 hover:text-blueAccent text-sm">Home</Link>
              <Link to="/about" className="text-white/70 hover:text-blueAccent text-sm">About</Link>
              <Link to="/portfolio" className="text-white/70 hover:text-blueAccent text-sm">Portfolio</Link>
              <Link to="/services" className="text-white/70 hover:text-blueAccent text-sm">Services</Link>
              <Link to="/contact" className="text-white/70 hover:text-blueAccent text-sm">Contact</Link>
            </div>
          </div>
          
          {/* Contact */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <p className="text-white/70 text-sm">
              Faridkot, Punjab, India
            </p>
            <p className="text-white/70 text-sm">
              <a href="mailto:sahilmansurizayn@gmail.com" className="hover:text-blueAccent">
                sahilmansurizayn@gmail.com
              </a>
            </p>
            <div className="flex space-x-4 mt-2">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url} 
                  className="text-white/70 hover:text-blueAccent transition-colors"
                  aria-label={link.name}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {year} Sahil Khan. All rights reserved.
          </p>
          <p className="text-white/50 text-sm mt-2 md:mt-0">
            Crafted with passion and purpose
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
