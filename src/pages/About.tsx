
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SkillBar from '@/components/SkillBar';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const designSkills = [
    { name: 'Adobe Photoshop', percentage: 90 },
    { name: 'Adobe Illustrator', percentage: 95 },
    { name: 'Adobe After Effects', percentage: 85 },
    { name: 'Adobe Premiere Pro', percentage: 80 },
  ];
  
  const coreSkills = [
    { name: 'Logo Design', percentage: 95 },
    { name: 'Brand Identity', percentage: 90 },
    { name: 'Motion Graphics', percentage: 85 },
    { name: 'Social Media Design', percentage: 90 },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Get to know more about my journey in design, skills, and passion for creating visual experiences.
            </p>
          </div>
        </section>
        
        {/* About Content */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blueAccent to-blueDeep mb-6"></div>
                
                <div className="space-y-4 text-white/80">
                  <p>
                    Hello! I'm Sahil Khan, a passionate graphic designer from Faridkot, Punjab. I specialize in 
                    motion graphics, logo design, brand identity, and social media design, creating visuals that 
                    not only look good but also effectively communicate my clients' messages.
                  </p>
                  <p>
                    With a background in Computer Science Engineering (B.Tech CSE, 2020-2024), I bring a unique 
                    blend of technical knowledge and creative thinking to my design work. This combination allows 
                    me to approach design challenges from multiple perspectives.
                  </p>
                  <p>
                    My design philosophy centers around the belief that good design should be both beautiful and functional. 
                    I strive to create work that is visually striking while serving a clear purpose for my clients' brands.
                  </p>
                  <p>
                    When I'm not designing, I enjoy exploring new design trends, experimenting with animation techniques, 
                    and expanding my skill set to stay at the forefront of the industry.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Link 
                    to="/contact" 
                    className="px-8 py-3 bg-gradient-to-r from-blueAccent to-blueDeep rounded-md font-medium inline-flex items-center hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                  >
                    Get In Touch
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
              
              <div>
                <div className="bg-darkBlue/40 rounded-xl p-8 border border-white/10">
                  <h3 className="text-xl font-semibold mb-6">Design Tools</h3>
                  <div className="mb-10">
                    {designSkills.map((skill, index) => (
                      <SkillBar 
                        key={index}
                        name={skill.name}
                        percentage={skill.percentage}
                      />
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-6">Core Skills</h3>
                  <div>
                    {coreSkills.map((skill, index) => (
                      <SkillBar 
                        key={index}
                        name={skill.name}
                        percentage={skill.percentage}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Education & Experience */}
        <section className="section-padding bg-darkBlue/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Education & Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blueAccent to-blueDeep mx-auto mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap mr-3 text-blueAccent"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                  Education
                </h3>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-white/10 pb-8">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blueAccent to-blueDeep"></div>
                    <h4 className="text-lg font-semibold">B.Tech in Computer Science Engineering</h4>
                    <p className="text-white/60 mb-2">University Name • 2020 - 2024</p>
                    <p className="text-white/70">
                      Studied computer science fundamentals, programming, and digital media technologies.
                      Focused on combining technical knowledge with creative design principles.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-white/10">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blueAccent to-blueDeep"></div>
                    <h4 className="text-lg font-semibold">Online Design Courses</h4>
                    <p className="text-white/60 mb-2">Various Platforms • 2019 - Present</p>
                    <p className="text-white/70">
                      Continuously expanding design knowledge through specialized courses in motion graphics,
                      visual identity design, and digital illustration techniques.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Experience */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase mr-3 text-blueAccent"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                  Experience
                </h3>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-white/10 pb-8">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blueAccent to-blueDeep"></div>
                    <h4 className="text-lg font-semibold">Freelance Graphic Designer</h4>
                    <p className="text-white/60 mb-2">Self-employed • 2021 - Present</p>
                    <p className="text-white/70">
                      Creating custom design solutions for clients across various industries.
                      Specializing in brand identity, logo design, and motion graphics projects.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-white/10">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blueAccent to-blueDeep"></div>
                    <h4 className="text-lg font-semibold">Design Intern</h4>
                    <p className="text-white/60 mb-2">Creative Studio Name • 2022</p>
                    <p className="text-white/70">
                      Assisted senior designers with various projects, developed social media graphics,
                      and collaborated on brand identity design for small businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Passion Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="rounded-2xl bg-gradient-to-br from-darkBlue to-dark p-10 md:p-16 text-center">
              <h2 className="text-3xl font-bold mb-6">My Passion for Design</h2>
              <p className="text-white/70 max-w-3xl mx-auto mb-10">
                What drives me is the opportunity to transform ideas into visual experiences that resonate with people. 
                Every project is a chance to create something meaningful that helps brands connect with their audience. 
                I believe that thoughtful design has the power to inform, inspire, and influence.
              </p>
              <Link 
                to="/portfolio" 
                className="px-10 py-4 bg-gradient-to-r from-blueAccent to-blueDeep rounded-md font-medium inline-flex items-center hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                See My Work
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

export default About;
