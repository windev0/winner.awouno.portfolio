import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { type InsertProfile, type InsertSkill, type InsertExperience, type InsertProject, type InsertAccomplishment } from "@shared/schema";

// Profile Hooks
export function useProfile() {
  return useQuery({
    queryKey: [api.profile.get.path],
    queryFn: async () => {
      const res = await fetch(api.profile.get.path);
      if (!res.ok) throw new Error("Failed to fetch profile");
      return api.profile.get.responses[200].parse(await res.json());
    },
  });
}

// Skills Hooks
export function useSkills() {
  return useQuery({
    queryKey: [api.skills.list.path],
    queryFn: async () => {
      const res = await fetch(api.skills.list.path);
      if (!res.ok) throw new Error("Failed to fetch skills");
      return api.skills.list.responses[200].parse(await res.json());
    },
  });
}

// Experiences Hooks
export function useExperiences() {
  return useQuery({
    queryKey: [api.experiences.list.path],
    queryFn: async () => {
      const res = await fetch(api.experiences.list.path);
      if (!res.ok) throw new Error("Failed to fetch experiences");
      return api.experiences.list.responses[200].parse(await res.json());
    },
  });
}

// Projects Hooks
export function useProjects() {
  return useQuery({
    queryKey: [api.projects.list.path],
    queryFn: async () => {
      const res = await fetch(api.projects.list.path);
      if (!res.ok) throw new Error("Failed to fetch projects");
      return api.projects.list.responses[200].parse(await res.json());
    },
  });
}

// Accomplishments Hooks
export function useAccomplishments() {
  return useQuery({
    queryKey: [api.accomplishments.list.path],
    queryFn: async () => {
      const res = await fetch(api.accomplishments.list.path);
      if (!res.ok) throw new Error("Failed to fetch accomplishments");
      return api.accomplishments.list.responses[200].parse(await res.json());
    },
  });
}

// Contact Hook
export function useContact() {
  return useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      const validated = api.contact.send.input.parse(data);
      const res = await fetch(api.contact.send.path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });
      if (!res.ok) throw new Error("Failed to send message");
      return api.contact.send.responses[200].parse(await res.json());
    },
  });
}
