import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Layers, Cpu, Menu, Award } from "lucide-react";

import {
  useProfile,
  useSkills,
  useExperiences,
  useProjects,
  useAccomplishments,
} from "@/hooks/use-portfolio";
import { useLanguage } from "@/hooks/use-language";

import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SidebarContent from "@/components/SidebarContent";
import AccomplishmentTab from "@/components/tabs/Accomplishments";
import ProjectTab from "@/components/tabs/Project";
import SkillsTab from "@/components/tabs/Skills";
import ExperienceTab from "@/components/tabs/Experience";
import CustomTabTrigger from "@/components/tabs/Trigger";

export default function Home() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("experience");

  // Data Fetching
  const { data: profile, isLoading: profileLoading } = useProfile();
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: experiences, isLoading: experiencesLoading } = useExperiences();
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: accomplishments, isLoading: accomplishmentsLoading } =
    useAccomplishments();

  const isLoading =
    profileLoading ||
    skillsLoading ||
    experiencesLoading ||
    projectsLoading ||
    accomplishmentsLoading;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-muted-foreground animate-pulse">
            Loading Portfolio...
          </p>
        </div>
      </div>
    );
  }

  if (!profile) return null;

  const tabsLabels = {
    experience: language === "en" ? "Experience" : "Expérience",
    skills: language === "en" ? "Skills" : "Compétences",
    projects: language === "en" ? "Projects" : "Projets",
    accomplishments: language === "en" ? "Awards" : "Récompenses",
  };
  
  const MainContent = () => (
    <div className="p-6 md:p-12 lg:p-16 max-w-5xl mx-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-lg pb-6 pt-2">
          <TabsList className="w-full grid grid-cols-4 h-14 p-1 bg-secondary/50 rounded-xl">
            {Object.entries(tabsLabels).map(([key, label]) => (
              <CustomTabTrigger value={key} key={key} label={label} />
            ))}
          </TabsList>
        </div>

        <div className="mt-8 min-h-[60vh]">
          <AnimatePresence mode="wait">
            {/* Experience tab */}
            <ExperienceTab
              language={language}
              experiences={experiences || []}
            />

            {/* Skills tab */}
            <SkillsTab language={language} skills={skills || []} />

            {/* Projects tab */}
            <ProjectTab language={language} projects={projects || []} />

            {/* Accomplishment tab */}
            <AccomplishmentTab
              language={language}
              accomplishments={accomplishments || []}
            />
          </AnimatePresence>
        </div>
      </Tabs>
    </div>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-background font-sans">
      {/* Mobile Header / Nav */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b border-border z-50 flex items-center justify-between px-4">
        <span className="font-bold text-lg font-display tracking-tight">
          {profile.name}
        </span>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[85%] sm:w-[350px] p-0">
            <SidebarContent profile={profile} language={language} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Fixed Sidebar (Left) */}
      <aside className="hidden md:block w-[350px] lg:w-[450px] h-full border-r border-border bg-card/30 backdrop-blur-sm overflow-hidden relative">
        <SidebarContent profile={profile} language={language} />
      </aside>

      {/* Scrollable Main Content (Right) */}
      <main className="flex-1 h-full overflow-y-auto overflow-x-hidden pt-16 md:pt-0 relative scroll-smooth">
        {/* Decorative Background Elements */}
        <div className="fixed top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="fixed bottom-0 left-1/3 -z-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <MainContent />
      </main>
    </div>
  );
}
