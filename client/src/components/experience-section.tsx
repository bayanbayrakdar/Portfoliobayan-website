import { experience } from "@/lib/portfolio-data";
import { MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through the biomedical engineering industry
          </p>
        </div>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/4 flex-shrink-0">
                <div className="flex items-center gap-2 text-primary font-medium mb-1">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  {exp.location}
                </div>
              </div>
              
              <div className="lg:w-3/4 border-t lg:border-t-0 lg:border-l-2 lg:border-primary lg:pl-8 pt-4 lg:pt-0">
                <h3 className="text-xl font-bold text-secondary mb-2">{exp.title}</h3>
                <p className="text-primary font-medium mb-3">{exp.company}</p>
                <ul className="text-gray-600 space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
