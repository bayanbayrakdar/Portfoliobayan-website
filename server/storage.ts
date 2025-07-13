import { projects, contacts, type Project, type Contact, type InsertProject, type InsertContact, users, type User, type InsertUser } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private projects: Map<number, Project>;
  private contacts: Map<number, Contact>;
  private currentUserId: number;
  private currentProjectId: number;
  private currentContactId: number;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.contacts = new Map();
    this.currentUserId = 1;
    this.currentProjectId = 1;
    this.currentContactId = 1;
    
    // Initialize with Bayan's projects from the CV
    this.seedProjects();
  }

  private seedProjects() {
    const seedProjects: InsertProject[] = [
      {
        name: "Smart Glasses for the Blind",
        description: "Developed smart glasses using neural networks to recognize faces and convert them to audio output for blind users. Implemented on Raspberry Pi with Python, OpenCV, and TTS in a Linux environment.",
        technologies: ["Python", "OpenCV", "Deep Learning", "Raspberry Pi", "TTS"],
        category: "Computer Vision",
        featured: true,
        stars: 15,
        language: "Python"
      },
      {
        name: "Brain Tumor Classification",
        description: "Designed a system to detect and classify brain tumors in MRI images, leveraging advanced digital image processing techniques and machine learning in MATLAB.",
        technologies: ["MATLAB", "Image Processing", "Machine Learning", "Medical Imaging"],
        category: "Medical AI",
        featured: true,
        stars: 22,
        language: "MATLAB"
      },
      {
        name: "Heart Disease Classification",
        description: "Developed a system to classify heart disease by processing biomedical signals in Python and creating an AI model using neural networks. Achieved 98% accuracy with ResNet50.",
        technologies: ["Python", "ResNet50", "Signal Processing", "Neural Networks"],
        category: "Medical AI",
        featured: true,
        stars: 28,
        language: "Python"
      },
      {
        name: "IoT Electrical Wheelchair",
        description: "Developed an IoT-enabled electrical wheelchair controlled via an Android app created with MIT App Inventor and powered by NodeMCU. Integrated gyroscope sensors for fall detection.",
        technologies: ["MIT App Inventor", "NodeMCU", "IoT", "Gyroscope", "Android"],
        category: "Assistive Technology",
        featured: true,
        stars: 18,
        language: "C++"
      },
      {
        name: "Doctor Booking System",
        description: "Full-stack web application for medical appointment booking with user-friendly interface and backend functionality for booking management.",
        technologies: ["Python", "Flask", "JavaScript", "HTML", "CSS"],
        category: "Web Development",
        featured: true,
        stars: 12,
        language: "Python"
      },
      {
        name: "Glove Walking Assistant",
        description: "Electronic glove that aids blind individuals in walking by providing voice signals using an SD module and Arduino. Enables real-time audio guidance to enhance navigation and safety.",
        technologies: ["Arduino", "SD Module", "Voice Guidance", "Sensors"],
        category: "Assistive Technology",
        featured: false,
        stars: 8,
        language: "C++"
      },
      {
        name: "OCR Car Plate Recognition",
        description: "Developed an OCR system to automatically convert car plates into numerical data using MATLAB. Implemented algorithms to enhance accuracy and efficiency.",
        technologies: ["MATLAB", "OCR", "Image Processing", "Pattern Recognition"],
        category: "Computer Vision",
        featured: false,
        stars: 6,
        language: "MATLAB"
      }
    ];

    seedProjects.forEach(project => {
      this.createProject(project);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(project => project.featured);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = { 
      ...insertProject, 
      id,
      githubUrl: insertProject.githubUrl || null,
      demoUrl: insertProject.demoUrl || null,
      featured: insertProject.featured || false,
      stars: insertProject.stars || 0,
      language: insertProject.language || null
    };
    this.projects.set(id, project);
    return project;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date().toISOString()
    };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();
