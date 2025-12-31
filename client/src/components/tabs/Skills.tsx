import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { SkillCard } from "../SkillCard";

interface SkillsTabProps {
  skills:
    | {
        id: number;
        name: string;
        category: string;
        iconName: string;
      }[]
    | undefined;
  language: string;
}

const SkillsTab = ({ language, skills }: SkillsTabProps) => {
  return (
    <TabsContent value="skills" className="mt-0 outline-none">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            {language === "en" ? "Technical Arsenal" : "Arsenal Technique"}
          </h2>
          <p className="text-muted-foreground">
            {language === "en"
              ? "Technologies and tools I work with."
              : "Les technologies et outils avec lesquels je travaille."}
          </p>
        </div>

        {skills && skills.length > 0 && (
          <div className="space-y-8">
            {["Frontend", "Backend", "Mobile", "Database", "Tools"].map(
              (category) => {
                const categorySkills = skills.filter(
                  (s) => s.category === category
                );
                if (categorySkills.length === 0) return null;
                return (
                  <div key={category}>
                    <h3 className="text-lg font-semibold mb-4 text-primary">
                      {category}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {categorySkills.map((skill, idx) => (
                        <div key={skill.id} className="aspect-square">
                          <SkillCard skill={skill} index={idx} />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        )}
      </motion.div>
    </TabsContent>
  );
};

export default SkillsTab;
