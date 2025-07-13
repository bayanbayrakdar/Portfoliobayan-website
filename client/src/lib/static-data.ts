// Static data for GitHub Pages deployment
import type { Project } from "@shared/schema";

export const staticProjects: Project[] = [
  {
    id: 1,
    name: "Smart Glasses for the Blind",
    description: "Developed smart glasses using neural networks to recognize faces and convert them to audio output for blind users. Implemented on Raspberry Pi with Python, OpenCV, and TTS in a Linux environment.",
    technologies: ["Python", "OpenCV", "Deep Learning", "Raspberry Pi", "TTS"],
    category: "Computer Vision",
    featured: true,
    stars: 15,
    language: "Python",
    githubUrl: null,
    demoUrl: null
  },
  {
    id: 2,
    name: "Brain Tumor Classification",
    description: "Designed a system to detect and classify brain tumors in MRI images, leveraging advanced digital image processing techniques and machine learning in MATLAB.",
    technologies: ["MATLAB", "Image Processing", "Machine Learning", "Medical Imaging"],
    category: "Medical AI",
    featured: true,
    stars: 22,
    language: "MATLAB",
    githubUrl: null,
    demoUrl: null
  },
  {
    id: 3,
    name: "Heart Disease Classification",
    description: "Developed a system to classify heart disease by processing biomedical signals in Python and creating an AI model using neural networks. Achieved 98% accuracy with ResNet50.",
    technologies: ["Python", "ResNet50", "Signal Processing", "Neural Networks"],
    category: "Medical AI",
    featured: true,
    stars: 28,
    language: "Python",
    githubUrl: null,
    demoUrl: null
  },
  {
    id: 4,
    name: "IoT Electrical Wheelchair",
    description: "Developed an IoT-enabled electrical wheelchair controlled via an Android app created with MIT App Inventor and powered by NodeMCU. Integrated gyroscope sensors for fall detection.",
    technologies: ["MIT App Inventor", "NodeMCU", "IoT", "Gyroscope", "Android"],
    category: "Assistive Technology",
    featured: true,
    stars: 18,
    language: "C++",
    githubUrl: null,
    demoUrl: null
  },
  {
    id: 5,
    name: "Doctor Booking System",
    description: "Full-stack web application for medical appointment booking with user-friendly interface and backend functionality for booking management.",
    technologies: ["Python", "Flask", "JavaScript", "HTML", "CSS"],
    category: "Web Development",
    featured: true,
    stars: 12,
    language: "Python",
    githubUrl: null,
    demoUrl: null
  },
  {
    id: 6,
    name: "Glove Walking Assistant",
    description: "Electronic glove that aids blind individuals in walking by providing voice signals using an SD module and Arduino. Enables real-time audio guidance to enhance navigation and safety.",
    technologies: ["Arduino", "SD Module", "Voice Guidance", "Sensors"],
    category: "Assistive Technology",
    featured: false,
    stars: 8,
    language: "C++",
    githubUrl: null,
    demoUrl: null
  },
  {
    id: 7,
    name: "OCR Car Plate Recognition",
    description: "Developed an OCR system to automatically convert car plates into numerical data using MATLAB. Implemented algorithms to enhance accuracy and efficiency.",
    technologies: ["MATLAB", "OCR", "Image Processing", "Pattern Recognition"],
    category: "Computer Vision",
    featured: false,
    stars: 6,
    language: "MATLAB",
    githubUrl: null,
    demoUrl: null
  }
];

export const staticGithubRepos = [
  {
    id: 938689079,
    name: "CenimaTecketReservation",
    description: "Cinema ticket reservation system built with modern web technologies",
    html_url: "https://github.com/bayanbayrakdar/CenimaTecketReservation",
    stargazers_count: 3,
    language: "JavaScript",
    updated_at: "2024-07-13T10:30:00Z",
    topics: ["cinema", "reservation", "web-development"]
  },
  {
    id: 123456789,
    name: "Smart-Glasses-AI",
    description: "AI-powered smart glasses for visual assistance",
    html_url: "https://github.com/bayanbayrakdar/Smart-Glasses-AI",
    stargazers_count: 15,
    language: "Python",
    updated_at: "2024-06-20T14:22:00Z",
    topics: ["ai", "computer-vision", "assistive-technology"]
  },
  {
    id: 987654321,
    name: "Brain-Tumor-Detection",
    description: "Machine learning system for brain tumor classification in MRI images",
    html_url: "https://github.com/bayanbayrakdar/Brain-Tumor-Detection",
    stargazers_count: 22,
    language: "MATLAB",
    updated_at: "2024-05-15T09:45:00Z",
    topics: ["machine-learning", "medical-imaging", "matlab"]
  },
  {
    id: 456789123,
    name: "Heart-Disease-AI",
    description: "Neural network model for heart disease classification with 98% accuracy",
    html_url: "https://github.com/bayanbayrakdar/Heart-Disease-AI",
    stargazers_count: 28,
    language: "Python",
    updated_at: "2024-04-10T16:18:00Z",
    topics: ["ai", "healthcare", "deep-learning", "resnet50"]
  }
];