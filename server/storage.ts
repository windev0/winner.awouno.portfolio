import { db } from "./db";
import {
  profile, skills, experiences, projects,
  type Profile, type Skill, type Experience, type Project
} from "@shared/schema";

export interface IStorage {
  getProfile(): Promise<Profile | undefined>;
  getSkills(): Promise<Skill[]>;
  getExperiences(): Promise<Experience[]>;
  getProjects(): Promise<Project[]>;
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

  async seedData(): Promise<void> {
    const existingProfile = await this.getProfile();
    if (!existingProfile) {
      // Seed Profile (from CV)
      await db.insert(profile).values({
        name: "Winner AWOUNO",
        title: "Full Stack Web & Mobile Developer",
        bioEn: "L3 MIAGE student motivated by web and mobile development. Experienced in interface design, API creation, and agile collaboration.",
        bioFr: "Étudiant en Licence MIAGE, motivé par le développement web et mobile. Expérimenté en conception d'interfaces, création d'API et méthodologie agile.",
        email: "awounokossiwinner@gmail.com",
        githubUrl: "https://github.com/windev0",
        linkedinUrl: "https://www.linkedin.com/in/winner-awouno/",
        avatarUrl: "https://avatar.vercel.sh/winner?size=200", // Placeholder
      });

      // Seed Skills
      const skillList = [
        // Frontend
        { name: "React.js", category: "frontend", iconName: "SiReact" },
        { name: "Next.js", category: "frontend", iconName: "SiNextdotjs" },
        { name: "TypeScript", category: "frontend", iconName: "SiTypescript" },
        { name: "TailwindCSS", category: "frontend", iconName: "SiTailwindcss" },
        { name: "Flutter", category: "mobile", iconName: "SiFlutter" },
        // Backend
        { name: "Node.js", category: "backend", iconName: "SiNodedotjs" },
        { name: "NestJS", category: "backend", iconName: "SiNestjs" },
        { name: "Express", category: "backend", iconName: "SiExpress" },
        { name: "Laravel", category: "backend", iconName: "SiLaravel" },
        { name: "Symfony", category: "backend", iconName: "SiSymfony" },
        // Database
        { name: "PostgreSQL", category: "backend", iconName: "SiPostgresql" },
        { name: "MongoDB", category: "backend", iconName: "SiMongodb" },
        { name: "Firebase", category: "backend", iconName: "SiFirebase" },
        // Tools
        { name: "Docker", category: "tools", iconName: "SiDocker" },
        { name: "Git", category: "tools", iconName: "SiGit" },
      ];
      await db.insert(skills).values(skillList);

      // Seed Experiences
      await db.insert(experiences).values([
        {
          roleEn: "Freelance Mobile Developer",
          roleFr: "Développeur Mobile Freelance",
          company: "Eglise des Assemblées de Dieu du Togo",
          period: "Sept 2024 - April 2025",
          descriptionEn: "Designed a community management app using Flutter & Firebase. Managed events, notifications, and user data.",
          descriptionFr: "Conception d’une application de gestion communautaire (Flutter + Firebase). Gestion d’événements, notifications et stockage de données.",
        },
        {
          roleEn: "Fullstack Web Developer",
          roleFr: "Développeur web Fullstack",
          company: "INFINITUS SAS",
          period: "June 2023 - Feb 2025",
          descriptionEn: "Developed interfaces for C-APPS ERP (React/TS). Designed and implemented backend APIs (NestJS). Wrote Unit & E2E tests.",
          descriptionFr: "Développement d’interfaces pour le progiciel C-APPS (React/TS). Conception et implémentation d’API backend (NestJS). Tests unitaires & E2E.",
        }
      ]);

      // Seed Projects
      await db.insert(projects).values([
        {
          title: "Festive Creator",
          category: "fullstack",
          descriptionEn: "Memory sharing platform. Publish memories, comments, news feed. User auth and real-time DB with Appwrite. Donation system.",
          descriptionFr: "Plateforme de partage de souvenirs. Publication, commentaires, fil d’actualité. Authentification et base de données temps réel (Appwrite).",
          techStack: ["React", "Appwrite", "Vercel"],
          link: "#"
        },
        {
          title: "Community App",
          category: "mobile",
          descriptionEn: "Community management application for event handling and notifications.",
          descriptionFr: "Application de gestion communautaire pour la gestion d'événements et notifications.",
          techStack: ["Flutter", "Firebase"],
          link: "#"
        },
        {
          title: "C-APPS ERP",
          category: "fullstack",
          descriptionEn: "Enterprise Resource Planning system interfaces and API.",
          descriptionFr: "Interfaces et API pour système de planification des ressources d'entreprise.",
          techStack: ["React", "TypeScript", "NestJS"],
          link: "#"
        }
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
