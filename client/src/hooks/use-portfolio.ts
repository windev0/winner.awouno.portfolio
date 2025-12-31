import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

// Profile Hooks
export function useProfile() {
  return useQuery({
    queryKey: [api.profile.get.path],
    queryFn: async () => {
      const res = await fetch("/data.json");
      if (!res.ok) throw new Error("Failed to fetch profile");
      const json = await res.json();
      return api.profile.get.responses[200].parse(json.profile);
    },
  });
}

// Skills Hooks
export function useSkills() {
  return useQuery({
    queryKey: [api.skills.list.path],
    queryFn: async () => {
      const res = await fetch("/data.json");
      if (!res.ok) throw new Error("Failed to fetch skills");
      const json = await res.json();
      return api.skills.list.responses[200].parse(json.skills);
    },
  });
}

// Experiences Hooks
export function useExperiences() {
  return useQuery({
    queryKey: [api.experiences.list.path],
    queryFn: async () => {
      const res = await fetch("/data.json");
      if (!res.ok) throw new Error("Failed to fetch experiences");
      const json = await res.json();
      return api.experiences.list.responses[200].parse(json.experiences);
    },
  });
}

// Projects Hooks
export function useProjects() {
  return useQuery({
    queryKey: [api.projects.list.path],
    queryFn: async () => {
      const res = await fetch("/data.json");
      if (!res.ok) throw new Error("Failed to fetch projects");
      const json = await res.json();
      return api.projects.list.responses[200].parse(json.projects);
    },
  });
}

// Accomplishments Hooks
export function useAccomplishments() {
  return useQuery({
    queryKey: [api.accomplishments.list.path],
    queryFn: async () => {
      const res = await fetch("/data.json");
      if (!res.ok) throw new Error("Failed to fetch accomplishments");
      const json = await res.json();
      return api.accomplishments.list.responses[200].parse(json.accomplishments);
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
