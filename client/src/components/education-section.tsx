import { education, certifications } from "@/lib/portfolio-data";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "web":
        return "border-l-primary";
      case "ai":
        return "border-l-accent";
      case "electronics":
        return "border-l-success";
      case "medical":
        return "border-l-red-500";
      default:
        return "border-l-primary";
    }
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Education & Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development in biomedical engineering
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-secondary">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-secondary">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                    {edu.grade && (
                      <p className="text-gray-600">Grade: {edu.grade}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-secondary">Key Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className={`shadow-md border-l-4 ${getCategoryColor(cert.category)}`}>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-secondary">{cert.title}</h4>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
