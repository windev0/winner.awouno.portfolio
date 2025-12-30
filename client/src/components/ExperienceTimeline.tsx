import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { type Experience } from "@shared/schema";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent } from "@/components/ui/card";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const { language } = useLanguage();

  return (
    <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-12 py-4">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative pl-8 md:pl-12"
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary ring-4 ring-background" />

          <Card className="border-none bg-transparent shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-foreground">
                  {language === 'en' ? exp.roleEn : exp.roleFr}
                </h3>
                <span className="flex items-center text-xs font-mono text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                  <Calendar className="w-3 h-3 mr-2" />
                  {exp.period}
                </span>
              </div>
              
              <div className="flex items-center gap-2 mb-4 text-primary font-medium">
                <Briefcase className="w-4 h-4" />
                <span>{exp.company}</span>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {language === 'en' ? exp.descriptionEn : exp.descriptionFr}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
