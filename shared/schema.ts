import { pgTable, text, serial, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Profile Information
export const profile = pgTable("profile", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  bioEn: text("bio_en").notNull(),
  bioFr: text("bio_fr").notNull(),
  email: text("email").notNull(),
  githubUrl: text("github_url"),
  linkedinUrl: text("linkedin_url"),
  avatarUrl: text("avatar_url"),
});

// Skills
export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(), // Frontend, Backend, Mobile, Database, Tools
  iconName: text("icon_name").notNull(), // for icon component lookup
});

// Experience
export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  roleEn: text("role_en").notNull(),
  roleFr: text("role_fr").notNull(),
  company: text("company").notNull(),
  period: text("period").notNull(),
  descriptionEn: text("description_en").notNull(),
  descriptionFr: text("description_fr").notNull(),
});

// Projects
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(), // frontend, backend, mobile, fullstack
  descriptionEn: text("description_en").notNull(),
  descriptionFr: text("description_fr").notNull(),
  techStack: text("tech_stack").array().notNull(), // Array of technologies used
  link: text("link"),
  imageUrl: text("image_url"),
});

// Accomplishments
export const accomplishments = pgTable("accomplishments", {
  id: serial("id").primaryKey(),
  titleEn: text("title_en").notNull(),
  titleFr: text("title_fr").notNull(),
  descriptionEn: text("description_en").notNull(),
  descriptionFr: text("description_fr").notNull(),
  type: text("type").notNull(), // certification, workshop, training
  date: text("date").notNull(),
  organization: text("organization"),
  link: text("link"),
});

// Schemas
export const insertProfileSchema = createInsertSchema(profile);
export const insertSkillSchema = createInsertSchema(skills);
export const insertExperienceSchema = createInsertSchema(experiences);
export const insertProjectSchema = createInsertSchema(projects);
export const insertAccomplishmentSchema = createInsertSchema(accomplishments);

// Types
export type Profile = typeof profile.$inferSelect;
export type Skill = typeof skills.$inferSelect;
export type Experience = typeof experiences.$inferSelect;
export type Project = typeof projects.$inferSelect;
export type Accomplishment = typeof accomplishments.$inferSelect;
