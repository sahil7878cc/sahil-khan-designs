
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Github } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear from you. Let's create something amazing together.
            </p>
          </div>
        </section>
        
        {/* Contact Content */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Send me a message</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blueAccent to-blueDeep mb-6"></div>
                <p className="text-white/70 mb-8">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
                
                <ContactForm />
              </div>
              
              {/* Contact Info */}
              <div className="lg:pl-10">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blueAccent to-blueDeep mb-6"></div>
                <p className="text-white/70 mb-8">
                  Feel free to reach out through any of the methods below. I'm always open to discussing 
                  new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blueAccent/20 flex items-center justify-center mr-4">
                      <Mail className="text-blueAccent" size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <a href="mailto:sahilmansurizayn@gmail.com" className="text-white/70 hover:text-blueAccent transition-colors">
                        sahilmansurizayn@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blueAccent/20 flex items-center justify-center mr-4">
                      <Phone className="text-blueAccent" size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Phone</h3>
                      <p className="text-white/70">Available upon request</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blueAccent/20 flex items-center justify-center mr-4">
                      <MapPin className="text-blueAccent" size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Location</h3>
                      <p className="text-white/70">Faridkot, Punjab, India</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-10">
                  <h3 className="text-lg font-medium mb-4">Connect with me</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <a 
                        key={link.name}
                        href={link.url} 
                        className="w-10 h-10 rounded-full bg-darkBlue flex items-center justify-center text-white/70 hover:text-blueAccent hover:bg-darkBlue/80 transition-all"
                        aria-label={link.name}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Working Hours */}
                <div className="mt-10 p-6 rounded-xl bg-darkBlue/40 border border-white/10">
                  <h3 className="text-lg font-medium mb-3">Working Hours</h3>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
