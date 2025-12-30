import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import { type Skill } from "@shared/schema";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

// Helper to resolve icon component dynamically
const getIconComponent = (iconName: string) => {
  // @ts-ignore - dynamic access to icons
  return SiIcons[iconName] || FaIcons[iconName] || FaIcons.FaCode;
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = getIconComponent(skill.iconName);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col items-center justify-center p-6 bg-card/50 border-border/40 hover:bg-accent/10 hover:border-primary/30 transition-all duration-300">
        <div className="text-4xl mb-3 text-muted-foreground group-hover:text-primary transition-colors">
          <Icon className="text-primary/80" />
        </div>
        <span className="font-medium text-sm text-center">{skill.name}</span>
      </Card>
    </motion.div>
  );
}
