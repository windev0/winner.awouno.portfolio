import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ContactDialog } from "@/components/ContactDialog";
import {
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { Button } from "./ui/button";


interface SidebarContentProps {
  profile: {
    name: string;
    title: string;
    bioEn: string;
    bioFr: string;
    email: string;
    id?: number | undefined;
    githubUrl?: string | null | undefined;
    linkedinUrl?: string | null | undefined;
    avatarUrl?: string | null | undefined;
  };
  language?: string;
}

const SidebarContent = ({ language, profile }: SidebarContentProps) => {
  return (
    <div className="flex flex-col h-full p-6 md:p-8 lg:p-10 space-y-8 overflow-y-auto">
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
          {language === "en" ? profile.bioEn : profile.bioFr}
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
          href="https://drive.google.com/uc?export=download&id=1OoReiQ_7z938BtQOSGhsv4C9YLaAygWf"
          download="AWOUNO_WINNER_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="w-full border-primary/20 hover:border-primary/50 hover:bg-primary/5"
          >
            <Download className="w-4 h-4 mr-2" />
            {language === "en" ? "Download CV" : "Télécharger CV"}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default SidebarContent;
