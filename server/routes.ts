import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed data on startup
  await storage.seedData();

  app.get(api.profile.get.path, async (req, res) => {
    const profile = await storage.getProfile();
    res.json(profile || {});
  });

  app.get(api.skills.list.path, async (req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  app.get(api.experiences.list.path, async (req, res) => {
    const experiences = await storage.getExperiences();
    res.json(experiences);
  });

  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.accomplishments.list.path, async (req, res) => {
    const accomplishments = await storage.getAccomplishments();
    res.json(accomplishments);
  });

  app.post(api.contact.send.path, async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Validate input
      const validated = api.contact.send.input.parse({ name, email, message });
      
      // Save to database
      await storage.createContactSubmission(validated);
      
      // Log for debugging
      console.log("Contact form submission saved:", { name, email, timestamp: new Date().toISOString() });
      
      // TODO: In production, integrate with email service (SendGrid, Mailgun, Resend, etc.)
      // to send email to awounokossiwinner@gmail.com and notify the user
      
      res.json({ success: true, message: "Message saved successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ success: false, message: "Failed to send message" });
    }
  });

  return httpServer;
}
