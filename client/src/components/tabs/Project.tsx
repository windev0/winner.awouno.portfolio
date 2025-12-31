import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ProjectCard } from "../ProjectCard";

interface ProjectTabProps {
  projects:
    | {
        title: string;
        id: number;
        category: string;
        descriptionEn: string;
        descriptionFr: string;
        techStack: string[];
        link?: string | null | undefined;
        imageUrl?: string | null | undefined;
      }[]
    | undefined;
  language: string;
}
const ProjectTab = ({ language, projects }: ProjectTabProps) => {
  return (
    <TabsContent value="projects" className="mt-0 outline-none">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            {language === "en" ? "Featured Projects" : "Projets Phares"}
          </h2>
          <p className="text-muted-foreground">
            {language === "en"
              ? "A selection of my recent work."
              : "Une sélection de mes travaux récents."}
          </p>
        </div>

        {projects && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={{
                  ...project,
                  link: project.link ?? null,
                  imageUrl: project.imageUrl ?? null,
                }}
                index={idx}
              />
            ))}
          </div>
        )}
      </motion.div>
    </TabsContent>
  );
};

export default ProjectTab;
