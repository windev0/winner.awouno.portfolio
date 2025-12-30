import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Download, 
  Code2, 
  Layers, 
  Cpu, 
  Menu,
  X,
  Award
} from "lucide-react";

import { useProfile, useSkills, useExperiences, useProjects, useAccomplishments } from "@/hooks/use-portfolio";
import { useLanguage } from "@/hooks/use-language";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ContactDialog } from "@/components/ContactDialog";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { AccomplishmentCard } from "@/components/AccomplishmentCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Home() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("experience");
  
  // Data Fetching
  const { data: profile, isLoading: profileLoading } = useProfile();
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: experiences, isLoading: experiencesLoading } = useExperiences();
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: accomplishments, isLoading: accomplishmentsLoading } = useAccomplishments();

  const isLoading = profileLoading || skillsLoading || experiencesLoading || projectsLoading || accomplishmentsLoading;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-muted-foreground animate-pulse">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  if (!profile) return null;

  const SidebarContent = () => (
    <div className="flex flex-col h-full p-6 md:p-8 lg:p-10 space-y-8">
      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <ThemeToggle />
        <LanguageToggle />
      </div>

      {/* Profile Info */}
      <div className="flex-1 flex flex-col items-center text-center space-y-6 mt-8">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full opacity-75 blur transition duration-500 group-hover:opacity-100" />
          <img 
            src={profile.avatarUrl || "https://github.com/windev0.png"} 
            alt={profile.name}
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-background object-cover shadow-2xl"
          />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
            {profile.name}
          </h1>
          <p className="text-xl text-muted-foreground font-medium">
            {profile.title}
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed max-w-sm">
          {language === 'en' ? profile.bioEn : profile.bioFr}
        </p>

        {/* Social Links */}
        <div className="flex gap-4">
          {profile.githubUrl && (
            <a 
              href={profile.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {profile.linkedinUrl && (
            <a 
              href={profile.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="space-y-4 w-full">
        <ContactDialog />
        <a 
          href="https://raw.githubusercontent.com/windev0/portfolio/main/AWOUNO_WINNER_RESUME_STAGE_1767134502978.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full border-primary/20 hover:border-primary/50 hover:bg-primary/5">
            <Download className="w-4 h-4 mr-2" />
            {language === 'en' ? 'Download CV' : 'Télécharger CV'}
          </Button>
        </a>
      </div>
    </div>
  );

  const MainContent = () => (
    <div className="p-6 md:p-12 lg:p-16 max-w-5xl mx-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-lg pb-6 pt-2">
          <TabsList className="w-full grid grid-cols-4 h-14 p-1 bg-secondary/50 rounded-xl">
            <TabsTrigger value="experience" className="rounded-lg text-xs sm:text-sm md:text-base font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">
              <Layers className="w-4 h-4 mr-1 md:mr-2 hidden sm:inline" />
              {language === 'en' ? 'Experience' : 'Expérience'}
            </TabsTrigger>
            <TabsTrigger value="skills" className="rounded-lg text-xs sm:text-sm md:text-base font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">
              <Cpu className="w-4 h-4 mr-1 md:mr-2 hidden sm:inline" />
              {language === 'en' ? 'Skills' : 'Compétences'}
            </TabsTrigger>
            <TabsTrigger value="projects" className="rounded-lg text-xs sm:text-sm md:text-base font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">
              <Code2 className="w-4 h-4 mr-1 md:mr-2 hidden sm:inline" />
              {language === 'en' ? 'Projects' : 'Projets'}
            </TabsTrigger>
            <TabsTrigger value="accomplishments" className="rounded-lg text-xs sm:text-sm md:text-base font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">
              <Award className="w-4 h-4 mr-1 md:mr-2 hidden sm:inline" />
              {language === 'en' ? 'Awards' : 'Récompenses'}
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="mt-8 min-h-[60vh]">
          <AnimatePresence mode="wait">
            <TabsContent value="experience" className="mt-0 outline-none">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">
                    {language === 'en' ? 'Work History' : 'Parcours Professionnel'}
                  </h2>
                  <p className="text-muted-foreground">
                    {language === 'en' ? 'My professional journey and career highlights.' : 'Mon parcours professionnel et mes réalisations.'}
                  </p>
                </div>
                {experiences && <ExperienceTimeline experiences={experiences} />}
              </motion.div>
            </TabsContent>

            <TabsContent value="skills" className="mt-0 outline-none">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">
                    {language === 'en' ? 'Technical Arsenal' : 'Arsenal Technique'}
                  </h2>
                  <p className="text-muted-foreground">
                    {language === 'en' ? 'Technologies and tools I work with.' : 'Les technologies et outils avec lesquels je travaille.'}
                  </p>
                </div>
                
                {skills && (
                  <div className="space-y-8">
                    {['Frontend', 'Backend', 'Mobile', 'Database', 'Tools'].map((category) => {
                      const categorySkills = skills.filter(s => s.category === category);
                      if (categorySkills.length === 0) return null;
                      return (
                        <div key={category}>
                          <h3 className="text-lg font-semibold mb-4 text-primary">{category}</h3>
                          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {categorySkills.map((skill, idx) => (
                              <div key={skill.id} className="aspect-square">
                                <SkillCard skill={skill} index={idx} />
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="projects" className="mt-0 outline-none">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">
                    {language === 'en' ? 'Featured Projects' : 'Projets Phares'}
                  </h2>
                  <p className="text-muted-foreground">
                    {language === 'en' ? 'A selection of my recent work.' : 'Une sélection de mes travaux récents.'}
                  </p>
                </div>
                
                {projects && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project, idx) => (
                      <ProjectCard key={project.id} project={project} index={idx} />
                    ))}
                  </div>
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="accomplishments" className="mt-0 outline-none">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">
                    {language === 'en' ? 'Accomplishments' : 'Accomplissements'}
                  </h2>
                  <p className="text-muted-foreground">
                    {language === 'en' ? 'Certifications, workshops, and training.' : 'Certifications, ateliers et formations.'}
                  </p>
                </div>
                
                {accomplishments && accomplishments.length > 0 && (
                  <div className="space-y-4">
                    {accomplishments.map((accomplishment, idx) => (
                      <AccomplishmentCard key={accomplishment.id} accomplishment={accomplishment} index={idx} language={language} />
                    ))}
                  </div>
                )}
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </div>
      </Tabs>
    </div>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-background font-sans">
      {/* Mobile Header / Nav */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b border-border z-50 flex items-center justify-between px-4">
        <span className="font-bold text-lg font-display tracking-tight">{profile.name}</span>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[85%] sm:w-[350px] p-0">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Fixed Sidebar (Left) */}
      <aside className="hidden md:block w-[350px] lg:w-[400px] h-full border-r border-border bg-card/30 backdrop-blur-sm overflow-hidden relative">
        <SidebarContent />
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
