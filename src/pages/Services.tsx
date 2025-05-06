
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Motion Graphics",
      description: "Dynamic animations and visual effects that bring your content to life. Perfect for product demonstrations, explainer videos, and brand intros.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 8-4 4 4 4V8Z"/></svg>
    },
    {
      title: "Logo Design",
      description: "Distinctive, memorable logos that capture your brand's essence and create lasting impressions. Includes multiple concepts and revisions.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
    },
    {
      title: "Brand Identity",
      description: "Comprehensive visual identity systems including logo, color palette, typography, and brand guidelines to ensure consistency across all platforms.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.7-9.04 4.1a2 2 0 0 1-1.74 0L2 12.7"/><path d="m22 17.5-9.04 4.1a2 2 0 0 1-1.74 0L2 17.5"/></svg>
    },
    {
      title: "Social Media Design",
      description: "Eye-catching, platform-optimized graphics and animations for social media that increase engagement and strengthen brand presence.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    },
    {
      title: "Video Editing",
      description: "Professional video editing services to enhance your footage with seamless cuts, transitions, color grading, and sound design.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clapperboard"><path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4Z"/><path d="m4 11-.88-2.87a2 2 0 0 1 1.33-2.5l11.48-3.5a2 2 0 0 1 2.5 1.33l.91 3.05"/><path d="m6.6 4.99 3.38 4.2"/><path d="m11.86 3.38 3.38 4.2"/></svg>
    },
    {
      title: "UI/UX Design",
      description: "User-centered interface and experience design for websites and applications that balance aesthetic appeal with functional usability.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Brief",
      description: "I start by learning about your brand, goals, and vision through a detailed questionnaire and consultation call."
    },
    {
      number: "02",
      title: "Research & Concept",
      description: "I conduct research on your industry and competitors, then develop initial concepts based on your requirements."
    },
    {
      number: "03",
      title: "Design & Refine",
      description: "With your feedback, I refine the selected concept into a polished design that aligns perfectly with your brand."
    },
    {
      number: "04",
      title: "Finalize & Deliver",
      description: "Once approved, I prepare and deliver all necessary files and resources for immediate use across various platforms."
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Services</h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Professional design services tailored to help your brand stand out in today's competitive market.
            </p>
          </div>
        </section>
        
        {/* Services Content */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="section-padding bg-darkBlue/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">My Design Process</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blueAccent to-blueDeep mx-auto mb-6"></div>
              <p className="text-white/70 max-w-2xl mx-auto">
                A systematic approach ensures that every project is completed efficiently and meets your expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="h-full rounded-xl bg-darkBlue/60 border border-white/10 p-6 transition-all hover:border-blueAccent/30 group">
                    <div className="text-3xl font-bold text-gradient-to-r from-blueAccent to-blueDeep opacity-40 mb-4">{step.number}</div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-white/60">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="text-blueAccent" size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blueAccent to-blueDeep mx-auto mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-darkBlue/40 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3">How long does a typical project take?</h3>
                <p className="text-white/70">
                  Project timelines vary based on complexity and type. Logo designs typically take 1-2 weeks, 
                  while comprehensive brand identities might take 3-4 weeks. Motion graphics projects usually 
                  require 1-3 weeks depending on length and complexity.
                </p>
              </div>
              
              <div className="bg-darkBlue/40 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3">What information do you need to start a project?</h3>
                <p className="text-white/70">
                  I'll need details about your brand/business, target audience, project goals, design preferences, 
                  and any existing brand elements. A comprehensive brief helps me create designs that align 
                  perfectly with your vision.
                </p>
              </div>
              
              <div className="bg-darkBlue/40 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3">Do you offer revisions to your work?</h3>
                <p className="text-white/70">
                  Yes, all projects include a set number of revision rounds to ensure your complete satisfaction. 
                  The specific number depends on the project type and is clearly outlined in the initial agreement.
                </p>
              </div>
              
              <div className="bg-darkBlue/40 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3">What file formats will I receive?</h3>
                <p className="text-white/70">
                  You'll receive all necessary file formats for your specific needs. For logos and graphics, 
                  this typically includes AI, EPS, PDF, PNG, and JPG files. For motion graphics, you'll get 
                  MP4 files in appropriate resolutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl bg-gradient-to-br from-darkBlue to-dark p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-10">
                Let's discuss your design needs and create something amazing together. 
                Get in touch for a free consultation.
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

export default Services;
