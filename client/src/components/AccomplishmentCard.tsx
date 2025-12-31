import { type Accomplishment } from "@shared/schema";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Award, Briefcase, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AccomplishmentCardProps {
  accomplishment: Accomplishment;
  index: number;
  language: string;
}

const typeIcons = {
  certification: Award,
  workshop: Briefcase,
  training: BookOpen,
};

const typeColors = {
  certification: "bg-blue-500/20 text-blue-700 dark:text-blue-400",
  workshop: "bg-purple-500/20 text-purple-700 dark:text-purple-400",
  training: "bg-green-500/20 text-green-700 dark:text-green-400",
};

export function AccomplishmentCard({ accomplishment, index, language }: AccomplishmentCardProps) {
  const Icon = typeIcons[accomplishment?.type as keyof typeof typeIcons] || Award;
  const colorClass = typeColors[accomplishment.type as keyof typeof typeColors];

  const title = language === 'en' ? accomplishment.titleEn : accomplishment.titleFr;
  const description = language === 'en' ? accomplishment.descriptionEn : accomplishment.descriptionFr;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="p-6 bg-card/50 border-border/40 hover:bg-accent/10 transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg ${colorClass}`}>
            <Icon className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{description}</p>
                {accomplishment.organization && (
                  <p className="text-sm font-medium text-primary mb-2">{accomplishment.organization}</p>
                )}
              </div>
              {accomplishment.link && (
                <a href={accomplishment.link} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="ghost" className="p-2">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              )}
            </div>
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="text-xs">{accomplishment.date}</Badge>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
