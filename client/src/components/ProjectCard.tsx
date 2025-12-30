import { motion } from "framer-motion";
import { Github, Globe, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { type Project } from "@shared/schema";
import { useLanguage } from "@/hooks/use-language";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { language } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col overflow-hidden border-border/40 bg-card/40 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
        <div className="relative h-48 overflow-hidden bg-muted">
          {project.imageUrl ? (
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-blue-500/10">
              <span className="text-4xl font-bold opacity-20">{project.title.charAt(0)}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60" />
        </div>
        
        <CardHeader className="relative -mt-12 z-10 px-6 pb-2">
          <Badge variant="secondary" className="w-fit mb-2 bg-background/80 backdrop-blur text-primary border-primary/20">
            {project.category}
          </Badge>
          <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </CardHeader>

        <CardContent className="flex-grow px-6 py-4">
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
            {language === 'en' ? project.descriptionEn : project.descriptionFr}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs py-0.5 border-border/50 bg-secondary/30">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              {language === 'en' ? 'View Project' : 'Voir Projet'}
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
