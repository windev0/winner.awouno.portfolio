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

  app.post(api.contact.send.path, (req, res) => {
    const { name, email, message } = req.body;
    
    // In production, you would integrate with an email service like SendGrid, Mailgun, etc.
    // For now, we'll log it and return success
    console.log("Contact form submission:", { name, email, message, timestamp: new Date().toISOString() });
    
    // You can add email sending here using nodemailer or similar
    // Example with nodemailer:
    // const transporter = nodemailer.createTransport({...});
    // await transporter.sendMail({
    //   from: process.env.EMAIL_FROM,
    //   to: process.env.EMAIL_TO,
    //   subject: `New message from ${name}`,
    //   text: message,
    //   replyTo: email,
    // });
    
    res.json({ success: true });
  });

  return httpServer;
}
