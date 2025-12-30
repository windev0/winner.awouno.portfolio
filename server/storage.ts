import { db } from "./db";
import {
  profile, skills, experiences, projects, accomplishments, contactSubmissions,
  type Profile, type Skill, type Experience, type Project, type Accomplishment, type ContactSubmission
} from "@shared/schema";

export interface IStorage {
  getProfile(): Promise<Profile | undefined>;
  getSkills(): Promise<Skill[]>;
  getExperiences(): Promise<Experience[]>;
  getProjects(): Promise<Project[]>;
  getAccomplishments(): Promise<Accomplishment[]>;
  createContactSubmission(data: { name: string; email: string; message: string }): Promise<ContactSubmission>;
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

  async createContactSubmission(data: { name: string; email: string; message: string }): Promise<ContactSubmission> {
    const result = await db.insert(contactSubmissions).values(data).returning();
    return result[0];
  }

  async seedData(): Promise<void> {
    const existingProfile = await this.getProfile();
    if (!existingProfile) {
      // Seed Profile
      await db.insert(profile).values({
        name: "Winner AWOUNO",
        title: "Full Stack Web & Mobile Developer",
        bioEn: "Full Stack Web Developer | Node.js/NestJS, React/Next.js, Flutter | Designer of websites and automated business applications | I optimize your workflows to simplify everyday tasks and improve productivity.",
        bioFr: "Développeur FullStack Web & Mobile | Node.js/NestJS, React/Next.js, Flutter | Concepteur de sites web et d'applications métier automatisées | J'optimise vos flux pour simplifier le quotidien et améliorer la productivité.",
        email: "awounokossiwinner@gmail.com",
        githubUrl: "https://github.com/windev0",
        linkedinUrl: "https://www.linkedin.com/in/winner-awouno/",
        avatarUrl: "/attached_assets/img-profile_1767137840956.jpg",
      });

      // Seed Skills
      const skillList = [
        { name: "React.js", category: "Frontend", iconName: "SiReact" },
        { name: "Next.js", category: "Frontend", iconName: "SiNextdotjs" },
        { name: "TypeScript", category: "Frontend", iconName: "SiTypescript" },
        { name: "TailwindCSS", category: "Frontend", iconName: "SiTailwindcss" },
        { name: "Node.js", category: "Backend", iconName: "SiNodedotjs" },
        { name: "NestJS", category: "Backend", iconName: "SiNestjs" },
        { name: "Express", category: "Backend", iconName: "SiExpress" },
        { name: "Laravel", category: "Backend", iconName: "SiLaravel" },
        { name: "Symfony", category: "Backend", iconName: "SiSymfony" },
        { name: "Flutter", category: "Mobile", iconName: "SiFlutter" },
        { name: "Dart", category: "Mobile", iconName: "SiDart" },
        { name: "PostgreSQL", category: "Database", iconName: "SiPostgresql" },
        { name: "MongoDB", category: "Database", iconName: "SiMongodb" },
        { name: "Firebase", category: "Database", iconName: "SiFirebase" },
        { name: "Docker", category: "Tools", iconName: "SiDocker" },
        { name: "Git", category: "Tools", iconName: "SiGit" },
        { name: "Figma", category: "Tools", iconName: "SiFigma" },
      ];
      await db.insert(skills).values(skillList);

      // Seed Experiences
      await db.insert(experiences).values([
        {
          roleEn: "Fullstack Web Developer",
          roleFr: "Développeur web Fullstack",
          company: "INFINITUS SAS",
          period: "June 2023 - Feb 2025",
          descriptionEn: "Developed interfaces for C-APPS ERP (React/TS). Designed and implemented backend APIs (NestJS). Wrote Unit & E2E tests.",
          descriptionFr: "Développement d'interfaces pour le progiciel C-APPS (React/TS). Conception et implémentation d'API backend (NestJS). Tests unitaires & E2E.",
        },
        {
          roleEn: "Freelance Mobile Developer",
          roleFr: "Développeur Mobile Freelance",
          company: "Eglise des Assemblées de Dieu du Togo",
          period: "Sept 2024 - April 2025",
          descriptionEn: "Designed a community management app using Flutter & Firebase. Managed events, notifications, and user data storage.",
          descriptionFr: "Conception d'une application de gestion communautaire (Flutter + Firebase). Gestion d'événements, notifications et stockage de données.",
        }
      ]);

      // Seed Projects
      await db.insert(projects).values([
        {
          title: "Festive Creator",
          category: "fullstack",
          descriptionEn: "Memory sharing platform. Publish memories, comments, news feed. User auth and real-time DB with Appwrite. Donation system.",
          descriptionFr: "Plateforme de partage de souvenirs. Publication, commentaires, fil d'actualité. Authentification et base de données temps réel (Appwrite).",
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
        },
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
      ]);

      // Seed Accomplishments
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
          organization: "Freelance"
        },
        {
          titleEn: "Mathematics & Physics Trainer",
          titleFr: "Formateur en Mathématiques et Physique-Chimie",
          descriptionEn: "Taught mathematics and physics/chemistry to first and terminal D level students.",
          descriptionFr: "Formateur en maths et physique chimie, niveau première et terminal D",
          type: "training",
          date: "2023 - 2025",
          organization: "Freelance"
        }
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
