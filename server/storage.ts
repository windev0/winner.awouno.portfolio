import { db } from "./db";
import {
  profile, skills, experiences, projects, accomplishments,
  type Profile, type Skill, type Experience, type Project, type Accomplishment
} from "@shared/schema";

export interface IStorage {
  getProfile(): Promise<Profile | undefined>;
  getSkills(): Promise<Skill[]>;
  getExperiences(): Promise<Experience[]>;
  getProjects(): Promise<Project[]>;
  getAccomplishments(): Promise<Accomplishment[]>;
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getProfile(): Promise<Profile | undefined> {
    const profiles = await db.select().from(profile);
    return profiles[0];
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async getExperiences(): Promise<Experience[]> {
    return await db.select().from(experiences);
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getAccomplishments(): Promise<Accomplishment[]> {
    return await db.select().from(accomplishments);
  }

  async seedData(): Promise<void> {
    // Seed accomplishments if none exist
    const existingAccomplishments = await this.getAccomplishments();
    if (existingAccomplishments.length === 0) {
      await db.insert(accomplishments).values([
        {
          titleEn: "AI Certification",
          titleFr: "Certification en IA",
          descriptionEn: "Introduction to Artificial Intelligence - Institut Montaigne",
          descriptionFr: "Introduction à l'Intelligence Artificielle - Institut Montaigne",
          type: "certification",
          date: "June 2024",
          organization: "Institut Montaigne",
          link: "#"
        },
        {
          titleEn: "PIX Digital Skills Certification",
          titleFr: "Certification PIX",
          descriptionEn: "Official digital skills certification. Data Security, Information Verification and +5 skills.",
          descriptionFr: "Certification officielle de compétences numériques. Sécurité des données, Vérification des informations et +5 compétences.",
          type: "certification",
          date: "August 2025",
          organization: "PIX - French State",
          link: "#"
        },
        {
          titleEn: "Docker Workshop Instructor",
          titleFr: "Animateur d'atelier Docker",
          descriptionEn: "Workshop facilitator at Université de Rennes. Taught Docker usage with real-world project application.",
          descriptionFr: "Animateur d'atelier au sein de l'université de Rennes sur l'utilisation de docker avec application sur un projet réel",
          type: "workshop",
          date: "November 29, 2025",
          organization: "Université de Rennes 1",
          link: "https://drive.google.com/drive/folders/1G5iF3Vm-HFhuD-KNCef8wRaus4RTom01"
        },
        {
          titleEn: "Python Algorithmic Programming Trainer",
          titleFr: "Formateur en Algorithmique avec Python",
          descriptionEn: "Trained students in algorithmic thinking and problem solving using Python programming.",
          descriptionFr: "Formation en algorithmique et résolution de problèmes avec Python",
          type: "training",
          date: "2023 - 2025",
          organization: "École Polytechnique de Lomé"
        },
        {
          titleEn: "Mathematics & Physics Trainer",
          titleFr: "Formateur en Mathématiques et Physique-Chimie",
          descriptionEn: "Taught mathematics and physics/chemistry to first and terminal D level students.",
          descriptionFr: "Formateur en maths et physique chimie, niveau première et terminal D",
          type: "training",
          date: "2023 - 2025",
          organization: "École Polytechnique de Lomé"
        }
      ]);
    }

    // Check if we need to add new projects
    const existingProjects = await this.getProjects();
    if (existingProjects.length < 5) {
      const newProjects = [
        {
          title: "Link Shortener",
          category: "fullstack",
          descriptionEn: "URL shortener application. Create short links, track analytics, and manage redirects.",
          descriptionFr: "Application de raccourcisseur de lien. Créer des liens courts, suivre les analyses et gérer les redirections.",
          techStack: ["React", "Node.js", "PostgreSQL"],
          link: "#"
        },
        {
          title: "2D Video Game",
          category: "frontend",
          descriptionEn: "2D game built with Python. Interactive gameplay with physics, collisions, and sound effects.",
          descriptionFr: "Jeu 2D développé en Python. Gameplay interactif avec physique, collisions et effets sonores.",
          techStack: ["Python", "Pygame"],
          link: "#"
        }
      ];
      await db.insert(projects).values(newProjects);
    }
  }
}

export const storage = new DatabaseStorage();
