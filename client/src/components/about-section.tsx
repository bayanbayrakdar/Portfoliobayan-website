import { personalInfo, skills } from "@/lib/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate biomedical engineer committed to bridging the gap between technology and healthcare
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              As a dedicated biomedical engineer with a Master's degree from Damascus University, I specialize in signal and image processing, PCB design, micro-controllers, and AI models. Currently working as a Backend Developer at TEQNEIA ICT and Software Engineer Instructor at Algoritmics International School.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My expertise spans from developing smart medical devices to implementing machine learning algorithms for healthcare applications. I've worked on cutting-edge projects including ECG analysis systems, brain tumor classification, and IoT-enabled assistive technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <Card>
                <CardContent className="p-6 text-center bg-blue-50">
                  <div className="text-3xl font-bold text-primary mb-2">{personalInfo.stats.experience}</div>
                  <div className="text-gray-600">Years Experience</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center bg-green-50">
                  <div className="text-3xl font-bold text-success mb-2">{personalInfo.stats.projects}</div>
                  <div className="text-gray-600">Projects Completed</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-secondary mb-6">Technical Skills</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-secondary mb-2">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-secondary mb-2">Frameworks & Libraries</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-accent/10 text-accent">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-secondary mb-2">Electronics & Hardware</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.electronics.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-success/10 text-success">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-secondary mb-2">Engineering Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
