import { useQuery } from "@tanstack/react-query";
import { Github, ExternalLink, Star, Brain, Heart, Accessibility, Calendar, Eye, Hand } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { Project } from "@shared/schema";

const ProjectsSection = () => {
  const { data: projects, isLoading, error } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const { data: githubRepos } = useQuery({
    queryKey: ["/api/github/repos"],
  });

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "computer vision":
        return <Eye className="h-4 w-4" />;
      case "medical ai":
        return <Brain className="h-4 w-4" />;
      case "assistive technology":
        return <Accessibility className="h-4 w-4" />;
      case "web development":
        return <Calendar className="h-4 w-4" />;
      default:
        return <Star className="h-4 w-4" />;
    }
  };

  const getProjectImage = (name: string) => {
    if (name.toLowerCase().includes("smart glasses") || name.toLowerCase().includes("blind")) {
      return "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300";
    }
    if (name.toLowerCase().includes("brain") || name.toLowerCase().includes("tumor")) {
      return "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300";
    }
    if (name.toLowerCase().includes("heart") || name.toLowerCase().includes("ecg")) {
      return "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300";
    }
    if (name.toLowerCase().includes("wheelchair")) {
      return "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300";
    }
    if (name.toLowerCase().includes("doctor") || name.toLowerCase().includes("booking")) {
      return "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300";
    }
    if (name.toLowerCase().includes("glove")) {
      return "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300";
    }
    return "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300";
  };

  if (isLoading) {
    return (
      <section id="projects" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my most impactful work in biomedical engineering and AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex gap-2 mb-4">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-secondary mb-4">Featured Projects</h2>
            <p className="text-red-600">Failed to load projects. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my most impactful work in biomedical engineering and AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project) => (
            <Card key={project.id} className="bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={getProjectImage(project.name)} 
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-secondary">{project.name}</h3>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-blue-700"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    {getCategoryIcon(project.category)}
                    {project.featured ? "Featured Project" : project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.stars && project.stars > 0 && (
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400" />
                        {project.stars}
                      </span>
                    )}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-blue-700 text-sm font-medium"
                      >
                        View Demo →
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-secondary text-white hover:bg-gray-800">
            <a 
              href="https://github.com/bayanbayrakdar?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
